import NotFound from "./NotFound"
import React from "react";
import { connect } from "react-redux";
import { hasScopes } from "../services/misc";
import Panel from "./BasicComponents/Panel";
import NewShoppingItem from "./ShoppingCart/NewShoppingItem";
import ShoppingItem from "./ShoppingCart/ShoppingItem";
import refresh from "../assets/refresh.png";

export default connect((state) => state)((props) => {
    if (props.state.token && !props.state.shoppingItems && !props.state.frequentItems && !props.state.error) {
        import("../services/api").then(({ getShoppingList }) => {
            getShoppingList(props.state.token).then(({ shoppingList, frequentlyUsed, recentFinds }) => {
                props.dispatch({ type: "setShoppingList", shoppingItems: shoppingList, frequentItems: frequentlyUsed, shoppingItemsFound: recentFinds.map((item) => ({ ...item, ok: true })) })
            })
        })
    } else if (props.state.token&&!props.state.noPostShoppingItems&&props.state.shoppingItems&&!props.state.error) {
        import("../services/api").then(({ submitShoppingList }) => {
            submitShoppingList(props.state.shoppingItems, props.state.token).then((frequentlyUsed) => {
                props.dispatch({type:"setFrequentItems", frequentItems:frequentlyUsed, noPostShoppingItems: true})
             }, (error) => {
                props.dispatch({ type: "seterror", error })
            })
        })
    }
    return hasScopes(props.state.token, "shopping") ? <div className={window.innerWidth<465?"overflow":"fullheight grid-3 overflowNo"}>
        <Panel nooverflow={true} style={{ display: "flex", flexDirection: "column" }} className="fill" innerClassName={window.innerWidth<465?"fill column_bottom":""} panelHead={<div className="login">Shopping Items<button className="pointer login noborder white"><img className="btnimg" src={refresh} onClick={() => {
            import("../services/api").then(({ getShoppingList }) => {
                getShoppingList(props.state.token).then(({ shoppingList, frequentlyUsed, recentFinds }) => {
                    props.dispatch({ type: "setShoppingList", shoppingItems: shoppingList, frequentItems: frequentlyUsed, shoppingItemsFound: [...recentFinds.map((item) => ({ ...item, ok: true })), ...(props.state.shoppingItemsFound || []).filter(({ ok }) => !ok)] })
                })
            })
        }} /></button></div>} components={[...(props.state.shoppingItems || []).map((item) => <ShoppingItem {...item} step={item.quantityType == "grams" ? 50 : 1} changeQuantity={(value) => {
            if (value) {
                props.dispatch({ type: "changeShoppingItemQuantity", shoppingItems: [...props.state.shoppingItems.slice(0, props.state.shoppingItems.findIndex((fitem) => item.item == fitem.item)), { ...item, quantity: value }, ...props.state.shoppingItems.slice(props.state.shoppingItems.findIndex((fitem) => fitem.item == item.item) + 1)] })
            }
        }} ok={() => {
            import("../services/api").then(({ removeShoppingItem, getShoppingList }) => {
                removeShoppingItem({ ...item, ok: true }, props.state.token).then(() => {
                    getShoppingList(props.state.token).then(({shoppingList, frequentlyUsed})=>{
                        props.dispatch({ type: "foundShoppingItem", shoppingItemsFound: [...(props.state.shoppingItemsFound || []), { ...item, ok: true }], frequentItems: frequentlyUsed, shoppingItems: shoppingList.filter((fitem) => fitem.item != item.item) })
                    })
                }, (error) => {
                    props.dispatch({ type: "foundShoppingItem", shoppingItemsFound: [...(props.state.shoppingItemsFound || []), { ...item, ok: true }], error, shoppingItems: props.state.shoppingItems.filter((fitem) => fitem.item != item.item) })

                })
            })
        }} notok={() => {
            props.dispatch({type:"removeShoppingItem", shoppingItems:props.state.shoppingItems.filter((initem)=>initem.item!=item.item), noPostShoppingItems:false})
        }} />), <NewShoppingItem addItem={(item, quantity, quantityType) => {
            if (![...(props.state.shoppingItems || []), ...(props.state.shoppingItemsFound || [])].find((fitem) => fitem.item == item)) {
                props.dispatch({ type: "addShoppingItem", shoppingItems: [...(props.state.shoppingItems || []), { item, quantity, quantityType }], noPostShoppingItems:undefined })
            }
        }} />]} />
        <Panel nooverflow={true} style={{ display: "flex", flexDirection: "column" }} className="fill" panelHead="Frequently Requested" components={[...(props.state.frequentItems || []).filter((item) => ![...(props.state.shoppingItems || []), ...(props.state.shoppingItemsFound || [])].find((item2) => item.item == item2.item)).map((item) => <ShoppingItem {...item} quantity={item.recommend } addtolist={() => {
            props.dispatch({ type: "addShoppingItem", shoppingItems: [...(props.state.shoppingItems || []), { ...item, quantity: item.recommend  }], noPostShoppingItems:undefined })
        }} />)
        ]} />
        <Panel nooverflow={true} style={{ display: "flex", flexDirection: "column" }} className="fill" panelHead="Shopping Items Found" components={(props.state.shoppingItemsFound || []).map((item) => <ShoppingItem addtolist={true} {...item} />)} />

    </div> : <NotFound />
})