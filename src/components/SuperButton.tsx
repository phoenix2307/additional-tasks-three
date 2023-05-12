import React from "react";

type ButtonPropsType = {
    name: string
    callBack: ()=>void
}
export const SuperButton = (props: ButtonPropsType) => {
    const onclickHandler = ()=>{
        props.callBack()
    }
    return (
        <button onClick={onclickHandler}>{props.name}</button>
    )
}