let MasterKeyDerived;
let QuerySharedPasswordsInterval;
const toBuffer = (text, base64=false)=>{
    if(base64){
        text=atob(text)
    }
    return new Uint8Array(Array.from(text).map((char)=>char.charCodeAt(0))).buffer
}
const fromBuffer = (arrayBuffer, base64=false)=>{
    const text = new Uint8Array(arrayBuffer).reduce((data, byte)=>(typeof(data)=="string"?data:String.fromCharCode(data))+String.fromCharCode(byte))
    return base64?btoa(text):text;
}
const register = (name, passwort, passHint)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/user/register", {method:"POST",headers:{"content-type":"application/json"}, body:JSON.stringify({name, passwort, passHint})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then((rej, rej))
        }
    }, ({message})=>{
        rej(message)
    })
})
const login = (name, passwort)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/user/login", {method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify({name, passwort})}).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        }, rej)
    }, ({message})=>{
        rej(message)
    })
})
const refreshLogin = (refreshToken)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/user/refreshlogin?token="+refreshToken.replace(/\//g, "%2f").replace(/\+/g, "%2b")).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        })
    })
})
const logout = (token)=>new Promise((res, rej)=>{
    MasterKeyDerived = undefined;
    fetch(process.env["API"]+"/user/logout", {headers:{token}}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then((rej, rej))
        }
    }, ({message})=>{
        rej(message)
    })
})
const patch = (name, passwort, passHint, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/user/patch", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({name, passHint, passwort})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej);
        }
    }, ({message})=>{
        rej(message)
    })
})
const forgotPW = (name)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/user/forgotpw", {method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify({name})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const getUserInfo = (token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/admin/users", {headers:{token}}).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        }, rej)
    }, ({message})=>{
        rej(message)
    })
})
const removeScope = (id, scope, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/admin/removescope", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({uid:id, scope})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const addScope = (id, scope, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/admin/addscope", {method:"POST", headers: {token, "content-type":"application/json"}, body:JSON.stringify({uid: id, scope})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const getDriveInfo = ()=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/info/driveinfo").then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        }, rej)
    }, ({message})=>{
        rej(message)
    })
})
const getProcessInfo = ()=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/info/processes").then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        })
    }, ({message})=>{
        rej(message)
    })
})
const getSystemInfo = ()=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/info/system").then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        })
    }, ({message})=>{
        rej(message)
    })
})
const getFolderContent = (path, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/files/foldercontent", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({path})}).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        })
    }, ({message})=>{
        rej(message)
    })
})
const unmount = (mount, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/admin/unmount", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({mount})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const mount = (dev, path, token)=>new Promise((res, rej)=>{
    // console.log({dev, path, token})
    fetch(process.env["API"]+"/admin/mount", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({dev, path})}).then((response)=>{
        if(response.ok){
            res({driveInfo:undefined})
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const mkdir = (path, newFolder, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/admin/mkdir", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({path:"/"+[...path.split("/").filter((seg)=>seg.length), newFolder].join("/")})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const createFile = (path, FileName, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/file/newfile", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({path:"/"+[...path.split("/").filter((seg)=>seg.length), FileName].join("/")})}).then((response)=>{
        if(response.ok){
           res() 
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const uploadFile = (path, FileInfo, token)=> new Promise((res, rej)=>{
    fetch(process.env["API"]+"/file/upload", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({path, FileInfo})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const block = (id, blocked, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/admin/block", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({uid:id, blocked})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const unblock = (id, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/admin/unblock", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({uid: id})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, ({message})=>{
        rej(message)
    })
})
const getText = (path, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+`/files/text/${path.replace(/\//g, "%2f")}?token=${token.replace(/\//g, "%2f").replace(/\+/g, "%2b")}`).then((response)=>{
        response.text().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        }, rej)
    }, ({message})=>{
        rej(message)
    })
})
const addRouteToScope = (path, scope, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/files/scope", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({path, scope})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej ,rej)
        }
    }, ({message})=>{
        rej(message)
    }, rej)
})
const submitShoppingList = (List, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/shopping/list", {method: "POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify(List)}).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        }, rej)
        
    }, rej)
})
const removeShoppingItem = ({item, quantity, quantityType, ok}, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/shopping/item", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({item, quantity, quantityType, ok})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, rej)
})
const getShoppingList = (token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/shopping/list", {headers:{token}}).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        }, rej)
    }, rej)
})
const getLock = (token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/user/lock", {headers:{token}}).then((response)=>{
        response.json().then(res, rej)
    }, rej)
})
const getPasswords = (token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/pwman/pwid?id=all", {headers:{token}}).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        }, (error)=>{
            rej(JSON.stringify(error))
        })
    }, rej)
})
const deriveMaster = (MasterPassword, salt)=>new Promise((res, rej)=>{
    crypto.subtle.importKey("raw", toBuffer(MasterPassword), "PBKDF2", false, ["deriveKey"]).then((importedKey)=>{
        crypto.subtle.deriveKey({name:"PBKDF2", hash:"SHA-256", salt: new Uint8Array(Array.from(atob(salt)).map((char)=>char.charCodeAt(0))), iterations: 100000}, importedKey, {name:"AES-GCM", length:256}, false, ["decrypt", "encrypt"]).then((derivedKey)=>{
            MasterKeyDerived = derivedKey;
            //console.log(MasterKeyDerived)
            res()
        }, rej)
    }, rej)
})
const checkMasterKey = (MasterPassword, salt, token)=>new Promise((res, rej)=>{
    const toHash = toBuffer(MasterPassword+salt)
    crypto.subtle.digest("sha-256", toHash).then((rhash)=>{
    const hash = fromBuffer(rhash, true)
    // console.log(ohash, hash)
        getNonce(token).then((nonce)=>{
            crypto.subtle.digest("sha-256", toBuffer(hash+nonce)).then((ehash)=>{
                fetch(process.env["API"]+"/pwman/checkmaster", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({hash: fromBuffer(ehash, true)})}).then((response)=>{
                    if(response.ok){
                        deriveMaster(MasterPassword, salt).then(()=>{
                            res(hash)
                        }, rej)
                    }else{
                        response.json().then(rej, rej)
                    }
                    
                }, rej)
            }, rej)
            
        }, rej)
        
    }, rej)
})
const setMasterPassword = (token, MasterPassword)=>new Promise((res, rej)=>{
    const randomValues = new Uint8Array(32);
    crypto.getRandomValues(randomValues)
    const salt = fromBuffer(randomValues, true)
    const toHash = toBuffer(MasterPassword+salt)
    //console.log(toHash)
    crypto.subtle.digest("sha-256", toHash).then((rhash)=>{
        const hash = fromBuffer(rhash, true)
        fetch(process.env["API"]+"/pwman/master", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({salt, hash})}).then((response)=>{
            if(response.ok){
                deriveMaster(MasterPassword, salt).then(()=>{
                    res({hash, salt})
                } , rej)
            }else{
                response.json().then(rej, (error)=>{
                    rej(JSON.stringify(error))
                })
            }
        }, rej)
    }, console.log)
})
const unsetMasterKey = ()=>{
    MasterKeyDerived = undefined
}
const decryptPW = (id, hash, token)=>new Promise((res, rej)=>{
    getNonce(token).then((nonce)=>{
        crypto.subtle.digest("sha-256", toBuffer(hash+nonce)).then((ehash)=>{
            fetch(process.env["API"]+"/pwman/pwid?id="+id+"&hash="+fromBuffer(ehash, true).replace(/[\+\/]/g, (match)=>"%"+match.charCodeAt(0).toString(16)) , {headers: {token}}).then((response)=>{
                response.json().then((content)=>{
                    if(response.ok){
                        // console.log(content, toBuffer(content.salt), toBuffer(content.crypt), MasterKeyDerived)
                        crypto.subtle.decrypt({name:"AES-GCM", length:256, iv:toBuffer(content.salt, true)}, MasterKeyDerived, toBuffer(content.crypt, true)).then((decrypted)=>{
                            res(fromBuffer(decrypted))
                        }, rej)
                    }else{
                        rej(content)
                    }
                }, rej)
            }, rej)        
        }, rej)
    }, rej)
    
})
const setPassword = (id, hash, password, token)=>new Promise((res, rej)=>{
    const iv = new Uint8Array(16)
    crypto.getRandomValues(iv)
    //console.log(MasterKeyDerived)
    getNonce(token).then((nonce)=>{
        crypto.subtle.digest("sha-256", toBuffer(hash+nonce)).then((ehash)=>{
            crypto.subtle.encrypt({name:"AES-GCM", length:256, iv}, MasterKeyDerived, toBuffer(password)).then((encoded)=>{
                const encpw = fromBuffer(encoded, true);
                const salt = fromBuffer(iv, true)
                fetch(process.env["API"]+"/pwman/password", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({hash: fromBuffer(ehash, true), id, crypt:encpw, salt})}).then((response)=>{
                    if(response.ok){
                        res({salt, crypt:encpw})
                        // crypto.subtle.decrypt({name:"AES-GCM", length:256, iv}, MasterKeyDerived, encoded).then((decoded)=>{
                        //     console.log(fromBuffer(decoded))
                        // })
                    }else{
                        response.json().then(rej, rej)
                    }
                }, rej)
            }, (error)=>{
                console.error(error);
                rej("encryption error")
            })
        }, rej)
    }, rej)

    
})
const getNonce = (token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/pwman/nonce", {headers:{token}}).then((response)=>{
        response.arrayBuffer().then((content)=>{
            res(fromBuffer(content, true))
        }, rej)
    })
})
const getRemoteDevices = (token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/remotecontrol/", {headers:{token}}).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        })
    })
})
const setRemoteDeviceSource = (address, source, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/remotecontrol/event", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({address, message:`cmd01 ${source}`})} ).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, rej)
})
const removeSource = (source, address, token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/remotecontrol/event", {method:"POST", headers:{token, "content-type":"application/json"}, body:JSON.stringify({address, message:`cmd02 ${source}`})}).then((response)=>{
        if(response.ok){
            res()
        }else{
            response.json().then(rej, rej)
        }
    }, rej)
})
const getSharedPWs = (token, dispatch)=>{
    QuerySharedPasswordsInterval = setInterval(()=>{
        fetch(process.env["API"]+"/pwman/sharingpws", {headers:{token}}).then((response)=>{
            if(response.ok){
                response.json().then((sharedpws)=>{
                    dispatch({type:"setsharedpws", sharedpws})
                }, ()=>{})
            }
        })
    }, 10000)
}
const sharePW = (token, target_id, target_pw_id)=>new Promise((res, rej)=>{
    crypto.subtle.generateKey({name:"ECDH", namedCurve:"P-256"}, true, ["deriveKey"]).then((keypair)=>{
        //console.log(keypair)
       crypto.subtle.exportKey("pkcs8", keypair.privateKey).then((privkey)=>{
           //console.log(privkey)
           crypto.subtle.exportKey("spki", keypair.publicKey).then((temp_pub)=>{
               // console.log(temp_pub)
            localStorage.setItem(`${target_id}_${target_pw_id}`, fromBuffer(privkey, true))
            fetch(process.env["API"]+"/pwman/sharepw", {method:"POST", headers:{"content-type":"application/json", token}, body:JSON.stringify({target_id, target_pw_id, temp_pub:fromBuffer(temp_pub, true)})}).then((response)=>{
                if(!response.ok){
                    response.json().then(rej)
                }else{
                    res()
                }
            }, rej)
           }, rej)
       }, rej)
    }, rej)
})
const getpwmanusers = (token)=>new Promise((res, rej)=>{
    fetch(process.env["API"]+"/pwman/pwmanusers", {headers:{token}}).then((response)=>{
        response.json().then((content)=>{
            if(response.ok){
                res(content)
            }else{
                rej(content)
            }
        })
    })
})
const acceptPW = (token, sharer_id, target_pw_id, sharer_temp_pub)=>new Promise((res, rej)=>{
    crypto.subtle.generateKey({name:"ECDH", namedCurve:"P-256"}, true, ["deriveKey"]).then((keypair)=>{
        console.log(keypair)
        crypto.subtle.exportKey("spki", keypair.publicKey).then((temp_pub)=>{
            console.log(temp_pub)
            crypto.subtle.importKey("spki", toBuffer(sharer_temp_pub, true), {name:"ECDH", namedCurve:"P-256"}, false, ["deriveKey"]).then((sharer_pub)=>{
                console.log(sharer_pub)
                crypto.subtle.deriveKey({name:"ECDH", public: sharer_pub}, keypair.privateKey, {name:"AES-GCM", length:256}, true, ["decrypt", "encrypt"]).then((aeskey)=>{
                    console.log(aeskey)
                    crypto.subtle.exportKey("raw", aeskey).then((exportedaes)=>{
                        console.log(exportedaes)
                        localStorage.setItem(`${sharer_id}_${target_pw_id}`, fromBuffer(exportedaes, true))
                        fetch(process.env["API"]+"/pwman/acceptpw", {method:"POST", headers:{"content-type":"application/json", token}, body:JSON.stringify({sharer_id, target_pw_id, temp_pub: fromBuffer(temp_pub, true)})}).then((response)=>{
                            if(response.ok){
                                res()
                            }else{
                                response.json().then(rej, rej)
                            }
                        })
                    })
                })
            })
        })
    })
})
const sendEncryptedPW = (token, target_id, target_pw_id, target_temp_pub, password)=>new Promise((res, rej)=>{
    crypto.subtle.importKey("pkcs8", toBuffer(localStorage.getItem(`${target_id}_${target_pw_id}`), true), {name:"ECDH", namedCurve:"P-256"}, false, ["deriveKey"]).then((privkey)=>{
        console.log(privkey)
        crypto.subtle.importKey("spki", toBuffer(target_temp_pub, true), {name:"ECDH", namedCurve:"P-256"}, false, ["deriveKey"]).then((pubkey)=>{
            console.log(pubkey)
            crypto.subtle.deriveKey({name:"ECDH", public: pubkey}, privkey, {name:"AES-GCM", length:256}, false, ["encrypt"]).then((aeskey)=>{
                console.log(aeskey)
                const iv = crypto.getRandomValues(new Uint8Array(12));
                crypto.subtle.encrypt({name:"AES-GCM", iv}, aeskey, toBuffer(password)).then((encrypted)=>{
                    console.log(encrypted)
                    fetch(process.env["API"]+"/pwman/encryptedpwtoshare", {method:"POST", headers:{"content-type":"application/json", token}, body:JSON.stringify({target_id, target_pw_id, iv:fromBuffer(iv, true), encrypted_pw: fromBuffer(encrypted, true)})}).then((response)=>{
                        if(response.ok){
                            res()
                        }else{
                            response.json().then(rej, rej)
                        }
                    }, console.error)
                }, console.error)
            }, console.error)
        }, console.error)
    }, console.error)
})
const decryptLocal = (encrypted_pw, iv, target_pw_id, sharer_id)=>new Promise((res, rej)=>{
    crypto.subtle.importKey("raw", toBuffer(localStorage.getItem(`${sharer_id}_${target_pw_id}`), true), {name:"AES-GCM", length: 256}, false, ["decrypt"]).then((aeskey)=>{
        crypto.subtle.decrypt({name:"AES-GCM", iv: toBuffer(iv, true)}, aeskey, toBuffer(encrypted_pw, true)).then((decrypted)=>{
            res(fromBuffer(decrypted))
        }, rej)
    }, rej)
})
const stopSharedPWsQuerys = ()=>{
    clearInterval(QuerySharedPasswordsInterval);
}
export {
    register, login, logout, patch, forgotPW, getUserInfo, removeScope, getDriveInfo, getProcessInfo, getSystemInfo, getFolderContent, unmount, mkdir, createFile, uploadFile, mount, block, unblock, addScope, getText, addRouteToScope, submitShoppingList, removeShoppingItem, getShoppingList, getLock, getPasswords, setMasterPassword, checkMasterKey, unsetMasterKey, decryptPW, setPassword, getRemoteDevices, setRemoteDeviceSource, removeSource, refreshLogin, getSharedPWs, stopSharedPWsQuerys, sharePW, getpwmanusers, acceptPW, sendEncryptedPW, decryptLocal
}