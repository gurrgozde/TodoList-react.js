import React from "react";

import "./Todo.scss";
function Todo(props) {
    const {title, text} = props;

   return(
       <div className="todoContainer">
           {title}
           {text}
       </div>
   )
}

export default Todo;