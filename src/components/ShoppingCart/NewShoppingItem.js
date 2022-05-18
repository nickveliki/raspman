import React, {useState, useRef} from "react";
import LabeledTextInput from "../BasicComponents/LabeledTextInput";
import cross from "../../assets/cross.png"

export default (props)=>{
    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState(1);
    const [quantityType, setQuantityType] = useState("pieces")
    const frame = useRef({clientWidth: 0})

    return <div ref={frame} style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <LabeledTextInput placeholder="item" onChange={setItem} value={item} style={{input:{border:"1px solid blue", padding:"4px", borderRadius:"4px", width:`${frame.current.clientWidth-170}px`}}}/>
        <select onChange={(ev)=>{
            setQuantityType(ev.target.value)
            if(ev.target.value=="grams"){
                setQuantity(50)
            }
        }} value={quantityType} style={{border:"1px solid blue", padding:"3px", borderRadius:"4px", background:"white"}}>
            <option>pieces</option>
            <option>bags</option>
            <option>bottles</option>
            <option>cases</option>
            <option>kg</option>
            <option>grams</option>
        </select>
        <input type="number" style={{width:"40px", border:"1px solid blue", padding:"4px", borderRadius:"4px"}} onChange={(ev)=>{
            const amount = parseInt(ev.target.value)
            if(amount>0){
                setQuantity(amount)
            }
            if(amount>950&&quantityType=="grams"){
                setQuantity(1);
                setQuantityType("kg")
            }
        }} value={quantity} step={quantityType=="grams"?50:1}/>
        
        <button className="white noborder login pointer" onClick={()=>props.addItem(item, quantity, quantityType)} ><img className="btnimg rotate-45" src={cross}/></button>
    </div>
}