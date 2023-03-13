import './Todo.css';
import { useState } from 'react';
import Form from './form/Form';
import Displaytask from './displaytask/Displaytask';

let indexTask = 0;

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    
    console.log(todos)

    const onAdd = () => {
        if (task !== '') {
            let eachTodo = {id: indexTask++, task:task}
            setTask('');
            setTodos([...todos, eachTodo]);
        }
    }

    const onDelete = (id) => {
        const newTodos = todos.filter(todo=>todo.id !== id)
        setTodos(newTodos);
    }
    
    const [checked, setChecked] = useState([]);
    const handleOnCheck = (event) => {
        var todoChecked = [...checked]; // store value which checked (can check more than 1)
        var targetCheck = event.target.checked; // checkbox have been check.
        var targetValue = event.target.value; // value of checkbox which checked
        console.log(targetCheck); //true/false
        console.log(targetValue);
        console.log(checked)

        if (targetCheck) {
            todoChecked = [...checked, targetValue];
        } else {
            // splice syntax: splice (item, deleteCount)
            //checked.indexOf(targetValue): is the item which delete
            // 1: is the delete count is we delete one by one.
            todoChecked.splice(checked.indexOf(targetValue), 1);
        }
        setChecked(todoChecked);
    };

    
    var isChecked = (item) => // create it to set style.
    checked.includes(item) ? "checked-todo" : "not-checked-todo";



    return (
        <div className='m-0 p-0'>
            <div className="todo-nav">
                TODO
            </div>

            <div className="todo-form">
                <p className='todo-title m-0'>todos</p>
                <Form 
                    onAdd={onAdd}
                    todos={todos}
                    setTodos={setTodos}
                    task={task}
                    setTask={setTask}
                />

                <Displaytask
                    task={task}
                    setTask={setTask}
                    todos={todos}
                    onDelete={onDelete}
                    handleOnCheck={handleOnCheck}
                    isChecked={isChecked}
                />
            </div>
        </div>
        
    )
}

export default Todo;