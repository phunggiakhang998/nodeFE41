import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, completedTodo, filterTodo } from "../actions/todoAction";

export class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleChange = (evt) => {
    this.setState({
      content: evt.target.value,
    });
  };

  addTodo = (evt) => {
    console.log(evt.target);
    this.props.addTodo(this.state.content);
  };

  completedTodo = (id) => {
    this.props.completedTodo(id);
  };

  filterTodo = (status) => {
    //goi toi cai action set filter
    this.props.filterTodo(status);
  };

  renderTodo = () => {
    //render dah sach todo dua tren bien filter
    let todoList = [];
    if (this.props.filter === "all") {
      todoList = [...this.props.todoList];
    }
    if (this.props.filter === "completed") {
      todoList = this.props.todoList.filter((item) => item.isCompleted);
    }
    if (this.props.filter === "active") {
      todoList = this.props.todoList.filter((item) => !item.isCompleted);
    }
    return todoList.map((todo) => (
      <li
        key={todo.id}
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
        }}
        onClick={() => this.completedTodo(todo.id)}
      >
        {todo.content}
      </li>
    ));
  };
  render() {
    console.log(this.props);
    console.log(this.state.content);
    console.log(this.props.filter);

    return (
      <div className="w-25 mx-auto">
        <h1>Todos</h1>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            value={this.state.content}
            onChange={(evt) => this.handleChange(evt)}
            //onChange={this.handleChange}
          />
          <button
            className="btn btn-success"
            onClick={(evt) => this.addTodo(evt)}
          >
            Add
          </button>
        </div>
        <ul>{this.renderTodo()}</ul>
        <div className="d-flex">
          <button
            className="btn btn-success mr-4"
            onClick={() => this.filterTodo("all")}
          >
            All
          </button>
          <button
            className="btn btn-success mr-4"
            onClick={() => this.filterTodo("active")}
          >
            Active
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.filterTodo("completed")}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

//Lay state cua store ve lam props cua component
const mapStateToProps = (state) => {
  return {
    todoList: state.todosReducer.todoList,
    filter: state.todosReducer.filter,
  };
};

const mapDispatchToProps = (dispathch) => {
  return {
    addTodo: (content) => dispathch(addTodo(content)),
    completedTodo: (id) => dispathch(completedTodo(id)),
    filterTodo: (status) => dispathch(filterTodo(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
