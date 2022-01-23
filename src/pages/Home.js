import React, { useState, useEffect } from 'react';
import Counter from "../components/Counter";

const Home = () => {
    const [condition, setCondition] = useState(false);
    const toggle = () => setCondition(!condition);
    useEffect(() => {
        console.log(condition);
    }, [condition]);

    const renderCondition = condition ? "True" : "False";

    return (
        <>
            <h1>Home</h1>
            <div>{renderCondition}</div>
            <button onClick={toggle}>Toggle</button>
            <Counter data="Hi" />
            <Counter />
        </>
    )
}

export default Home;