import React from "react";
import { connect } from "react-redux"
import Panel from "../BasicComponents/Panel";
import exit from "../../assets/cross.png"

export default connect((state) => state)((props) => <div style={props.state.openFile && props.state.openFile.mode == "cast" ? { position: "absolute", left: "0px", right: "0px", top: "0px", bottom: "0px", display: "flex", justifyContent: "center", alignItems: "center" } : { display: "none" }}>
    <Panel panelHead={<div>{props.state.openFile?.file} on {props.state.openFile?.device}<button className="white noborder pointer login" onClick={()=>{
        import("../../services/api").then(({removeSource})=>{
            removeSource(props.state.openFile.file, props.state.openFile.device, props.state.token).then(()=>{
                props.dispatch({type:"unsetOpenFile", openFile:undefined})
            }, (error)=>{
                props.dispatch({type:"setError", openFile:undefined, error: typeof(error)=="string"?error:JSON.stringify(error)})
            })
        })
    }}><img className="btnimg" src={exit} /></button></div>} components={[]} />
</div>)