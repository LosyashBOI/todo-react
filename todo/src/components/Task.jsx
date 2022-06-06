import {STATUS, taskList} from "./App";


export function TaskItem(props) {
    function changeStatus(event) {
        const position = taskList.findIndex(item => item.name === props.name);
        const status = taskList[position].status;

        taskList[position].status = status === STATUS.DONE ? STATUS.TO_DO : STATUS.DONE;

        event.currentTarget.classList.toggle('checkbox-btn_done');
        event.currentTarget.parentElement.classList.toggle('to-do__list-item_done');
        // console.log(taskList);
    }

    function deleteTask(event) {
        const position = taskList.findIndex(item => item.name === props.name);
        taskList.splice(position, 1);

        event.currentTarget.parentElement.remove();
        // console.log(taskList);
    }

    return (
        <li className="to-do__list-item flex">
            <button className="checkbox-btn" onClick={changeStatus}></button>
            <p className="to-do__task-descr">
                {props.name}
            </p>
            <button className="del-task-btn" onClick={deleteTask}></button>
        </li>
    )
}