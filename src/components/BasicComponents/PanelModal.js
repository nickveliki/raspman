import React, {forwardRef} from "react";
import Panel from "./Panel";

export default forwardRef((props, ref)=><div className={`modal_${props.open?"visible":"hidden"}`}>
    <Panel ref={ref} {...props}/>
</div>)