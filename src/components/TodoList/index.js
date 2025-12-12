import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch } from 'react-redux';
import { use } from 'react';
import { addTodo } from '../../Redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);
  const searchTextFilter = useSelector(state => state.filter.search);
  const stateFilter = useSelector(state => state.filter.state);
  const priorityFilter = useSelector(state => state.filter.priority);

  const filteredTodoList = todoList.filter(todo => {
    const matchesSearchText = todo.name.toLowerCase().includes(searchTextFilter.toLowerCase());
    const matchesState = () => {
      if (stateFilter === 'All') return true
      else if (stateFilter === 'Completed') return todo.completed === true
      else return !todo.completed;
    }
    return matchesSearchText && matchesState() && (priorityFilter.length === 0 || priorityFilter.includes(todo.priority));
  });
  const handleAdd = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    )

  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          filteredTodoList.map(todo => (
            <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} id={todo.id} />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={e => {
            console.log(e.target.value)
            setTodoName(e.target.value)
          }} />
          <Select value={priority} onChange={value => {
            setPriority(value);
          }} >
            <Select.Option value='High' label='High' >
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
