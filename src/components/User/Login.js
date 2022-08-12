import React, {useState, useRef} from "react";
import LabeledInput from "../BasicComponents/LabeledTextInput"
export default (props)=>{
    const [logname, setLogname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password")
    const passwordlabel = useRef({clientWidth:0, offsetLeft:0, offsetTop:0})
    return (<div className={props.outerClassName}>
            <div className="column">
                <div className={props.innerClassName}>
                    <LabeledInput className={props.lognameClass} label={props.lognameLabel} placeholder={props.lognamePlaceholder} value={logname} onChange={setLogname}/>
                    <LabeledInput ref={passwordlabel} type={passwordType} className={props.passwordClass} label={props.passwordLabel} placeholder={props.passwordPlaceholder} value={password} onChange={setPassword} onEnter={()=>{
                        props.login(logname, password)
                    }}/>
                    <i className={passwordType=="password"?"fa fa-eye open":"fa fa-eye-slash shut"} style={{position:"absolute", top:passwordlabel.current.offsetTop+(navigator.userAgent.match(/Firefox/)?11:3), left:passwordlabel.current.offsetLeft+passwordlabel.current.clientWidth+(navigator.userAgent.match(/Firefox/)?9:0)}} onClick={()=>{
                        setPasswordType(passwordType=="password"?"text":"password")
                    }}></i>
                </div>
                {props.moreInnerHTML}
            
            </div>
            <button className={props.buttonClass} onClick={()=>{
                props.login(logname, password)
            }}>{props.buttonInnerHTML||"LOGIN"}</button>
        </div>)
}
