import React from "react";
import cross from "../../assets/cross.png";
import { formatSize, suffix } from "../../services/misc";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";
import Loader from "../BasicComponents/Loader";
import PanelModal from "../BasicComponents/PanelModal";

export default (props)=><div className="panel-back" style={{position:"absolute", top:props.top, left: props.left, display:props.visible?"unset":"none"}}>
    <div style={{width: "fit-content", height:"fit-content", display:"flex", flexDirection:"column"}} className="panel">
        {props.admin&&<button style={props.grayfolder?{filter:"grayscale(1)"}:{}} onClick={props.mkdir} className="white noborder pointer mTextbtnback marginSmall">Neuer Ordner</button>}
        <button className="white noborder pointer mTextbtnback marginSmall">Neue Datei</button>
        <button onClick={()=>{document.getElementById("fileupload").click()}} className="white noborder pointer mTextbtnback marginSmall">Datei hochladen</button>
        <button onClick={props.hls} className="white noborder pointer mTextbtnback marginSmall">HLS Stream</button>
        <button onClick={props.cancel} className="white noborder pointer"><img className="btnimg" src={cross}/></button>
        <input id="fileupload" onChange={(ev)=>{
            if(ev.target.files&&ev.target.files[0]){
                const ObjUrl = URL.createObjectURL(ev.target.files[0])
                const { size, name } = ev.target.files[0]
                props.setFileToUpload({size, name, URL: ObjUrl})
            }
        }} type="file" style={{display:"none"}} />
    </div>
    <PanelModal open={props.fileUploadData!=undefined} panelHead={`Upload File... `} component={<div>
        {props.fileUploadData?.progress!=undefined&&props.fileUploadData?.progress<100&&<progress className="netprogress"  value={props.fileUploadData.progress} max={100} ></progress>}
        {props.fileUploadData?.progress!=undefined&&props.fileUploadData?.progress>=100&&<div><h4>writing file to disk...</h4><Loader size={"small"} /></div>}
        {!props.fileUploadData?.progress&&<LabeledTextInput label="Filename" value={props.fileUploadData?.name} onChange={props.changeUploadFileName} />}
        {!props.fileUploadData?.progress&&<LabeledTextInput label="scopes" value={props.fileUploadData?.scopes} onChange={props.changeUploadFileScopes} />}
        <label>Filesize: {formatSize(props.fileUploadData?.size)}{suffix(props.fileUploadData?.size)}</label>
        <div className="apart">
        {!props.fileUploadData?.progress&&<button onClick={props.commenceFileUpload} className="white noborder pointer mTextbtnback marginSmall">Upload</button>}
        {!props.fileUploadData?.progress&&<button onClick={props.cancelFileUpload} className="white noborder pointer mTextbtnback marginSmall">Cancel</button>}
        </div>
        {props.UploadQueue!=undefined&&<div className="column"><h5>Upload Queue</h5>{props.UploadQueue.map((QueueItem)=>{
            return  <label key={QueueItem.name}>{QueueItem.name}</label>
        })}</div>}
    </div>} />
    <PanelModal open={props.hlsdata!=undefined} panelhead={`choose hls stream`} component={props.hlsdata!=undefined?props.hlsdata.started?<div>
        
        <label>Processing HLS Stream...</label>
        <Loader />

    </div>: <div>
        {!props.hlsdata.streams&&<div><LabeledTextInput label="HLS Manifest Link" value={props.hlsdata.URL} onChange={props.hlsURLChange} />
        <button className="white noborder pointer mTextbtnback marginSmall" onClick={props.checkHLSURL}>Check URL</button></div>}
        {props.hlsdata.streams!=undefined&&props.hlsdata.streams.map((stream, index)=><ul key={index}>
            {
                Object.keys(stream).map((key, index)=><li key={index}>{key}: {stream[key]}</li>)
            }
            <button onClick={()=>{
                props.startHLS(index)
            }} className="white noborder pointer mTextbtnback marginSmall">Starten!</button>
        </ul>)}
        <LabeledTextInput label="Filename" value={props.hlsdata.filename} onChange={props.hlsFileNameChange} />
        
        <button onClick={props.cancelHLS} className="white noborder pointer mTextbtnback marginSmall">Cancel</button>
    </div>:<div></div>} />
</div>