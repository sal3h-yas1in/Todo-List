import React from 'react';
import ToDo from './ToDo';
import Button from 'react-bootstrap/Button';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <>
        <style type='text/css'>
        {`
            .btn-clear {
                background-color: #7D552D;
                color: white;
              }
            
            input[type="text"] {
                border: 0.1rem solid #7D552D !important;
            }
            
        `}
        </style>

        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <Button style={{margin: '20px'}} onClick={handleFilter} variant="clear">Clear Completed</Button>
        </div>
        </>
    );
};

export default ToDoList;