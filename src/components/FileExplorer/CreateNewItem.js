import React from "react";
import cross from "../../assets/cross.png";

export default (props)=><div className="panel-back" style={{position:"absolute", top:props.top, left: props.left, display:props.visible?"unset":"none"}}>
    <div style={{width: "fit-content", height:"fit-content", display:"flex", flexDirection:"column"}} className="panel">
        {props.admin&&<button style={props.grayfolder?{filter:"grayscale(1)"}:{}} onClick={props.mkdir} className="white noborder pointer mTextbtnback marginSmall">Neuer Ordner</button>}
        <button className="white noborder pointer mTextbtnback marginSmall">Neue Datei</button>
        <button onClick={()=>{document.getElementById("fileupload").click()}} className="white noborder pointer mTextbtnback marginSmall">Datei hochladen</button>
        <button onClick={props.cancel} className="white noborder pointer"><img className="btnimg" src={cross}/></button>
        <input id="fileupload" onChange={(ev)=>{
            const fileObject = {}
            const content = ev.target.files[0];
            const Loader = new FileReader();  
            Loader.onloadend = (ev)=>{
                fileObject.content = Loader.result
                props.selectFile(fileObject)
            }
            Loader.readAsDataURL(content)  
            fileObject.name = content.name;
            fileObject.size = content.size
            fileObject.lastModified = content.lastModified
            
        }} type="file" style={{display:"none"}} />
    </div>
</div>