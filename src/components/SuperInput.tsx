import React, {useState} from "react";

type InputPropsType = {
    value: string
    callBack: (value: string)=>void
}
export const SuperInput = (props: InputPropsType)=>{
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        props.callBack(e.currentTarget.value)
    }
    return (
        <input value={props.value} type="text" onChange={onChangeHandler}/>
    )
}