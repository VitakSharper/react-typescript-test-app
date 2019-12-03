import React, {useState, useEffect} from 'react';
import TodoForm from "../TodoForm";
import TodoList from "../components/TodoList.component";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean;


const TodosPage: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };

        // setTodos([newTodo, ...todos])
        setTodos(prevState => [newTodo, ...prevState])
    };

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved)
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    };

    const removeHandler = (id: number) => {
        const shoudRemove = confirm('Are you sure want to remove ?');
        if (shoudRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    };


    return (
        <React.Fragment>
            <TodoForm
                onAdd={addHandler}
            />
            < TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </React.Fragment>
    )
};

export default TodosPage;
