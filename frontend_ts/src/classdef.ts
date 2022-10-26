export type RadioSelect = {
  label: string;
  name: string;
};

export type Radio = {
  title: string;
  name: string;
  selects: RadioSelect[];
};

export type Checkbox = {
  label: string;
  name: string;
};

export type InputText = {
  label: string;
  value: string;
  name: string;
};

type CodeInfo = {
  radio?: Radio;
  checkbox?: Checkbox;
  inputText?: InputText;
};

export default CodeInfo;