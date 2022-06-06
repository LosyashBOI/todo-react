import {taskList} from "./App.jsx";
import {TaskItem} from "./Task";

export function TaskList(props) {
    const arr = props.list.filter(item => item.priority === props.priority);
    const list = arr.map((item, index) =>
        <TaskItem key={index} name={item.name}/>
    )

    return (
        <ul className={`to-do__list to-do__list_${props.priority}`}>
            {list}
        </ul>
    )
}