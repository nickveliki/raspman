import React, { useState, useRef, useEffect } from "react";
import PanelModal from "../BasicComponents/PanelModal";
import { connect } from "react-redux";
import cross from "../../assets/cross.png";
import FolderFGOut from "../../assets/FolderFGOut.png"
import FolderView from "./FolderView";
import ok from "../../assets/ok.png";
import CreateNewItem from "./CreateNewItem";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";
import FileView from "./FileView";
import {isAdmin, pathcombine} from "../../services/misc";
import SelectOpenMode from "./SelectOpenMode";
import TextMode from "./TextMode";
import VideoMode from "./VideoMode";
import Loader from "../BasicComponents/Loader";
import refresh from "../../assets/refresh.png"
import CastMode from "./CastMode";

const insertPathItemToFSTree = (fsTree, path, PathItem)=>{
    const pathsegment = path.split("/").filter((segment)=>segment.length)[0]
    let currentBranch = fsTree.Folders.find(({name})=>name==segment)
    if(pathsegment==PathItem.name){
        currentBranch=PathItem
    }else{
        insertPathItemToFSTree(currentBranch, path.filter((segment)=>segment.length).slice(1).join("/"))
    }
}
const resolveFilePathItem = (fsTree, path)=>{
    const pathsegments = path.split("/").filter((segment)=>segment.length);
    // console.log(pathsegments)
    if(pathsegments.length){
        return resolveFilePathItem(fsTree.Folders.find(({name})=>name==pathsegments[0]), pathsegments.slice(1).join("/"))
    }else{
        return fsTree
    }
}

const grdColumns = (num)=>{
    let fr = ["1fr"]
    for (let i = 1; i < num; i++){
        fr.push("1fr")
    }
    return fr.join(" ");
}
export default connect((state) => state)((props) => {
    const [labelInput, setLabelInput] = useState("");
    const [path, setPath] = useState("/")
    const [selected, setSelected] = useState(undefined);
    const frame = useRef({clientWidth:0})
    const [gridColumns, setGridColumns] = useState(1);

    useEffect(()=>{
        //console.log(frame.current.clientWidth)
        if(frame.current){
            setGridColumns(Math.floor(frame.current.clientWidth/101)||1)
        }
    })
    const newbtn = useRef({offsetTop:0, offsetLeft:0})
    
    // console.log(selected)
    // console.log(props)
    // const ResolveFileSystemItems = ()=>{
    //     const pathsegments = path.split("/");
    //     // console.log(pathsegments)
    //     if(pathsegments.length>2){
    //         let curpath = {...props.state.FileSystem};
    //         console.log({curpath})
    //         pathsegments.forEach((segment)=>{
    //             if(segment!=""&&curpath.Folders&&curpath.Folders.find(({name})=>name==segment)){
    //                 curpath={...curpath.Folders.find(({name})=>name==segment)}
    //             }
    //         })
    //         console.log(curpath)
    //         return curpath
    //     }else{
    //         return {Files:props.state.Filesystem.Files, Folders: props.state.Filesystem.Folders}
    //     }
    // }
    const curpath = props.state.Filesystem?resolveFilePathItem(props.state.Filesystem, path):{};
    const addScope = (route, scope)=>{
        import("../../services/api").then(({addRouteToScope})=>{
            addRouteToScope(route, scope, props.state.token).then(()=>{
                const changedObject = [...curpath.Files, ...curpath.Folders].find(({name})=>route.endsWith(name));
                changedObject.requiredScopes = [...changedObject.requiredScopes.filter((scope)=>scope!="admin"), scope]
                props.dispatch({type:"updateFileSystem", Filesystem: props.state.Filesystem})
            })
        })
    }
    //console.log(curpath)
    if(!curpath){
        return <div style={{display:"none"}}></div>
    }else if(!curpath.Folders&&!curpath.Files&&!props.state.error){
        import("../../services/api").then(({getFolderContent})=>{
            getFolderContent(path, props.state.token).then(({Files, Folders})=>{
                curpath.Files = Files;
                curpath.Folders = Folders
                props.dispatch(({type:"updatefs", Filesystem: props.state.Filesystem?props.state.Filesystem:curpath}))
            }, (error)=>{
                props.dispatch({type:"seterror", error, Filesystem:{Files:[], Folders:[]}})
            })
        })
    }
    return <PanelModal  style={{width:"100%", maxWidth:"700px", height:"100%", maxHeight:"400px"}} className="overflowNo fill" nthclass={[...(curpath.Folders?curpath.Folders:[]), ...(curpath.Files&&props.state.chooseFile?curpath.Files:[])].map((item, i)=>({class:"column", i}))} innerClassName="fill overflow" panelHead={<div ref={frame} className="login"><label>{path}</label><button className="white noborder login pointer" onClick={() => {
        setPath("/"+path.split("/").filter((seg)=>seg.length).slice(0, path.split("/").filter((seg)=>seg.length).length - 1).join("/"))
    }}><img className="folderimg" style={path == "/" ? { filter: "grayscale(1)" } : {}} src={FolderFGOut}/></button>
    <button className="white noborder login pointer" onClick={()=>{
        import("../../services/api").then((api)=>{
            const [fun, arg] = props.state.folderArgs;
            // console.log(fun, arg, api[fun])
            api[fun](arg, selected, props.state.token).then((RO)=>{
                props.dispatch({type:"folderactionresult", ...(RO||[]), chooseFile: undefined, chooseFolder: undefined})
            }, (error)=>{
                props.dispatch({type:"seterror", error})
            })
        })
    }}><img className="folderimg" style={selected?{}:{transform:"grayscale(1)"}} src={ok} /></button>
    <button className="white noborder login pointer" onClick={() => {
        props.dispatch(({ type: "closefilechooser", chooseFile: undefined, chooseFolder: undefined }))
    }}><img className="folderimg" src={cross} /></button><button className="white noborder login pointer" ref={newbtn} onClick={()=>{
        props.dispatch({type:"setCreateNewItem", createNewItem:path})
    }}><img className="folderimg rotate-45" src={cross}/></button ><button className="white noborder login pointer" onClick={()=>{
        curpath.Files = undefined;
        curpath.Folders = undefined;
        props.dispatch({type:"refresh", Filesystem:props.state.Filesystem})
    }}><img className="folderimg" src={refresh}/></button></div>} open={props.state.chooseFile || props.state.chooseFolder} component={<div style={{display:"grid", gridTemplateColumns:grdColumns(gridColumns)}} >{[
        ...curpath.Folders?curpath.Folders.map((Folder)=><FolderView key={Folder.name} selected={selected==pathcombine(path, Folder.name)} {...Folder} showScopes={isAdmin(props.state.token)} addScope={(scope)=>{
            addScope(pathcombine(path, Folder.name), scope)
        }} onClick={props.state.chooseFile?()=>{
            setPath(pathcombine(path, Folder.name))
        }:()=>{
            if(pathcombine(path, Folder.name)==selected){
                setSelected(undefined)
            }else{
                setSelected(pathcombine(path, Folder.name))
            }
        }} onDoubleClick={()=>{
            setPath(pathcombine(path, Folder.name))
        }}/>):[<Loader />],...(props.state.chooseFile&&curpath.Files?curpath.Files.map((F)=><FileView key={F.name} selected={selected==pathcombine(path, F.name)} addScope={(scope)=>{
            addScope(pathcombine(path, F.name), scope)
        }} onClick={()=>{
            setSelected(pathcombine(path, F.name))
        }} {...F} isAdmin={isAdmin(props.state.token)} onDoubleClick={()=>{
            props.dispatch({type:"openFile", openFile:{mode:"select", file: pathcombine(path, F.name)}})
        }} />):[]), <CreateNewItem top={newbtn.current.offsetTop} grayfolder={path=="/"} left={newbtn.current.offsetLeft}
        mkdir={()=>{
            if(path!="/"){
                props.dispatch({type:"setMkDirParentPath", mkdirparentpath:path, createNewItem:undefined})
            }
        }}
    cancel={()=>{
        props.dispatch({type:"unsetCreateItem", createNewItem:undefined})
    }} admin={isAdmin(props.state.token)} selectFile={(file)=>{
        props.dispatch({type:"setSelectedFile", selectedFile:file, createNewItem:undefined})
    }} visible={props.state.createNewItem!=undefined}/>,
        <PanelModal key="panelmodal1" panelHead={<div className="login">{props.state.mkdirparentpath?"Neuer Ordner in "+props.state.mkdirparentpath:props.state.selectedFile?"Datei hochladen"+props.state.selectedFile.name:""}<button className="noborder white pointer login"><img onClick={()=>{
            import("../../services/api").then(({mkdir, uploadFile, createFile})=>{
                let P;
                if(props.state.mkdirparentpath){
                    P = mkdir(path, labelInput, props.state.token)
                }else if (props.state.newFilePath){
                    P = createFile(path, labelInput, props.state.token)
                }else if (props.state.selectedFile){
                    P = uploadFile(path, props.state.selectedFile)
                }
                P.then(()=>{
                    curpath.Folders = undefined;
                    curpath.Files = undefined;
                    props.dispatch({type:"updateFS", Filesystem:props.state.Filesystem, selectFile:undefined, mkdirparentpath:undefined, newFilePath:undefined})
                }, (err)=>{
                    props.dispatch({type:"seterr", error:err, selectFile:undefined, mkdirparentpath:undefined, newFilePath:undefined})
                })
            })
            
        }} className="folderimg" src={ok}/></button><button onClick={()=>{
            props.dispatch({type:"resetInput", selectFile:undefined, mkdirparentpath:undefined, newFilePath: undefined})
        }} className="noborder white pointer login"><img className="folderimg" src={cross}/></button></div>} open={props.state.mkdirparentpath!=undefined||props.state.selectFile!=undefined} style={{top:newbtn.current.offsetTop, left:newbtn.current.offsetLeft}} component={props.state.selectFile?<div></div>:<LabeledTextInput label={props.state.mkdirparentpath?"Ordnername":"Dateiname"} onChange={setLabelInput} value={labelInput}/>}/>,
        <PanelModal key="openasmodal" panelHead={`${selected} öffnen als...`} open={props.state.openFile&&props.state.openFile.mode=="select"} component={<SelectOpenMode />}/>
        ,<TextMode />, <VideoMode />, <CastMode />
    ]}</div>} />
})