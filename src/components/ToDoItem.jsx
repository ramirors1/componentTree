import React, {useState} from "react";

function ToDoItem (props) {
    // const [isDone, setIsDone] = useState(false);

    // function handleClick() {
        // setIsDone(preValue => {
        //    return !preValue;
        // });
    

    return (
        <div 
            onClick={() => {
                props.onChecked(props.id);  //only triggered when item is clicked
            }}
            >    
            <li>{props.text}</li>
            {/* <li style={{textDecoration: isDone ? "line-through" : "none" }}>
            {props.text}
            </li> */}
        </div>
    );    
}

export default ToDoItem;
