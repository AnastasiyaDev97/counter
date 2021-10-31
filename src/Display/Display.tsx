import s from "./Display.module.css";
import React from "react";

export type DisplayPropsType = {
    count: number
    maxValue: number
    message: string
}

export const Display = (props: DisplayPropsType) => {

    return (
        <div
            className={`${s.display} ${props.message === 'error' ? s.maxValue : ''} ${props.count === props.maxValue && s.maxValue}`}>
            {props.message === 'error' ? 'Incorrect value!'
                : props.message === 'changes' ? 'enter values and press \'set\''
                    : props.count}
        </div>
    )
}