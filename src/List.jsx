import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 16px;
  border-radius: 12px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: ${(props) => (props.delete ? "#e74c3c" : "#2ecc71")};
  color: #fff;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    opacity: 0.9;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export default class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Купити продукти" },
    { id: 2, text: "Зробити домашнє завдання" },
    { id: 3, text: "Піти на пробіжку" },
  ];

  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  handleAdd = () => {
    const text = this.inputRef.current.value.trim();
    if (!text) return;
    const newTask = { id: Date.now(), text };
    TaskList.tasks.push(newTask);
    this.inputRef.current.value = "";
    this.forceUpdate();
  };

  handleDelete = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <Wrapper>
        <Input ref={this.inputRef} type="text" placeholder="Нове завдання..." />
        <Button onClick={this.handleAdd}>Додати</Button>
        <div style={{ marginTop: "12px" }}>
          {TaskList.tasks.map((task) => (
            <TaskItem key={task.id}>
              <span>{task.text}</span>
              <Button delete onClick={() => this.handleDelete(task.id)}>
                Видалити
              </Button>
            </TaskItem>
          ))}
        </div>
      </Wrapper>
    );
  }
}
