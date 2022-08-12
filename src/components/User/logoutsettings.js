import React, {useState, useRef} from "react"

export default (props)=>{
    const [userSettingsOpen, setUserSettingsOpen] = useState(false)
    const userSettingsButton = useRef({clientHeight:0, offsetTop:0, offsetLeft:0})
    return (<div className={props.className}>
        <button ref={userSettingsButton} onClick={()=>{setUserSettingsOpen(!userSettingsOpen)}} className={props.settingsButton||props.allButtonsClass}>{props.settingsInnerHTML}</button>
        <label>{props.userName}</label>
        <button onClick={props.logoutClick} className={props.logoutClass||props.allButtonsClass}>{props.logoutInnerHTML}</button>
            <div style={{display:(userSettingsOpen&&!props.modSwitch)||(!userSettingsOpen&&props.modSwitch)?"":"none", position:"absolute", top:userSettingsButton.current.offsetTop+userSettingsButton.current.clientHeight, left:userSettingsButton.current.offsetLeft}} className={props.modalClass}>
                {props.settingsModalComponent}
            </div>
        </div>
        )
}