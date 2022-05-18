import React, {forwardRef} from "react";

export default forwardRef((props, ref)=>(
    <div className={props.className||"labeledInput"} ref={ref} style={props.style?props.style.div:{}}>
        <label className={props.labelClass||"labeledInputLabel"} style={props.style?props.style.label:{}}>{props.label}</label>
        <input className={props.inputClass||"labeledInputInput"} style={props.style?props.style.input:{}} type={props.type||"text"} placeholder={props.placeholder} value={props.value} onChange={(ev)=>{props.onChange(ev.target.value)}} onKeyUp={(ev)=>{
            if(ev.key=="Enter"&&props.onEnter){
                props.onEnter()
            }
        }}/>
    </div>
))