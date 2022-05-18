const equals = (a, b) => {
    if (typeof (a) != typeof (b)) {
        return false
    }
    if (typeof (a) == "object") {
        const akeys = Object.keys(a);
        const bkeys = Object.keys(b);
        if (akeys.length != bkeys.length || akeys.filter((key) => !bkeys.includes(key)).length > 1 || bkeys.filter((key) => !akeys.includes(key)).length > 1) {
            return false
        }
        let eq = true
        let i = 0;
        while (eq && i < akeys.length) {
            if (!equals(a[akeys[i]], b[akeys[i]])) {
                // console.log("this should yield false")
                eq = false;
            }
            i++;
        }
        return eq
    } else {
        return a == b
    }
}
const isAdmin = (token)=>{
    return token?JSON.parse(atob(token.split(".")[1])).scopes.includes("admin"):false
}
const myID = (token)=>{
    return token?JSON.parse(atob(token.split(".")[1])).id:""
}
const hasScopes = function(token){
    if(!token){
        return false
    }
    const scopes = Array.from(arguments).slice(1).filter((scope)=>typeof(scope)=="string");
    const tokenScopes = JSON.parse(atob(token.split(".")[1])).scopes
    // console.log(scopes, tokenScopes)
    return tokenScopes.includes("admin")||scopes.filter((scope)=>!tokenScopes.includes(scope)).length==0
}
const suffix = (size) => {
    switch (Math.floor(Math.log(size) / Math.log(Math.pow(2, 10)))) {
        case 1: return "KiBi"
        case 2: return "MiBi"
        case 3: return "GiBi"
        case 4: return "TiBi"
        case 5: return "PiBi"
        case 6: return "EiBi"
        case 7: return "ZiBi"
        case 8: return "YiBi"
    }
}
const formatSize = (size) => size?(size / Math.pow(2, 10 * (Math.floor(Math.log(size) / Math.log(Math.pow(2, 10)))))).toFixed(1):0
function pathcombine(args){
    if(!Array.isArray(args)){
        args = Array.from(arguments)
    }
    // console.log({args})
    return "/"+args.map((arg)=>arg.split("/").filter((seg)=>seg.length)).flat().join("/")
}
const randomSymbols = (n=8, precursers="")=>{
    if(n==0){
        return precursers
    }else{
        const symbolNumber = Math.ceil(Math.random()*(125-32))+32

        return randomSymbols(n-1, precursers+String.fromCharCode(symbolNumber))
    }
}
export {equals, isAdmin, formatSize, suffix, pathcombine, hasScopes, randomSymbols, myID}