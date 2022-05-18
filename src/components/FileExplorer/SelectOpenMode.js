import React from "react";
import {connect} from "react-redux";
import cross from "../../assets/cross.png";
import {duration} from "moment"

export default connect((state)=>state)((props)=><div>
    <div className="login">
        <button onClick={()=>{
            props.dispatch({type:"settextmode", openFile:{...props.state.openFile, mode:"text"}})
        }} className="white pointer noboerder mTextbtnback">text</button>
        <button onClick={()=>{
            props.dispatch({type:"settextmode", openFile:{...props.state.openFile, mode:"video"}})
        }} className="white pointer noboerder mTextbtnback">video</button>
    {props.state.castDevices?<div>{props.state.castDevices.map((device, index)=><button className="white noborder pointer mTextbtnback" key={index} onClick={()=>{
        const videosrc = props.state.openFile ? `/files/video/${props.state.openFile.file.replace(/\//g, "%2f")}` : ""
        import("../../services/api").then(({setRemoteDeviceSource})=>{
            setRemoteDeviceSource(device.address, videosrc, props.state.token).then(()=>{
                props.dispatch({type:"setDeviceToCast", openFile:{...props.state.openFile, mode:"cast", device: device.address}, castDevices: undefined})
            }, (error)=>{
                props.dispatch({type:"seterror", error: typeof(error)=="object"?JSON.stringify(error):error})
            })
        })
    }}>cast to {device.address} (last seen {duration(Date.now()-device.lastSeen).toISOString()} ago)</button>)}</div>:<button onClick={()=>{
        import("../../services/api").then(({getRemoteDevices})=>{
            getRemoteDevices(props.state.token).then((devices)=>{
                if(devices.length){
                    props.dispatch({type:"setCastDevices", castDevices: devices})
                }else{
                    props.dispatch({type:"seterror", error: "no castable devices found! Navigate to https://home.thern.wtf with a smat tv to register a device!"})
                }
            }, (error)=>{
                props.dispatch({type:"seterror", error: typeof(error)=="object"?JSON.stringify(error):error})
            })
        })
    }} className="white pointer noborder mTextbtnback">cast to remote screen</button>}
    </div>
    <button className="white pointer noborder login"><img className="btnimg" src={cross} onClick={()=>{
        props.dispatch({type:"closeopenfilemode", openFile:undefined})
    }}/></button>
</div>)