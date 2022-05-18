import React from "react";
import cross from "../../assets/cross.png";

export default (props)=><div style={{background:"white"}}>
    <button onClick={props.close} className="white noborder pointer login"><img className="tinybtnimg" src={cross}/></button>
</div>