import React from "react";
import Panel from "../BasicComponents/Panel";
import {formatSize, suffix} from "../../services/misc";

export default (props)=><Panel panelHead={props.name} components={Object.keys(props).filter((key)=>typeof(props[key])=="number"||(typeof(props[key])=="string"&&props[key].length>0)).map((key)=><label style={{wordWrap:"break-word"}}>{key}: {key=="pmem"?formatSize(parseInt(props[key]))+" "+suffix(parseInt(props[key])):key=="cpu"?props[key].toFixed(2)+"%":key=="starttime"?new Date(props[key]).toLocaleString():props[key]}</label>)}/>