import React from "react";

export default (props) => (
    <div style={props.size?{}:{width:"100%", display:"flex", justifyContent:"center"}}>
        <div className={`loader-back${props.size ? "-" + props.size : ""}`}>
            <div className={`loader${props.size ? "-" + props.size : ""}`}></div>
        </div>
    </div>

)