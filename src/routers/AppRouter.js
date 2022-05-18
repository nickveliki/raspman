import React, {useState, useEffect} from 'react';
import NotFound from "../components/NotFound";
import DynamicImport from "../components/DynamicImport"
import { BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import Loader from "../components/BasicComponents/Loader";
const searchObject = (query)=>{
    const rob = {};
    query.split("?")[1].split("&").forEach((pair)=>{
        const [key, value] = pair.split("=");
        rob[key]=value
    })
    return rob;
}
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

const Dashboard = (props)=>(
    <DynamicImport load={()=> import("../components/Dashboard")}>
        {(Component)=> Component? <Component {...props}/>:<Loader />}
    </DynamicImport>
)
const ChangePW = (props)=>(
    <DynamicImport load={()=> import("../components/User/ChangePW")}>
        {(Component)=> Component? <Component 
            allInputsClass="marginSmall"
            className="register"
            buttonClass="white noborder pointer mTextbtnback marginMedium"
            passwordPlaceholder="neues Passwort"
            confirmStringPlaceholder="Passworthinweis"
            changePassword={(password, passHint)=>{
                const {uid} = searchObject(window.location.href)
                if(uid!=undefined&&password.length>7){
                    
                }
            }}
            />:<Loader />}
    </DynamicImport>
)

const ForgotPW = (props)=>(
    <DynamicImport load={()=> import("../components/User/ForgotPW")}>
        {(Component)=> Component? <Component 
            className="register"
            lognameClass="marginMedium"
            placeholder="Name"
            buttonClass="white noborder pointer mTextbtnback"
            submit={(name)=>{
                
            }}
            />:<Loader />}
    </DynamicImport>
)
const Register = connect()((props)=>{
    const history = useHistory();
    return (
    <DynamicImport load={()=> import("../components/User/Register")}>
        {(Component)=> Component? <Component 
            className="register"
            buttonClass="white noborder pointer mTextbtnback" 
            namePlaceholder="Name"
            emailPlaceholder="Passworthinweis"
            passwordPlaceholder="Passwort, min 8 Zeichen"
            passwordrepPlaceholder="Password wiederholen"
            buttonAndCheckboxClass="infofield inputwidth"
            allInputsClass="marginSmall"
            register={(name, email, password, passwordrep, accept)=>{
                if(accept&&name.length>0&&email.length>0&&password.length>7&&password==passwordrep){
                    import("../services/api").then(({register})=>{
                        register(name, password, email).then(()=>{
                            history.push("/")
                        }, (error)=>{
                            props.dispatch({type:"seterror", error})
                        })
                    })
                }
            }}
        />:<Loader />}
    </DynamicImport>
)})
const EditUser =connect((state)=>state)((props)=>(
    <DynamicImport load= {()=>import("../components/User/EditProfile")}>
        {(Component)=>Component?<Component className="register" 
            buttonClass="white noborder pointer mTextbtnback" 
            namePlaceholder="Name"
            passwordPlaceholder="Passwort, min 8 Zeichen"
            passwordrepPlaceholder="Password wiederholen"
            emailrepPlaceholder="Passworthinweis"
            buttonAndCheckboxClass="infofield inputwidth"
            patch={(name, emailrep, password, passwordrep)=>{
                let good = true;
                if(!name&&!emailrep&&!password){
                    good = false;
                }
                if(emailrep&&!emailrep.length){
                    good=false;
                }
                if(password&&(password.length<8||password!=passwordrep)){
                    good = false;
                }
                if(good){
                    import("../services/api").then(({patch})=>{
                        patch(name, password, emailrep, props.state.token).then(()=>{
                            if(name){
                                props.dispatch({type:"setname", name})
                            }
                        }, (error)=>{
                            props.dispatch({type:"seterror", error})
                        })
                    })
                }
            }}
            allInputsClass="marginSmall"/>:<Loader />}    
    </DynamicImport>
))
const ShoppingCart = ()=><DynamicImport load= {()=>import("../components/ShoppingCart")}>
    {(Component)=> Component?<Component />:<Loader />}
</DynamicImport>
const FileExplorer = ()=><DynamicImport load= {()=>import("../components/FileExplorer/ExplorerModal")}>
    {(Component)=> Component?<Component />:<Loader />}
</DynamicImport>
const Passman = ()=><DynamicImport load={()=>import("../components/Passman")}>
    {(Component)=> Component?<Component />:<Loader />}
</DynamicImport> 
const AppRouter = (props) =>{
    return (
    <BrowserRouter>
    <div className="fill">
        <div className="title">Home, sweet Home!</div>
        <DynamicImport  load={()=>import("../components/Header")}>
        {(Component)=> Component? <Component />:<Loader size="small" />}
        </DynamicImport>
        <Switch>
            <Route path="/" component={Dashboard} exact={true}></Route>
            <Route path="/Registrieren" component={Register} exact={true}></Route>
            <Route path="/Passwortvergessen" component={ForgotPW} exact={true} />
            <Route path="/Changepw" component={ChangePW} exact={true}/>
            <Route path="/Profile" component={()=>props.state.token?<EditUser {...props} />:NotFound} />
            <Route path="/ShoppingCart" component={ShoppingCart} exact={true} />
            <Route path="/Passman" component={Passman} exact={true} />
            <Route component={NotFound}></Route>
        </Switch>
    </div>
    {props.state.token&&<FileExplorer />}
    </BrowserRouter>
    
)
    }

export default connect((state)=>state)(AppRouter);