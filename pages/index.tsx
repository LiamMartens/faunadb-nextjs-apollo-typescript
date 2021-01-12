import * as React from 'react';
import { TodoStatus, useAllTodosLazyQuery, useCreateTodoMutation, useTodosByStatusLazyQuery, useTodosByTextLazyQuery } from '../graphql/generated/graphql';

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [getAllTodos, allTodos] = useAllTodosLazyQuery();
  const [getTodosByStatus, todosByStatus] = useTodosByStatusLazyQuery();
  const [getTodosByText, todosByText] = useTodosByTextLazyQuery();
 const [addTodo, addTodoStatus] = useCreateTodoMutation();

 const todosQuery = searchQuery.startsWith('tag:') ? todosByStatus : (
   !!searchQuery ? todosByText : allTodos
 );
 const todos = todosQuery.data && (
   'allTodos' in todosQuery.data
    ? todosQuery.data.allTodos
    : ('todosByStatus' in todosQuery.data ?  todosQuery.data.todosByStatus : todosQuery.data.todosByText)
 );

  React.useEffect(() => {
    if (searchQuery.startsWith('tag:')) {
      getTodosByStatus({ variables: { status: searchQuery.replace('tag:', '').toUpperCase() as TodoStatus } })
    } else if (!!searchQuery) {
      getTodosByText({ variables: { text: searchQuery } })
    } else {
      getAllTodos();
    }
  }, [searchQuery]);

 const onAddTodoSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();
   const text = event.currentTarget.todo.value;
   if (text && typeof text === 'string') {
      event.currentTarget.todo.value = '';
     await addTodo({ variables: { todo: text } });
   }
 }, []);

 const onSearchSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const query = event.currentTarget.search.value.trim();
  if (query && typeof query === 'string') {
    setSearchQuery(query);
  }
}, []);

 if (todosQuery.loading) {
   return (
     <p>Loading ...</p>
   );
 }

 return (
  <div>
    <form onSubmit={onAddTodoSubmit}>
      <input type="text" name="todo" />
    </form>
    <form onSubmit={onSearchSubmit}>
      <input type="search" name="search" placeholder="Search" />
    </form>
    <ul>
      {todos?.data.map(t => (
        <li key={t?._id}>
          <p>{t?.todo}</p>
          <small>{t?.status}</small>
        </li>
      ))}
    </ul>
  </div>
 );
}
