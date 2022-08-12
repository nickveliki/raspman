import React, {useState} from "react";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";
import {NavLink} from "react-router-dom";

export default (props)=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordrep, setPasswordrep] = useState("");
    const [passwordType, setPasswordType] = useState(false)
    const [gelesenAkzeptiert, setGelesenAkzeptiert] = useState(false)

    return (<div className={props.className}>
                <LabeledTextInput value={name} onChange={setName} className={props.nameClass||props.allInputsClass} label={props.nameLabel} placeholder={props.namePlaceholder}/>
                <LabeledTextInput value={email} onChange={setEmail} className={props.emailClass||props.allInputsClass} label={props.emailLabel} placeholder={props.emailPlaceholder}/>
                <LabeledTextInput value={password} onChange={setPassword} type={passwordType?"text":"password"} className={props.passwordClass||props.allInputsClass} label={props.passwordLabel} placeholder={props.passwordPlaceholder}/>
                <LabeledTextInput value={passwordrep} onChange={setPasswordrep} type={passwordType?"text":"password"} className={props.passwordClass||props.allInputsClass} label={props.passwordrepLabel} placeholder={props.passwordrepPlaceholder} onEnter={()=>{
                    props.register(name, email, password, passwordrep, gelesenAkzeptiert)
                }}/>
                <div className="apart inputwidth">
                <label>Passwörter zeigen</label>
                <input type="checkbox" checked={passwordType} onChange={()=>{setPasswordType(!passwordType)}} />
                </div>
        
                <div className={props.buttonAndCheckboxClass}>
                    <button className={props.buttonClass} onClick={()=>{
                        props.register(name, email, password, passwordrep, gelesenAkzeptiert)
                    }}>{props.buttonInnerHTML||"Registrieren"}</button>
                    <div>
                        <label>Ich habe die Hinweise zum Datenschutz und die AGB gelesen, verstanden, und akteptiert:</label>
                        <input type="checkbox" checked={gelesenAkzeptiert} onChange={()=>{setGelesenAkzeptiert(!gelesenAkzeptiert)}} />
                    </div>
                    <div className="apart">
                        <NavLink to="/AGB">AGB</NavLink>
                        <NavLink to="/Datenschutz">Datenschutz</NavLink>
                    </div>
                </div>
                
            </div>)
}