import React, {useState} from "react";
import LabeledTextInput from "./LabeledTextInput";
import cross from "../../assets/cross.png"
export default (props)=>{
    const [scope, setScope] = useState("");
return <div className="login"><LabeledTextInput style={{input:{width:"75%"}}} value={scope} onChange={setScope}/><button className="white noborder login pointer" onClick={()=>{
    if(scope.length){
        props.addScope(scope);
        setScope("")
    }
}}><img className="tinybtnimg rotate-45" src={cross}/></button></div>}