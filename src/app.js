import React from "react";
import ReactDOM from "react-dom";
import reduxStore from "./redux/store";
import {Provider} from "react-redux";
import DynamicImport from "./components/DynamicImport";
import Loader from "./components/BasicComponents/Loader";
import './styles/styles.css'

    const store = reduxStore();
    const jsx = <Provider store={store}>
        <DynamicImport load={()=> import("./routers/AppRouter")}>
            {(Component)=> Component? <Component />:<Loader />}
        </DynamicImport>
    </Provider>
    
    ReactDOM.render(jsx, document.getElementById("app"))
