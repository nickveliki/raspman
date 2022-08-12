import React from "react"
import { connect } from "react-redux"
import Panel from "./BasicComponents/Panel"
import Loader from "./BasicComponents/Loader"
import UserQuickInfo from "./DashBoard/UserQuickInfo"
import DiskInfo from "./DashBoard/DiskInfo"
import NetView from "./DashBoard/NetView"
import { isAdmin, formatSize, suffix } from "../services/misc"
// const processInfoReducer = (processInfo) => {
//     let memory = 0;
//     let processor = 0;
//     processInfo.forEach(({ pmem, cpu }) => {
//         if (cpu != 100) {
//             processor += cpu;
//         }
//         let mem = parseInt(pmem);
//         if (!isNaN(mem)) {
//             memory += mem
//         }
//     })
//     return `memory: ${formatSize(memory)} ${suffix(memory)}, cpu: ${processor.toFixed(2)}%`
// }


const secondsFormat = (seconds) => {
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    // If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
    // if (hh > 12) {hh = hh % 12;}
    // These lines ensure you have two-digits
    if (hh < 10) { hh = "0" + hh; }
    if (mm < 10) { mm = "0" + mm; }
    if (ss < 10) { ss = "0" + ss; }
    // This formats your string to HH:MM:SS
    var t = hh + ":" + mm + ":" + ss;
    return t
}
export default connect((state) => state)((props) => {

    const removeScope = (id, scope) => {
        import("../services/api").then(({ removeScope }) => {
            removeScope(id, scope, props.state.token).then(() => {
                const user = props.state.userInfo.find((user) => user.id == id);
                user.scopes.splice(user.scopes.indexOf(scope), 1)
                props.dispatch({ type: "updateScopes", userInfo: props.state.userInfo })
            }, (error) => {
                props.dispatch({ type: "seterror", error })
            })
        })
    }
    if (props.state.token && isAdmin(props.state.token) && !props.state.userInfo && !props.state.error) {
        import("../services/api").then(({ getUserInfo }) => {
            getUserInfo(props.state.token).then((userInfo) => {
                props.dispatch({ type: "setUserInfo", userInfo })
            }, (error) => {
                props.dispatch({ type: "seterror", error, userInfo: [] })
            })
        })
    }
    if (!props.state.driveInfo && !props.state.error) {
        import("../services/api").then(({ getDriveInfo }) => {
            getDriveInfo().then((driveInfo) => {
                props.dispatch({ type: "setDriveInfo", driveInfo })
                const inter = setInterval(() => {
                    getDriveInfo().then((driveInfo) => {
                        props.dispatch({ type: "setSystemInfo", driveInfo })
                    }, (error) => {
                        console.log(error)
                        props.dispatch({ type: "seterror", error, driveInfo: undefined })
                        clearInterval(inter)
                    })
                }, 30000)
            }, (error) => {
                props.dispatch({ type: "seterror", error, driveInfo: [] })
            })
        })
    }
    if (props.state.driveInfo&&!props.state.systemInfo && !props.state.error) {
        import("../services/api").then(({ getSystemInfo }) => {
            getSystemInfo().then((systemInfo) => {
                props.dispatch({ type: "setSystemInfo", systemInfo });
                const inter = setInterval(() => {
                    getSystemInfo().then((systemInfo) => {
                        props.dispatch({ type: "setSystemInfo", systemInfo })
                    }, (error) => {
                        props.dispatch({ type: "seterror", error, systemInfo: undefined })
                        clearInterval(inter)
                    })
                }, 30000)
            }, (error) => {
                props.dispatch({ type: "seterror", error, systemInfo: {cpus:[], net:{}, memory:{}, load:[], uptime:0, temp: 0} })
            })
        })
    }
    // if(!props.state.processInfo&&!props.state.error){
    //     import("../services/api").then(({getProcessInfo})=>{
    //         getProcessInfo().then((processInfo)=>{
    //             props.dispatch({type:"setProcessInfo", processInfo})
    //             const inter = setInterval(()=>{
    //                 getProcessInfo().then((processInfo)=>{ 
    //                 props.dispatch({type:"setProcessInfo", processInfo})
    //                 }, (error)=>{
    //                     props.dispatch({type:"seterror", error, processInfo:undefined})
    //                     clearInterval(inter)
    //                 })
    //             }, 30000)
    //         }, (error)=>{
    //             props.dispatch({type:"seterror", error, processInfo:[]})
    //         })
    //     })
    // }
    // if(props.state.processSort){
    //     props.state.processInfo.sort((a, b)=>a[props.state.processSort]<b[props.state.processSort]?-1:1);
    // } 
    // {props.state.processInfo ? <Panel panelHead={`Processes #${props.state.processInfo.length} ${processInfoReducer(props.state.processInfo)}`} nooverflow={true} style={{ display: "flex", flexDirection: "column" }} className="fill" innerClassName="overflow" components={[<Sortbar options={Object.keys(props.state.processInfo[0])} apply={(selected, filter) => {
    //     props.dispatch({ type: "setFilter", processFilter: filter, processSort: selected })
    // }} />, ...props.state.processInfo.filter((info) => !props.state.processFilter || props.state.processFilter == "" || info.name.match(props.state.processFilter) || info.owner.match(props.state.processFilter)).map((info) => <ProcessView {...info} />)]} /> : <Loader />}  
    return <div className={window.innerWidth<465?"overflow":`grid-${props.state.userInfo ? "3" : "2"} overflowNo`}>
        {props.state.driveInfo ? <Panel panelHead="Drives" style={{ display: "flex", flexDirection: "column" }} nooverflow={true} className={window.innerWidth<465?"":"fill"} innerClassName={`${window.innerWidth<465?"":"overflow "} fill`} components={props.state.driveInfo.map((info) => <DiskInfo isAdmin={isAdmin(props.state.token)} {...info} unmount={(path)=>{
            import("../services/api").then(({unmount})=>{
                unmount(path, props.state.token).then(()=>{
                    props.dispatch({type:"resetDI", driveInfo:undefined})
                }, (error)=>{
                    props.dispatch({type:"seterror", error})
                })
            })
        }} mount={(dev)=>{
            props.dispatch({type:"chooseFolder", chooseFolder:true, folderArgs:["mount", "/dev/"+dev]})
        }} />)} /> : <Loader />}
        {props.state.userInfo && <Panel panelHead="Users" nooverflow={true} style={{ display: "flex", flexDirection: "column" }} className={window.innerWidth<465?"":"fill"} innerClassName={`${window.innerWidth>465?"overflow fullheight ":"overflowNo "}grid-2`} components={props.state.userInfo.map((info) => <UserQuickInfo me={info.id == JSON.parse(atob(props.state.token.split(".")[1])).id} removeScope={(scope) => { removeScope(info.id, scope) }} block={(reason)=>{
            import("../services/api").then(({block})=>{
                block(info.id, reason, props.state.token).then(()=>{
                    info.blocked=reason;
                    props.dispatch({type:"updateState", userInfo:[...props.state.userInfo]})
                }, (error)=>{
                    props.dispatch({type: "seterror", error})
                })
            })
        }} unblock={()=>{
            import("../services/api").then(({unblock})=>{
                unblock(info.id, props.state.token).then(()=>{
                    info.blocked=undefined;
                    props.dispatch({type:"updateState", userInfo:[...props.state.userInfo]})
                }, (error)=>{
                    props.dispatch({type: "seterror", error})
                })
            })
        }} addScope={(scope)=>{
            import("../services/api").then(({addScope})=>{
                addScope(info.id, scope, props.state.token).then(()=>{
                    info.scopes.push(scope)
                    props.dispatch({type:"updatescopesonuser", userInfo:[...props.state.userInfo]})
                }, (error)=>{
                    props.dispatch({type:"seterror", error})
                })
            })
        }} {...info} />)} />}
        {props.state.systemInfo ? <Panel panelHead={`System load: ${props.state.systemInfo.load[0]}, uptime: ${secondsFormat(props.state.systemInfo.uptime)}${props.state.systemInfo.temp?" @"+(props.state.systemInfo.temp/Math.pow(10, Math.ceil(Math.log(props.state.systemInfo.temp)/Math.log(10))-2)).toFixed(1)+"°C":""}`} nooverflow={true} style={{ display: "flex", flexDirection: "column" }} className={window.innerWidth<465?"":"fill"} innerClassName={`${window.innerWidth<465?"":"overflow "} fill` } components={[<Panel h={4} panelHead="CPUs" components={props.state.systemInfo.cpus.map(({ model, speed }) => <label>{model}{model=="unknown"?": "+speed:""}</label>)} />, <Panel h={4} panelHead="Memory" components={[<label>total: {formatSize(props.state.systemInfo.memory.total)} {suffix(props.state.systemInfo.memory.total)}</label>, <label>available: {formatSize(props.state.systemInfo.memory.free)} {suffix(props.state.systemInfo.memory.free)}</label>, <label>used: {formatSize(props.state.systemInfo.memory.total - props.state.systemInfo.memory.free)} {suffix(props.state.systemInfo.memory.total - props.state.systemInfo.memory.free)}</label>]} />, ...Object.keys(props.state.systemInfo.net).map((key) => <NetView name={key} interfaces={props.state.systemInfo.net[key]} />)]} /> : <Loader />}
    </div>

})
