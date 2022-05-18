import React, {useState} from "react";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";
import Login from "../../assets/login.png"
import refresh from "../../assets/refresh.png"
import { randomSymbols } from "../../services/misc";
export default (props)=>{
    const [password, setPassword] = useState("");
    const [id, newID] = useState("");
    return <div>
        <LabeledTextInput onChange={newID} value={id} placeholder="password id"/>
        <LabeledTextInput onChange={setPassword} value={password} placeholder="password"/><button onClick={()=>{
        setPassword(randomSymbols(12))
    }} className="white noborder pointer login"><img className="tinybtnimg" src={refresh}/></button><button onClick={()=>{
        props.setPassword(id, password);
        setPassword("")
        newID("")
    }} className="white noborder pointer login"><img className="tinybtnimg" src={Login}/></button></div>
}