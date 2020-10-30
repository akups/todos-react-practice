import React from "react";
import "./todo.css";

export default function Todo({ todo }) {
  return (
    <>
      <div className="todo">Content: {todo}</div>
    </>
  );
}
