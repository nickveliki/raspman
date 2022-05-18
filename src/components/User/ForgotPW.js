import React, {useState} from "react";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";

export default (props)=>{
    const [logname, setLogname] = useState("");
    return (<div className={props.className}>
            <LabeledTextInput type="email" onEnter={()=>{
                props.submit(logname)
            }} onChange={setLogname} value={logname} placeholder={props.placeholder} className={props.lognameClass}/>
            <button className={props.buttonClass} onClick={()=>{
                props.submit(logname)
            }}>{props.buttonInnerHTML||"ABSENDEN"}</button>
        </div>)
}