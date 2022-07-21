import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './index.css';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <>
        <style type='text/css'>
        {`
            .btn-flat {
                background-color: #B07840;
                color: white;
                align: center;
              }
            
            input[type="text"] {
                border: 0.1rem solid #7D552D !important;
            }
            
        `}
        </style>
        <Form onSubmit={handleSubmit}>
            <Row>
            <Col sm={{ span: 6, offset: 3 }}>
            <Form.Control value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            </Col>
            </Row>
            <br />
            <Row>
            <Col>
            <Button variant='flat' size='sm'>Submit</Button>
            </Col>
            </Row>
            <br />
        </Form>
        </>
    );
};

export default ToDoForm;