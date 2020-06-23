import React, { useState } from 'react'

//sets the initial state
const [value, setValue] = useState("");

export default function ToDoForm({ addToDo }) {
    const [value, setValue] = useState("");

    //submission handler
    handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };




    //FORM
    render() {
        return (
          <>
            <form onSubmit={this.handleSubmit}>
              <label >
                <span>URL: </span>
                <input name='url' type='text' onChange={this.handleChangeURL} />
                <button type="submit">GO!</button>
              </label>
              <label className="methods">
                <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
                <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
                <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
                <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
              </label>
            </form>
            <section className="results">
              <span className="method">{this.state.request.method}</span>
              <span className="url">{this.state.request.url}</span>
            </section>
          </>
        );
      }
}