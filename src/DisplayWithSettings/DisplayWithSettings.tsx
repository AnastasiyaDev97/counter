import s from "./DisplayWithSettings.module.css";
import {InputsType} from "../App";
import React, {ChangeEvent} from "react";

export type DisplayWithSettingsPropsType = {
    inputs: InputsType
    message: string
}

export const DisplayWithSettings = (props: DisplayWithSettingsPropsType) => {

    return (
        <div className={s.display}>
            {props.inputs.map(m => {
                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    m.changeSettingsValue(Number(e.currentTarget.value))
                }
                return (
                    <div className={s.container}><span>{m.name}</span>
                        <input  value={m.value} className={props.message==='error' ? s.inputErr : s.input} type={'number'}
                               onChange={onChangeHandler}/>
                    </div>
                )
            })}
        </div>
    )
}