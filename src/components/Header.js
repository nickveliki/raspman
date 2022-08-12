import React, { useState, useRef } from 'react';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import home from "../assets/home.png"
import Login from "./User/Login"
import ok from "../assets/ok.png";
import Folder from "../assets/FolderwBG.png"
import LogoutSettings from "./User/logoutsettings";
import NavModal from "./BasicComponents/NavModal";
import loginimg from "../assets/login.png"
import logoutimg from "../assets/cross.png"
import settings from "../assets/settings.png"
import menubtnimg from "../assets/btnMenu.png";
import PanelModal from "./BasicComponents/PanelModal";
import { hasScopes } from '../services/misc';

const Header = connect((state) => state)((props) => {
    const handlePostLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name")
        props.dispatch({ type: "logout", token: undefined, passwords: undefined, MasterKEyConfirmed: undefined, name: undefined, userInfo: undefined, Filesystem: undefined, shoppingItems: undefined, frequentItems: undefined, shoppingItemsFound: undefined })
        history.push("/")
    }
    const history = useHistory();
    const [error, ackError] = useState(undefined)
    const [modSwitch, setModSwitch] = useState(false);
    const [navopen, setNavopen] = useState(false);
    const navBtn = useRef({ clientHeight: 0, offsetTop: 0, offsetLeft: 0 })
    const localStorageToken = localStorage.getItem("token")
    if (localStorageToken  && !props.state.token) {
        //console.log(localStorageToken, localStoragename)
        import("../services/api").then(({ refreshLogin }) => {
            refreshLogin(localStorageToken).then(({ token, name }) => {
                props.dispatch({ type: "settoken", token, name: name })
            }, (error) => {
                localStorage.removeItem("token")
                ackError(error)
            })
        })
    }
    return (
        <header className="apart" style={{ alignItems: "center" }}>
            <div style={{ display: "flex" }}>
                <NavLink to="/" activeClassName="is-active" exact={true}><img className="btnimg" src={home} /></NavLink>
                <div style={{ display: props.state.token == undefined ? "none" : "unset" }}>
                    <button ref={navBtn} className="white noborder login pointer" onClick={() => setNavopen(!navopen)}  ><img className="btnimg" src={menubtnimg} /></button>
                    <div style={{ display: navopen ? "unset" : "none", position: "absolute", top: navBtn.current.offsetTop + navBtn.current.clientHeight, left: "0" }} className="settingsmodal toplayer">
                        <NavModal modSwitch={() => { setNavopen(!navopen) }} linkClass="white noborder pointer mTextbtnback marginSmall" className="column" links={[{ to: "/ShoppingCart", text: "Shopping Cart", requiredScopes: ["shopping"] }, { to: "/Passman", text: "Password Manager", requiredScopes: ["pwman"] }].filter(({ to, requiredScopes }) => hasScopes(props.state.token, ...requiredScopes) && !window.location.href.includes(to))} />
                    </div>
                </div>
                {props.state.token && <button onClick={() => { props.dispatch({ type: "setFolderView", chooseFile: props.state.chooseFile ? undefined : true }) }} className="white pointer noborder login"><img src={Folder} className="btnimg" /></button>}
            </div>
            {useLocation().pathname == "/Registrieren" || useLocation().pathname == "/Passwortvergessen" ? <div></div> : props.state.token ? <LogoutSettings
                logoutInnerHTML={<img className="btnimg" src={logoutimg} />}
                settingsInnerHTML={<img className="btnimg" src={settings} />}
                allButtonsClass="white noborder login pointer login"
                userName={props.state.name}
                logoutClick={() => {
                    setModSwitch(false);
                    import("../services/api").then(({ logout }) => {
                        logout(props.state.token).then(() => {
                            handlePostLogout()
                        }, (error) => {
                            ackError(error)
                        })
                    })
                }}
                className="login"
                modalClass="settingsmodal toplayer"
                modSwitch={modSwitch}
                settingsModalComponent={<NavModal modSwitch={() => { setModSwitch(!modSwitch) }} linkClass="white noborder login pointer mTextbtnback marginSmall" links={[{ to: "/Profile", text: "Profil bearbeiten" }]} className="column" />}
            /> : <Login
                lognameClass="logname"
                lognamePlaceholder="Name"
                passwordPlaceholder="Passwort"
                outerClassName="login"
                innerClassName="login columnbelow465"
                buttonClass="white noborder login pointer"
                moreInnerHTML={<div className="apart columnbelow465"><NavLink to="/Registrieren" exact={true}>Noch nicht registriert?</NavLink><NavLink to="Passwortvergessen" exact={true}>Passwort Vergessen?</NavLink></div>}
                buttonInnerHTML={<img className="btnimg" src={loginimg} />}
                login={(name, passwort) => {
                    import("../services/api").then(({ login }) => {
                        login(name, passwort).then(({ token, refresh }) => {
                            localStorage.setItem("token", refresh)
                            props.dispatch({ type: "login", token, name })
                        }, (error) => {
                            ackError(error.toString())
                        })
                    })
                }}
            />}
            <PanelModal style={{ zIndex: 255 }} open={error != undefined || props.state.error != undefined} panelHead={error || props.state.error || ""} innerClassName="flex-center" component={<button onClick={() => {
                if (error) {
                    if (error.match(/token/i)) {
                        handlePostLogout()
                    }
                    ackError(undefined)
                } else {
                    if (props.state.error.match(/token/i)) {
                        handlePostLogout()
                    } else props.dispatch({ type: "unseterror", error: undefined })
                }
            }} className="white noborder login pointer"><img className="btnimg" src={ok} /></button>} />
        </header>
    )
})
export default Header;