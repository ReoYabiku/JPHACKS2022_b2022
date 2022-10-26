import React from "react";

type Props = {
  id: number;
  checkedList: boolean[];
  labelText: string;
  setCheckedList: React.Dispatch<React.SetStateAction<boolean[]>>
};

const CheckboxUnit: React.FC<Props> = (props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.checkedList.splice(props.id, 1, e.target!.checked);
    props.setCheckedList([...props.checkedList]);
  };

  return (
    <label style={{display: "flex", alignItems: "center"}}>
      <input type="checkbox" onChange={onChange}></input>
      {props.labelText}
    </label>
  );
}

export default CheckboxUnit;