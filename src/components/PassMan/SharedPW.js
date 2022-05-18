import React, {useState} from "react";

export default (props)=>{
    const [passClear, setPassClear] = useState("")
    const [mouseOverPass, setMouseOverPass] = useState(false)
    if(!props.myKey&&props.encrypted_pw&&props.iv&&!passClear){
        import("../../services/api").then(({decryptLocal})=>{
            decryptLocal(props.encrypted_pw, props.iv, props.target_pw_id, props.sharer_id).then(setPassClear, console.error)
        })
    }
    return <div className={window.innerWidth<465?"fill-w":"grid-5"} style={{alignItems:"center"}}>
        <label style={{"wordBreak":"break-all"}}>{props.target_pw_id}</label>
        {!props.myKey&&!props.target_temp_pub&&<div><button onClick={()=>{
            import("../../services/api").then(({acceptPW})=>{
                acceptPW(props.token, props.sharer_id, props.target_pw_id, props.sharer_temp_pub).then(console.log, console.error)
            })
        }} className="white noborder mTextbtnback pointer">accept</button></div>}
        {props.myKey&&props.target_temp_pub&&!props.encrypted_pw&&<div><button className="white noborder mTextbtnback pointer" onClick={()=>{
            import("../../services/api").then(({sendEncryptedPW})=>{
                props.passwordDecrypt().then((password)=>{
                    sendEncryptedPW(props.token, props.target_id, props.target_pw_id, props.target_temp_pub, password)
                })
            })
        }}>send encrypted key</button></div>}
        {!props.myKey&&props.encrypted_pw&&<div><label onMouseEnter={()=>{
            setMouseOverPass(true)
        }} onMouseLeave={()=>{
            setMouseOverPass(false)
        }} >{mouseOverPass?passClear:new Array(passClear.length).fill("*").join("")}</label></div>}
        {passClear&&<div><button className="white noborder mTextbtnback pointer marginSmall" onClick={()=>{navigator.clipboard.writeText(props.decrypted).then(console.log, console.log)}} >&rarr;clipboard</button></div>}
        {passClear&&<div><button onClick={()=>{
            import("../../services/api").then(({setPassword})=>{
                setPassword(props.target_pw_id, props.hash, passClear, props.token).catch(console.log)
            })
        }} className="white noborder mTextbtnback pointer">import to db</button></div>}
    </div>
}