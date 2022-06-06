import { useState } from 'react'
import '../App.css'
import {TodoForm} from './Form.jsx'
import {TaskList} from './List.jsx'

export const PRIORITY = {
    HIGH: 'high',
    LOW: 'low'
};

export const STATUS = {
    TO_DO: 'To Do',
    DONE: 'Done'
}

export const taskList = [
    {name: 'play the piano', status: STATUS.TO_DO, priority: PRIORITY.LOW},
    {name: 'pet a dog', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'write some code', status: STATUS.TO_DO, priority: PRIORITY.HIGH},
];


function App() {
    return (
        <Todo />
    )
}

function PriorityBlock(props) {
    const priorityHeader = props.priority.toUpperCase();

    const [valueInput, setValue] = useState('');

    function addTask(event) {
        event.preventDefault();

        if (!valueInput.trim) {
            return
        }

        taskList.push({name: valueInput, status: STATUS.TO_DO, priority: props.priority});
        setValue('');

        console.log(taskList);
    }

    return (
        <div>
            <h2 className="to-do__priority">{priorityHeader}</h2>
            <TodoForm priority={props.priority} submit={addTask} onChange={setValue} value={valueInput} />
            <TaskList priority={props.priority}
                      list={taskList}          />
        </div>
    )
}


function Todo() {
    return (
        <div className={'to-do'}>
            <PriorityBlock priority={PRIORITY.HIGH}/>
            <PriorityBlock priority={PRIORITY.LOW}/>
        </div>
    )
}

export default App
