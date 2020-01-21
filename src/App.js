import React, { useState, useReducer } from 'react';
import { Container, Jumbotron, Row, Col, Form, FormGroup, Input, Button, Label } from 'reactstrap'
import { initialState, todoReducer } from './reducers/todoReducer'

import Todo from './components/Todo'

const App = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [todo, updateTodo] = useState('')
  const { todos } = state

  const handleChange = e => {
    e.preventDefault()
    updateTodo(e.target.value)
  }

  return (
    <Container>
      <Row><Col xs='12' style={{textAlign: 'center'}}><h1>React Todo!</h1></Col></Row>
      <Jumbotron className='bg-info'>
        <Form>
          <FormGroup>
            <Label for='todo' className='text-primary'>Todo:</Label>
            <Input id='todo' name='todo' value={ todo } onChange={ handleChange }></Input>
          </FormGroup>
          <Button onClick={ () => dispatch({type: 'ADD_TODO', payload: todo}) }>Add</Button>
        </Form>
      </Jumbotron>
      { todos.map(todo =>
          <div onClick={ () => dispatch({type: 'COMPLETE_TODO', payload: todo.id}) }>
            <Todo todo={ todo }/>
          </div>
        )}
        <Row>
          <Col xs='12'><Button onClick={ () => dispatch({type: 'CLEAR_COMPLETED'}) }>Clear Completed!</Button></Col>
        </Row>
    </Container>
  )
}

export default App
