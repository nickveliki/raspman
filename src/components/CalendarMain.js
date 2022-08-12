import React, {useState} from "react";
import { connect } from "react-redux";
import { hasScopes } from "../services/misc";
import CalendarModes from "./Calendar/CalendarModes";
import CalendarSettings from "./Calendar/CalendarSettings";
import NotFound from "./NotFound";

export default  connect((state)=>state)( (props)=>{
    const [state, setState] = useState({
        viewmode: "Day"
    })
    const hasScope = hasScopes(props.state.token, "calman")
    return hasScope?<div><CalendarSettings state={state} onChange={(value)=>{
        setState({...state, ...value})
    }}/><CalendarModes state={state}/></div>:<NotFound />
})