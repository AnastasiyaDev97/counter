import React from "react";
import s from './Button.module.css'

export type ButtonPropsType = {
    title: string
    callback: () => void
    status: boolean
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button className={props.status ? s.buttonActive : s.buttonNot} onClick={props.callback}>{props.title}</button>
    )
}