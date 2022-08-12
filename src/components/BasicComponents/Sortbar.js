import React, {useState} from "react";
import LabeledTextInput from "./LabeledTextInput";

export default (props)=>{
    const [selected, setSelected] = useState(props.options[0])
    const [filter, setFilter] = useState("");
    return <div className="login apart"><select onChange={(ev)=>setSelected(ev.target.value)} value={selected}>{props.options.map((op, ind)=><option key={ind}>{op}</option>)}</select><LabeledTextInput placeholder="Filter..." onChange={setFilter} value={filter}/><button onClick={()=>{props.apply(selected, filter); setSelected(props.options[0]); setFilter("")}} className="white noborder pointer mTextbtnback">Apply</button></div>
}