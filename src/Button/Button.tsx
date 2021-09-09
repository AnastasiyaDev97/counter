import React from "react";

export type ButtonPropsType = {
    title: string
    callback: () => void
    className: string
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button className={props.className} onClick={props.callback}>{props.title}</button>
    )
}