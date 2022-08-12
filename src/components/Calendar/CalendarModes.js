import React from "react";
import CMDay from "./Modes/CMDay";
import CMMonth from "./Modes/CMMonth";
import CMWeek from "./Modes/CMWeek";
import CMYear from "./Modes/CMYear";

export default (props)=>{

    return <div>{props.state.viewmode=="Day"?<CMDay />:props.state.viewmode=="Week"?<CMWeek />:props.state.viewmode=="Month"?<CMMonth />:props.state.viewmode=="Year"?<CMYear />:<div>bad viewmode state, report issue</div>}</div>
}