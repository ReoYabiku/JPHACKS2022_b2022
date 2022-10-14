import db from "./firebase";

export function AddUser(name, age, sex) {
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