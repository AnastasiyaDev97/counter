import s from "./FormWithSettings.module.css"

import {Button} from "../Button/Button";
import React from "react";
import {ButtonDataType, InputsType} from "../App";
import {DisplayWithSettings} from "../DisplayWithSettings/DisplayWithSettings";

export type FormWithSettingsPropsType = {
    buttons: ButtonDataType
    inputs: InputsType
    count: number | string
    maxValue: number
    startValue: number
    message:string
}


export const FormWithSettings = (props: FormWithSettingsPropsType) => {
let btnSet=props.buttons.find(f=>f.name==='set')
    return (
        <div className={s.counterWrapper}>
            <DisplayWithSettings inputs={props.inputs} count={props.count}
                                 startValue={props.startValue}
                                 maxValue={props.maxValue}
                                 message={props.message}/>
            <div className={s.buttons}>
                {btnSet&&<Button title={btnSet.name} callback={btnSet.callback} status={btnSet.status}/>}
            </div>
        </div>
    )
}