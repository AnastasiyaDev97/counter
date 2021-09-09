import s from "./Counter.module.css"
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import React, {ChangeEvent, useState} from "react";
import {ButtonDataType, buttonType, InputsType} from "../App";
import {DisplayWithSettings} from "../DisplayWithSettings/DisplayWithSettings";

export type CounterPropsType = {
    buttons: ButtonDataType
    inputs: InputsType
    count: number | string
    maxValue: number
    startValue: number
}

export const Counter1 = (props: CounterPropsType) => {

    return (
        <div className={s.counterWrapper}>
            <DisplayWithSettings inputs={props.inputs} count={props.count}
                                 startValue={props.startValue}
                                 maxValue={props.maxValue}/>
            <div className={s.buttons}>
                {props.buttons.map(m =>
                    <Button title={m.name} callback={m.callback} className={m.className}/>)}
            </div>
        </div>
    )
}