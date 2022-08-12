import React, {useState} from "react";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";
import {connect} from "react-redux";

export default connect((state)=>state)((props)=>{
    
    const [name, setName] = useState(props.state.user.name)
    const [emailrep, setEmailrep] = useState("");
    const [password, setPassword] = useState("");
    const [passwordrep, setPasswordrep] = useState("");
    const [passwordType, setPasswordType] = useState(false)
    return (<div className={props.className}>
        <LabeledTextInput value={name} onChange={setName} className={props.nameClass||props.allInputsClass} label={props.nameLabel} placeholder={props.namePlaceholder}/>
                <LabeledTextInput type="email" value={emailrep} onChange={setEmailrep} className={props.emailClass||props.allInputsClass} label={props.emailrepLabel} placeholder={props.emailrepPlaceholder}/>
                <LabeledTextInput value={password} onChange={setPassword} type={passwordType?"text":"password"} className={props.passwordClass||props.allInputsClass} label={props.passwordLabel} placeholder={props.passwordPlaceholder}/>
                <LabeledTextInput value={passwordrep} onChange={setPasswordrep} type={passwordType?"text":"password"} className={props.passwordClass||props.allInputsClass} label={props.passwordrepLabel} placeholder={props.passwordrepPlaceholder} onEnter={()=>{
                    props.patch(name, email, emailrep, password, passwordrep)
                }}/>
                <div className="apart inputwidth">
                <label>Passwörter zeigen</label>
                <input type="checkbox" checked={passwordType} onChange={()=>{setPasswordType(!passwordType)}} />
                </div>
                <button className={props.buttonClass} onClick={()=>{
                        props.patch(name, emailrep, password, passwordrep)
                    }}>{props.buttonInnerHTML||"Daten anpassen"}</button>

    </div>)

})