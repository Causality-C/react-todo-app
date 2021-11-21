import React from "react";
/**
 * A TodoList Component
 * Props
 * - todoList: the list of items
 * - strike: style, should there be strikethrough text
 * - function: when todo item clicked, what should happen
 */
export default function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todoList.map((todo, index) => {
          return (
            <li
              onClick={() => props.function(index)}
              key={index}
              style={props.strike ? { textDecoration: "line-through" } : {}}
            >
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
