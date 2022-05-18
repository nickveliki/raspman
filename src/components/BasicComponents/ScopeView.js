import React from "react";
import cross from "../../assets/cross.png"

export default (props)=><div className="login apart"><label>{props.scope}</label>{<button style={props.scope=="admin"||props.scope=="default"?{filter:"grayscale(1)"}:{}} className="white noborder login pointer" onClick={()=>{if(props.scope!="admin"&&props.scope!="default"){props.removeScope(props.scope)}}}><img className="tinybtnimg" src={cross}/></button>}</div>