import React from 'react';
import {useHistory} from 'react-router-dom'

const AboutPage: React.FunctionComponent = () => {
    const history = useHistory();
    return (
        <>
            <h1>Some infos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium assumenda corporis eum maxime
                molestias rem reprehenderit similique. Fuga, non. </p>
            <button className='btn' onClick={() => history.push('/')}>Go back</button>
        </>
    )
};

export default AboutPage;
