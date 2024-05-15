import React, { Component } from "react";

export default class Day12Play extends Component {
  clickHandler() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <h1>Day 12 Notes</h1>
        {/* This is your play around code */}
        <div>
          <h2>Add a new Blog</h2>
          <form action="">
            <label htmlFor="">Blog Title</label>
            <input type="text" required />
            <label htmlFor="">Blog Body</label>
            <textarea name="" id="" required></textarea>
            <label htmlFor="">Blog author</label>
            <select name="" id="">
              <option value="Mario">Mario</option>
              <option value="Yoshi">Yoshi</option>
            </select>
            <button>Add Blog</button>
          </form>
        </div>
      </div>
    );
  }
}
