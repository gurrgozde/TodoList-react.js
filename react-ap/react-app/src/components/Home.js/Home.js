import React, {useState, useEffect} from "react";
import Todo from '../todo/Todo';


function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetch("/todo")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setTodoList(result)
            },
            (error) => {
                console.log(error)
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error) {
        return <div> Error !!!</div>;
    } else if(!isLoaded) {
        return <div> Loading... </div>;
    } else {
        return(

            <div className="homecontainer">
            TODO LIST

    
                {todoList.map(todo => (
                    
                    <Todo title={todo.title} text={todo.text}></Todo>
                ))}
            </div>
        );
    }
}

export default Home;