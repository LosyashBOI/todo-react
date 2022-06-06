import {useState} from "react";
import {PRIORITY, STATUS, taskList} from "./App";


export function TodoForm(props) {
    const placeHolder = props.priority === PRIORITY.HIGH ? 'Add important tasks' : 'Add not really important tasks';


    return (
        <form className={`to-do__form to-do__form_${props.priority}`} onSubmit={props.submit}>
            <input id="form-low" className="form__input" type="text" placeholder={placeHolder}
                   onChange={(event) => props.onChange(event.target.value)}
                   value={props.value} />
            <input className="form__input-btn" value="" type="submit" />
        </form>
    )
}