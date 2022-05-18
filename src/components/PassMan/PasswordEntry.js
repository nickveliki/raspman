import React, {useState} from "react";
import ok from "../../assets/ok.png"

export default (props)=>{
    const [shareselect, setShareSelect] = useState(false)
    const [shareusers, setShareUsers] = useState([])
    const [target_id, set_target_id] = useState(undefined)
    return <div className={window.innerWidth<465?"fill-w":"grid-5"} style={{alignItems:"center"}}>
    <label style={{"wordBreak":"break-all"}}>{props.id}</label>
    {props.decrypted?<label>{props.decrypted}</label>:<div><button onClick={props.decrypt} className="white noborder mTextbtnback pointer marginSmall">Decrypt</button></div>}
    {props.decrypted&&<div><button className="white noborder mTextbtnback pointer marginSmall" onClick={()=>{navigator.clipboard.writeText(props.decrypted).then(console.log, console.log)}} >&rarr;clipboard</button></div>}
    <div><button className="white noborder mTextbtnback pointer marginSmall" onClick={()=>{
        if(!shareselect){
            import("../../services/api").then(({getpwmanusers})=>{
            getpwmanusers(props.token).then((users)=>{
                setShareUsers(users);
                if(users.length){
                    set_target_id(users[0].id)
                }
            })
        })}
        setShareSelect(!shareselect)
    }}>{shareselect?"don't ":""}share key</button></div>
    {shareselect&&<div className="login marginSmall"><select className="white" onChange={(ev)=>{
        //console.log(shareusers[ev.target.selectedIndex])
        set_target_id(shareusers[ev.target.selectedIndex].id)
    }}>{shareusers.map(({name})=><option key={name}>{name}</option>)}</select><button className="white noborder pointer login" onClick={()=>{
        import("../../services/api").then(({sharePW})=>{
            sharePW(props.token, target_id, props.id)
        })
    }}><img className="btnimg" src={ok}/></button></div>}
</div> }