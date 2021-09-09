import s from './../Counter1/Counter.module.css'
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import React, {useState} from "react";
import {ButtonDataType, buttonType} from "../App";
import { DisplayWithSettings } from "../DisplayWithSettings/DisplayWithSettings";

export type CounterPropsType = {
    buttons: ButtonDataType
    count?: number | undefined|string
    maxValue:number

}

export const Counter2 = (props: CounterPropsType) => {


    return (
        <div className={s.counterWrapper}>
            <Display count={props.count} maxValue={props.maxValue}/>
            <div className={s.buttons}>
                {props.buttons.map(m =>
                    <Button title={m.name} callback={m.callback} className={m.className}/>)}
            </div>
        </div>
    )
}