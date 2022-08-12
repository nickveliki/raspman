import React from "react";
import CSDay from "./CalendarSettings/CSDay";
import CSMonth from "./CalendarSettings/CSMonth";
import CSWeek from "./CalendarSettings/CSWeek";
import CSYear from "./CalendarSettings/CSYear";

export default (props)=>{
    
    return <div>
        <select onChange={(ev)=>{
            props.onChange({viewmode: ev.target.value})
        }}>
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
            <option>Year</option>
        </select>
        {props.state.viewmode=="Day"?<CSDay />:props.state.viewmode=="Week"?<CSWeek />:props.state.viewmode=="Month"?<CSMonth />:props.state.viewmode=="Year"?<CSYear />:<div>bad viewmode state, report issue</div>}
    </div>
}