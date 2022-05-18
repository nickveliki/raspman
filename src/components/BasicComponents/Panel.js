import React, {forwardRef} from "react";

export default forwardRef((props, ref)=>{
    return (
        <div style={props.style} className={`panel-back${props.margin?" margin"+props.margin:""}${props.fill?" fill":""}${props.modal?props.visible?" groupchats":" modal_hidden":""}${props.modal&&props.layer?" "+props.layer+"layer":""}${props.nooverflow?" overflowNo":""}`}>
    <div className={`panel${props.fill||props.modal?" fill":""}${props.className?" " +props.className:""}`}>
    
        {props.panelHead&&!props.h&&<h3>{props.panelHead}</h3>}
        {props.panelHead&&props.h==1&&<h1>{props.panelHead}</h1>}
        {props.panelHead&&props.h==2&&<h2>{props.panelHead}</h2>}
        {props.panelHead&&props.h==4&&<h4>{props.panelHead}</h4>}
        {props.panelHead&&props.h==5&&<h5>{props.panelHead}</h5>}
        {props.panelHead&&props.h==6&&<h6>{props.panelHead}</h6>}
        <div className={props.innerClassName} ref={ref} style={props.innerStyle}>
            {props.component||props.components.map((Component, index)=><div className={props.all?props.all:props.nthclass&&props.nthclass.find((cl)=>cl.i==index)?props.nthclass.find((cl)=>cl.i==index).class:undefined} key={index}>{Component}</div>)}
        </div>
    </div>
    </div>
)})