import React, {useRef, useState, useEffect} from "react";
import Panel from "../BasicComponents/Panel";
import FileBack from "../../assets/FileBack.png"
import ScopeView from "../BasicComponents/ScopeView";
import NewScope from "../BasicComponents/NewScope";

const getFileFG = (name)=>{
    const [, ext] = name.split(".");
    if(!ext){
        return undefined
    }else{
        switch(ext){
            default: return undefined;
        }
    }
}
const FileView = (props)=>{
    const [imgPos, setImgPos] = useState({offsetTop: 0, offsetLeft: 0})
    const backimg = useRef({offsetTop: 0, offsetLeft: 0})
    useEffect(()=>{
        setImgPos(backimg.current)
    })
return <button style={{wordBreak:"break-all"}} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={(props.selected?"selected ":"")+"noborder white pointer login"}><img ref={backimg} className="folderimg" src={FileBack}/>{getFileFG(props.name)&&<img className="tinybtnimg" src={getFileFG(props.name)} style={{position:"absolute", top:imgPos.offsetTop+5, left:imgPos.offsetLeft+5}}/>}{props.name}</button>
}
export default (props)=>props.isAdmin?<Panel fill={true} className={props.selected?"selected":""} panelHead={<FileView {...props}/>} components={[...props.requiredScopes.map((scope)=><ScopeView scope={scope} removeScope={()=>{props.removeScope(scope)}}/>), <NewScope addScope={props.addScope}/>]}/>:<FileView {...props} />