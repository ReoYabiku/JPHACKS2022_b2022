import db from "./firebase";

export function AddUser(name: string, age: number, sex: string) {
  db.collection("users").add({
    name: name,
    age: age,
    sex: sex
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}