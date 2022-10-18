import React from "react";

export default function Button({onSubmit = f => f, btnValue = ""}) {
  return (
    <form onSubmit={onSubmit}>
      <button>{btnValue}</button>
    </form>
  );
}