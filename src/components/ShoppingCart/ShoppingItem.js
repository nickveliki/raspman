import React from "react"
import ok from "../../assets/ok.png"
import cross from "../../assets/cross.png";

export default (props) => <div style={{ display: "grid", alignItems: "center", gridTemplateColumns:`${props.addtolist?3:4}fr 1fr 1fr 1fr${!props.addtolist?" 1fr":""}` }}>
    <label>{props.item}</label>
    {!props.addtolist ? <input style={{width:"40px"}} type="number" onChange={(ev) => props.changeQuantity(parseInt(ev.target.value))} step={props.step} value={props.quantity} />:<label>{props.quantity}</label> }
    <label>{props.quantityType}</label>
    {props.ok && <button className="white noborder login pointer" onClick={() => {
        if (typeof (props.ok) == "function") {
            props.ok()
        }
    }}><img className="btnimg" src={ok} /></button>}
    {props.notok && <button className="white noborder login pointer" onClick={() => {
        if (typeof (props.notok) == "function") {
            props.notok()
        }
    }}><img className="btnimg" src={cross} /></button>}
    {props.addtolist && typeof(props.addtolist)=="function"&&<button onClick={props.addtolist} className="white noborder login pointer"><img className="btnimg rotate-45" src={cross} /></button>}
</div>