import React, {useState, useRef, useEffect} from "react"
import FileModeHeader from "./FileModeHeader"
import {connect} from "react-redux";
import PanelModal from "../BasicComponents/PanelModal";

export default connect((state)=>state)((props)=>{
    const [currentText, setCurrentText] = useState(undefined)
    const texteditor = useRef();
    useEffect(()=>{
        if(texteditor.current){
            texteditor.current.focus()
        }
    })
    if(props.state.openFile&&props.state.openFile.mode=="text"&&!props.state.openFile.content){
        import("../../services/api").then(({getText})=>{
            getText(props.state.openFile.file, props.state.token).then((content)=>{
                props.dispatch({type:"setopenfiletextcontent", openFile:{...props.state.openFile, content}})
            })
        })
    }
    if(!currentText&&props.state.openFile&&props.state.openFile.mode=="text"&&props.state.openFile.content){
        setCurrentText(props.state.openFile.content)
    }
    return <div className="column" style={{zIndex:8, position:"absolute", width: window.innerWidth-16, height:window.innerHeight-16, top:8, left:8, display:props.state.openFile&&props.state.openFile.mode=="text"?"unset":"none"}}>
    <FileModeHeader close={()=>{
        props.dispatch({type:"closefilewarn", openFile: {...props.state.openFile, preclose: true}})
    }}/>
    <textarea style={{width:window.innerWidth-18, height:window.innerHeight-36}} ref={texteditor} value={currentText||""} onChange={(ev)=>{
        setCurrentText(ev.target.value)
        setTimeout(()=>{
            props.dispatch({type:"updateText", openFile:{...props.state.openFile, content:currentText}})
        }, 3000)
        }}/>
    <PanelModal style={{zIndex:9}} open={props.state.openFile&&props.state.openFile.preclose} panelHead={`Wollen Sie ${props.state.fileOpen?.file} wirklich schließen?`} innerClassName="login apart" components={[<button onClick={()=>{
        props.dispatch({type:"closefile", openFile: undefined})
    }} className="white noborder pointer mTextbtnback">Ja</button>, <button onClick={()=>{
        props.dispatch({type:"closefileno", openFile: {...props.state.openFile, preclose: undefined}})
    }} className="white noborder pointer mTextbtnback">Nein</button>]}/>
</div>})