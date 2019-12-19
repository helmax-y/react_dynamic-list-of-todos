const todosURL = 'https://jsonplaceholder.typicode.com/todos';
const usersURL = 'https://jsonplaceholder.typicode.com/users';

export const getTodos = () => fetch(todosURL)
  .then(response => response.json());

export const getUsers = () => fetch(usersURL)
  .then(response => response.json());
