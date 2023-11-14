import React, {useState} from 'react'
import TaskList from './TaskList'
import FormTodo from './FormToDo'

const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
    setList([...list, addItem]);
    };
    return (
        <div>
            List To Do
            <FormTodo handleAddItem={handleAddItem}></FormTodo>
            <TaskList list={list} setList={setList}></TaskList>
        </div>
    )
}

export default Container