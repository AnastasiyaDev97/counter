import s from "./FormWithSettings.module.css"

import {Button} from "../Button/Button";
import React from "react";
import {InputsType} from "../App";
import {DisplayWithSettings} from "../DisplayWithSettings/DisplayWithSettings";

export type FormWithSettingsPropsType = {
    inputs: InputsType
    message: string
    onSetHandler: () => void
    status: boolean
}


export const FormWithSettings = (props: FormWithSettingsPropsType) => {

    return (
        <div className={s.counterWrapper}>
            <DisplayWithSettings inputs={props.inputs}
                                 message={props.message}/>
            <div className={s.buttons}>
                <Button title={'set'} callback={props.onSetHandler} status={props.status}/>
            </div>
        </div>
    )
}