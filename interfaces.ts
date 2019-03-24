/* function showTodo(todo: { title: string; text: string }) {
  console.log(todo.title + ":" + todo.text);
}
let myTodo = { title: "trash", text: "take out trash" };
showTodo(myTodo);
 */

interface Todo {
  title: string;
  text: string;
}

//its bascially creating your own type

function showTodo(todo: Todo) {
  console.log(todo.title + ":" + todo.text);
}
let myTodo = { title: "trash", text: "take out trash" };
showTodo(myTodo);
