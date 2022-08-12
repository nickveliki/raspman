import React, {useState} from "react";
import Panel from "../BasicComponents/Panel";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";
import unlock from "../../assets/unlock.png"
import lock from "../../assets/lock.png"
import ScopeView from "../BasicComponents/ScopeView";
import NewScope from "../BasicComponents/NewScope";

export default (props)=>{
    const [reason, setReason] = useState("");
    return <Panel className="apart" h={4} fill={true} panelHead={`${props.name}${props.me?" (me)":""}`} components={[!props.me?<div className="login">{props.blocked&&props.blocked.length?<label>blocked: {props.blocked}</label>:<LabeledTextInput inputClass="width-95" placeholder="reason for block" onChange={setReason} value={reason}/>}<button className="noborder login white pointer" onClick={()=>{
        if(props.blocked&&props.blocked.length){
            props.unblock()
        }else{
            props.block(reason.length?reason:"nothing in particular");
            setReason("");
        }
    }}><img className="tinybtnimg" src={props.blocked&&props.blocked.length?unlock:lock} /></button></div>:undefined, <Panel panelHead="user scopes" innerClassName="overflowNo grid-2" components={[...props.scopes.map((scope)=><ScopeView scope={scope} removeScope={()=>{props.removeScope(scope)}} />), !props.scopes.includes("admin")&&<NewScope addScope={props.addScope}/>]}/>]}/>
}