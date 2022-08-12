import React from "react";
import Panel from "../BasicComponents/Panel";

export default (props)=><Panel h={4} panelHead={props.name} components={props.interfaces.map((iface)=><Panel h={5} panelHead={iface.address} components={Object.keys(iface).filter((key)=>key!="address").map((key)=><label>{key}: {iface[key].toString()}</label>)}/>)}/>