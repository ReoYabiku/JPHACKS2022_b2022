import React, { useRef } from "react";
import { AddUser } from "./DB";

export default function AddForm() {
  const txtName = useRef();
  const intAge = useRef();
  const txtSex = useRef();

  const submit = e => {
    e.preventDefault();
    console.log("hogehogehogehoge");
    const name = txtName.current.value;
    const age = intAge.current.value;
    const sex = txtSex.current.value;
    AddUser(name, age, sex);
    txtName.current.value = "";
    intAge.current.value = "";
  }

  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={submit}>
        <div>
          <label>名前
            <input ref={txtName} type="text" name="name" />
          </label>
        </div>
        <div>
          <label>年齢
            <input ref={intAge} type="text" name="age" />
          </label>
        </div>
        <div>
          <label>性別
            <select ref={txtSex} name="sex" id="sex-select">
              <option value="male">男性</option>
              <option value="female">女性</option>
            </select>
          </label>
        </div>
        <button>登録</button>
      </form>
    </div>
  );
}