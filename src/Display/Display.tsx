import s from "./Display.module.css";
import React from "react";

export type DisplayPropsType = {
    count: number | undefined|string
    maxValue:number
}

export const Display = (props: DisplayPropsType) => {

    return (
        <div className={props.count===props.maxValue||props.count==='Incorrect value!'?s.maxValue:s.tablo}>{props.count}
            </div>
    )
}