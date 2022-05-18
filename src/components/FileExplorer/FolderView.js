import React from "react";
import FolderFG from "../../assets/FolderFG.png"
import NewScope from "../BasicComponents/NewScope";
import Panel from "../BasicComponents/Panel";
import ScopeView from "../BasicComponents/ScopeView";
export default (props)=>props.showScopes?<Panel fill={true} className={props.selected?"selected":""} panelHead={<button style={{wordBreak:"break-all"}} className="white noborder pointer login" onClick={props.onClick} onDoubleClick={props.onDoubleClick}><img className="folderimg" src={FolderFG}/><label>{props.name}</label></button>} components={[...props.requiredScopes.map((scope)=><ScopeView scope={scope} removeScope={()=>props.removeScope(scope)}/>), <NewScope addScope={props.addScope}/>]}/>:<button style={{wordBreak:"break-all"}} className={`white noborder pointer login${props.selected?" selected":""}`} onClick={props.onClick} onDoubleClick={props.onDoubleClick}><img className="folderimg" src={FolderFG}/><label>{props.name}</label></button>