import React, {useState} from 'react';
import Navbar from "./components/navbar.component";
import TodoForm from "./TodoForm";

const App: React.FC = () => {
    const [todos, setTodos] = useState([]);

    const addHandler = (title: string) => {
        console.log('add new todo', title);
    };

    return (
        <>
            <Navbar/>
            <div className='container'>
                <TodoForm
                    onAdd={addHandler}
                />
            </div>
        </>
    )
};

export default App;
