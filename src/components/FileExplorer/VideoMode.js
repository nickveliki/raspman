import React from "react";
import { connect } from "react-redux";
import Loader from "../BasicComponents/Loader";
import FileModeHeader from "./FileModeHeader";
export default connect((state) => state)((props) => {
    const videosrc = props.state.openFile ? `${process.env["API"]}/files/video/${props.state.openFile.file.replace(/\//g, "%2f")}?token=${props.state.token.replace(/\//g, "%2f").replace(/\+/g, "%2b")}` : ""
    return <div style={{ position: "absolute", top: 8, left: 8, width: window.innerWidth - 16, height: window.innerHeight - 16, display: props.state.openFile && props.state.openFile.mode == "video" ? "flex" : "none", flexDirection: "column" }}>
        <FileModeHeader close={() => {
            props.dispatch({ type: "closefile", openFile: undefined })
        }} receiver={"Omen"} />
        {props.state.openFile && props.state.openFile.mode == "video" && <video controls={true} width={window.innerWidth < window.innerHeight ? "100%" : "75%"} onLoadedData={() => {
            props.dispatch({ type: "setvideoloaded", openFile: { ...props.state.openFile, loaded: true } })
        }} onError={(ev) => {
            import("../../services/api").then(({ getLock }) => {
                getLock(props.state.token).then((tokenok) => {
                    if (!tokenok) {
                        props.dispatch({ type: "seterror", error: "token expired", openFile: undefined })
                    } else {
                        props.dispatch({ type: "unknown error", error: "unknown error occurred during streaming, please try again later", openFile: { ...props.state.openFile, loaded: false } })
                    }
                })
            })
        }} style={{ display: props.state.openFile.loaded ? "unset" : "none" }}>
            <source src={videosrc}></source>
        </video>}
        {props.state.openFile && props.state.openFile.mode == "video" && !props.state.openFile.loaded && <Loader />}
    </div>
})