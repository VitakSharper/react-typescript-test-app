import React, {useRef} from 'react';


interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');

    const ref = useRef<HTMLInputElement>(null);

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
            // setTitle('');
        }
    };

    return (
        <div className='input-field mt2'>
            <input
                type="text"
                id='title'
                placeholder='Some dummy text please (❁´◡`❁)'
                onKeyPress={keyPressHandler}
                ref={ref}
            />
            <label htmlFor="title" className='active'>Enter some Dummy Text))</label>
        </div>
    )
};

export default TodoForm;
