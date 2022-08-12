import React from "react";
import {useHistory} from "react-router-dom";

export default (props)=>{
    const history = useHistory();

    return (<div className={props.className}>
            {props.links.map(({to, text}, index)=><button className={props.linkClass} onClick={()=>{history.push(to), props.modSwitch()}} key={index}>{text}</button>)}
        </div>)
}