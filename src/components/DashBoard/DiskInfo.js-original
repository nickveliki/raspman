import React, {useState, useEffect, useRef} from "react";
import Panel from "../BasicComponents/Panel";
import cross from "../../assets/cross.png";
import hdd from "../../assets/hdd.png"
import ssd from "../../assets/ssd.png"
import { formatSize, suffix } from "../../services/misc";

const MountPoint = ({ path, usage, dev, showMountBtn, mount, unmount }) => <Panel h={5} fill={true} panelHead={<div className="login"><label>device path: /dev/{dev}</label>{ showMountBtn&&<button onClick={path.length?unmount:mount} className="white noborder pointer login"><img className={`tinybtnimg${path.length==0?" rotate-45":""}`} style={path=="/"||path.match("/boot")?{filter:"grayscale(1)"}:{}} src={cross}/></button>}</div>} className="driveView-mountpoint" components={[<label>{path.length?"mount path: "+path:"not mounted"}</label>,<label>total Space: {formatSize(usage.total)} {suffix(usage.total)}</label>,
    <label>used Space: {formatSize(usage.total - usage.available)} {suffix(usage.total - usage.available)}</label>,
    <label>available Space: {formatSize(usage.available)} {suffix(usage.available)} </label>]}/>


const StyleFillRatio = (size, used)=>{
    const red = Math.round(Math.sin(used/size*Math.PI/2)*255)
    const green = Math.round(Math.sin(used/size*Math.PI)*255)
    const blue = Math.round(Math.cos(used/size*Math.PI/2)*255)
    return `linear-gradient(0deg, rgb(${red}, ${green}, ${blue}), transparent)`
}
const getUsage = (mountpoints)=>{
    const rs = [0, 0];
    mountpoints.forEach(({usage})=>{
        rs[0]+=usage.total
        rs[1]+=usage.total-usage.available
    })
    return rs
}
const grdColumns = (num)=>{
    let fr = ["1fr"]
    for (let i = 1; i < num; i++){
        fr.push("1fr")
    }
    return fr.join(" ");
}
export default (props) =>{
    const frame = useRef({clientWidth:0})
    const [gridColumns, setGridColumns] = useState(1);
    useEffect(()=>{
        console.log(frame.current.clientWidth)
        setGridColumns(Math.floor(frame.current.clientWidth/175)||1)
    })
    const gradient = StyleFillRatio(...getUsage(props.mountpoints))
    return  <Panel innerClassName="driveView" h={4} panelHead={`${props.description} Size: ${formatSize(props.size)} ${suffix(props.size)}`} nthclass={[{i:1, class:"fill-w"}]} components={[<img style={{background: gradient}} src={props.isSSD ? ssd : hdd} />, <div className="marginMedium" style={{display:"grid", gridTemplateColumns:grdColumns(gridColumns)}} ref={frame}>
    {props.mountpoints.map((mountpoint, index) => <MountPoint key={index} showMountBtn={props.isAdmin} {...mountpoint} mount={()=>{props.mount(mountpoint.dev)}} unmount={mountpoint.path=="/"|mountpoint.path.match("/boot")?()=>{}:()=>{props.unmount(mountpoint.path)}} />)}
    </div>]}/>
   }
