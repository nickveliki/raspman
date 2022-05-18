import React, { useState } from "react";
import { connect } from "react-redux";
import { hasScopes, myID } from "../services/misc";
import LabeledTextInput from "./BasicComponents/LabeledTextInput";
import NotFound from "./NotFound";
import SharedPW from "./PassMan/SharedPW";
import Login from "../assets/login.png"
import ok from "../assets/ok.png"
import Panel from "./BasicComponents/Panel";
import PasswordEntry from "./PassMan/PasswordEntry";
import NewPW from "./PassMan/NewPW";

export default connect((state)=>state)((props)=>{
    const [MPW, setMPW] = useState("");
    const [idsearch, setidsearch] = useState("");
    const hasScope = hasScopes(props.state.token, "pwman")
    if(props.state.token&&!props.state.error&&!props.state.passwords&&hasScope){
        import("../services/api").then(({getPasswords})=>{
            getPasswords(props.state.token).then((passwords)=>{
                props.dispatch({type:"setPasswords", passwords})
            })
        })
    }
    const setMasterPasswordHandler = ()=>{
        import("../services/api").then(({setMasterPassword, unsetMasterKey, stopSharedPWsQuerys, getSharedPWs})=>{
            setMasterPassword(props.state.token, MPW).then(({hash, salt})=>{
                props.dispatch({type:"setMasterPasswordData", MasterKeyConfirmed: true ,passwords:[...props.state.passwords, {id:"Master", hash, salt}]})
                getSharedPWs(props.state.token, props.dispatch)
                setTimeout(()=>{
                    unsetMasterKey()
                    stopSharedPWsQuerys()
                    props.dispatch({type:"unsetMasterKeyConfirmed", MasterKeyConfirmed: false, passwords:props.state.passwords.map(({id, salt})=>({id, salt}))})
                    setMPW("")
                }, 300000)
            }, (error)=>{
                props.dispatch({type:"setError", error: typeof(error)=="string"?error:JSON.stringify(error)})
            })
        })
    }
    const checkMasterPWHandler = ()=>{
        import("../services/api").then(({checkMasterKey, unsetMasterKey, stopSharedPWsQuerys, getSharedPWs})=>{
            const {salt} = props.state.passwords.find(({id})=>id=="Master")
            checkMasterKey(MPW, salt, props.state.token).then((hash)=>{
                props.dispatch({type:"setMasterKeyConfirmed", passwords:[...props.state.passwords.filter(({id})=>id!="Master"), {...props.state.passwords.find(({id})=>id=="Master"), hash}], MasterKeyConfirmed: true, error:"Master Password successfully confirmed"})
                getSharedPWs(props.state.token, props.dispatch)
                setTimeout(()=>{
                    unsetMasterKey()
                    stopSharedPWsQuerys()
                    props.dispatch({type:"unsetMasterKeyConfirmed", MasterKeyConfirmed: false, passwords:props.state.passwords.map(({id, salt})=>({id, salt}))})
                    setMPW("")
                }, 300000)
            }, (error)=>{
                props.dispatch({type:"setError", error: typeof(error)=="string"?error:JSON.stringify(error)})
            })
        })
    }
    if(props.state.passwords){
        props.state.passwords.sort((a, b)=>a.id<b.id?-1:1)
    }
    return hasScope?<Panel fill={true} panelHead={<div className="grid-2">Password Manager {props.state.passwords&&!props.state.passwords.find(({id})=>id=="Master")?<div className="login"><LabeledTextInput onChange={setMPW} value={MPW} placeholder="set master password" onEnter={setMasterPasswordHandler}/><button onClick={setMasterPasswordHandler} className="white noborder pointer login"><img className="tinybtnimg" src={Login}/></button></div>:!props.state.MasterKeyConfirmed?<div className="login"><LabeledTextInput onChange={setMPW} value={MPW} onEnter={checkMasterPWHandler} placeholder="enter your master password" /><button className="noborder login pointer white" onClick={checkMasterPWHandler}><img className="tinybtnimg" src={ok}/></button></div>:false}</div>} innerClassName="fill overflow" all="marginMedium" components={props.state.MasterKeyConfirmed?[
    <LabeledTextInput placeholder="search id" onChange={setidsearch} value={idsearch}/>,props.state.sharedpws&&props.state.sharedpws.length?<Panel fill={true} panelHead="shared passwords" innerClassName="overflow" components={props.state.sharedpws.map((pw)=><SharedPW {...pw} token={props.state.token} myKey={myID(props.state.token)==pw.sharer_id} hash={props.state.passwords.find(({id})=>id=="Master").hash} passwordDecrypt={()=>new Promise((res, rej)=>{
        if(myID(props.state.token)==pw.sharer_id){
            import("../services/api").then(({decryptPW})=>{
                decryptPW(pw.target_pw_id, props.state.passwords.find(({id})=>id=="Master").hash, props.state.token).then(res, rej)
            })
        }else{
            rej("not my password")
        }
    
    })}/>)}/>:false,
    props.state.passwords?<Panel fill={true} panelHead="stored passwords" innerClassName="overflow" components={props.state.passwords.filter(({id})=>id!="Master"&&(!idsearch.length||id.match(new RegExp(idsearch, "i")))).map((entry)=><PasswordEntry token={props.state.token} {...entry} decrypt={()=>{
        import("../services/api").then(({decryptPW})=>{
            decryptPW(entry.id, props.state.passwords.find(({id})=>id=="Master").hash, props.state.token).then((content)=>{
                props.dispatch({type:"setDecodedPW", passwords:[...props.state.passwords.filter(({id})=>id!=entry.id), {...entry, decrypted:content}]})
            }, (error)=>{
                console.error(error)
                props.dispatch({type:"seterror", error: typeof(error)=="string"?error:JSON.stringify(error)})
            })
        })
    }}/>)}/>:false, <Panel panelHead="create new password" component={<NewPW setPassword={(id, password)=>{
        import("../services/api").then(({setPassword})=>{
            if(id!="all"&&id!="Master"){
                setPassword(id, props.state.passwords.find(({id})=>id=="Master").hash, password, props.state.token).then(({salt, crypt})=>{
                    props.dispatch({type:"addPW", passwords:[...props.state.passwords, {id, salt, crypt, decrypted: password}]})
                }, (error)=>{
                    props.dispatch({type:"seterror", error:typeof(error)=="string"?error:JSON.stringify(error)})
                })
            }
        })
    }}/>} />
]:[]} />:<NotFound />
})