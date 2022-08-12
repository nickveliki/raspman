import React, {useState} from "react";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";

export default (props)=>{
    const [confirmString, setConfirmString] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState(false)

    return (<div className={props.className}>
            <div className="login">
            <LabeledTextInput type={passwordType?"text":"password"} label={props.passwordLabel} className={props.passwordClass||props.allInputsClass} placeholder={props.passwordPlaceholder} onChange={setPassword} value={password}/>
            <i className={!passwordType?"fa fa-eye open":"fa fa-eye-slash shut"} onClick={()=>{
                setPasswordType(!passwordType)
            }}></i>
            </div>
            
            <LabeledTextInput label={props.confirmStringLabel} className={props.confirmStringClass||props.allInputsClass} placeholder={props.confirmStringPlaceholder} onChange={setConfirmString} value={confirmString} onEnter={()=>{
                props.changePassword(password, confirmString);
            }}/>
            <button onClick={()=>{
                props.changePassword(password, confirmString);
            }}>{props.buttonInnerHTML||"PASSWORT ÄNDERN"}</button>
        </div>)
}