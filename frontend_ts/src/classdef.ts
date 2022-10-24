interface RadioSelect {
  label: string;
  name: string;
}

interface Radio {
  title: string;
  name: string;
  selects: RadioSelect[];
}


// TODO: InputTextの名前を考え直す
// Text型は既に存在するので、良い感じの名前にする
// 今なら書き直せる！！！
export interface InputText {
  checkboxExists: boolean;
  textExists: boolean;
  radio?: Radio;
  text?: Text;
}