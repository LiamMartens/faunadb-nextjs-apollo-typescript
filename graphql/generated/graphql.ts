import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};








export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'Todo' */
  createTodo: Todo;
  /** Update an existing document in the collection of 'Todo' */
  updateTodo?: Maybe<Todo>;
  /** Delete an existing document in the collection of 'Todo' */
  deleteTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  data: TodoInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  data: TodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


/** 'Todo' input values */
export type TodoInput = {
  todo: Scalars['String'];
  status: TodoStatus;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Todo' by its id. */
  findTodoByID?: Maybe<Todo>;
  allTodos: TodoPage;
  todosByStatus: QueryTodosByStatusPage;
  todosByText: QueryTodosByTextPage;
};


export type QueryFindTodoByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllTodosArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryTodosByStatusArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  status?: Maybe<TodoStatus>;
};


export type QueryTodosByTextArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Todo'. */
export type QueryTodosByStatusPage = {
  __typename?: 'QueryTodosByStatusPage';
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Todo'. */
export type QueryTodosByTextPage = {
  __typename?: 'QueryTodosByTextPage';
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  todo: Scalars['String'];
  status: TodoStatus;
};

/** The pagination object for elements of type 'Todo'. */
export type TodoPage = {
  __typename?: 'TodoPage';
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export enum TodoStatus {
  New = 'NEW',
  Inprogress = 'INPROGRESS',
  Done = 'DONE'
}


export type CreateTodoMutationVariables = Exact<{
  todo: Scalars['String'];
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, '_id' | '_ts' | 'todo' | 'status'>
  ) }
);

export type AllTodosQueryVariables = Exact<{
  cursor?: Maybe<Scalars['String']>;
}>;


export type AllTodosQuery = (
  { __typename?: 'Query' }
  & { allTodos: (
    { __typename?: 'TodoPage' }
    & Pick<TodoPage, 'before' | 'after'>
    & { data: Array<Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, '_id' | '_ts' | 'todo' | 'status'>
    )>> }
  ) }
);

export type TodosByStatusQueryVariables = Exact<{
  status: TodoStatus;
  cursor?: Maybe<Scalars['String']>;
}>;


export type TodosByStatusQuery = (
  { __typename?: 'Query' }
  & { todosByStatus: (
    { __typename?: 'QueryTodosByStatusPage' }
    & Pick<QueryTodosByStatusPage, 'after' | 'before'>
    & { data: Array<Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, '_id' | '_ts' | 'todo' | 'status'>
    )>> }
  ) }
);

export type TodosByTextQueryVariables = Exact<{
  text: Scalars['String'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type TodosByTextQuery = (
  { __typename?: 'Query' }
  & { todosByText: (
    { __typename?: 'QueryTodosByTextPage' }
    & Pick<QueryTodosByTextPage, 'after' | 'before'>
    & { data: Array<Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, '_id' | '_ts' | 'todo' | 'status'>
    )>> }
  ) }
);


export const CreateTodoDocument = gql`
    mutation CreateTodo($todo: String!) {
  createTodo(data: {todo: $todo, status: NEW}) {
    _id
    _ts
    todo
    status
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const AllTodosDocument = gql`
    query AllTodos($cursor: String) {
  allTodos(_cursor: $cursor) {
    data {
      _id
      _ts
      todo
      status
    }
    before
    after
  }
}
    `;

/**
 * __useAllTodosQuery__
 *
 * To run a query within a React component, call `useAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
        return Apollo.useQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, baseOptions);
      }
export function useAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
          return Apollo.useLazyQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, baseOptions);
        }
export type AllTodosQueryHookResult = ReturnType<typeof useAllTodosQuery>;
export type AllTodosLazyQueryHookResult = ReturnType<typeof useAllTodosLazyQuery>;
export type AllTodosQueryResult = Apollo.QueryResult<AllTodosQuery, AllTodosQueryVariables>;
export const TodosByStatusDocument = gql`
    query TodosByStatus($status: TodoStatus!, $cursor: String) {
  todosByStatus(status: $status, _cursor: $cursor) {
    data {
      _id
      _ts
      todo
      status
    }
    after
    before
  }
}
    `;

/**
 * __useTodosByStatusQuery__
 *
 * To run a query within a React component, call `useTodosByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosByStatusQuery({
 *   variables: {
 *      status: // value for 'status'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useTodosByStatusQuery(baseOptions: Apollo.QueryHookOptions<TodosByStatusQuery, TodosByStatusQueryVariables>) {
        return Apollo.useQuery<TodosByStatusQuery, TodosByStatusQueryVariables>(TodosByStatusDocument, baseOptions);
      }
export function useTodosByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosByStatusQuery, TodosByStatusQueryVariables>) {
          return Apollo.useLazyQuery<TodosByStatusQuery, TodosByStatusQueryVariables>(TodosByStatusDocument, baseOptions);
        }
export type TodosByStatusQueryHookResult = ReturnType<typeof useTodosByStatusQuery>;
export type TodosByStatusLazyQueryHookResult = ReturnType<typeof useTodosByStatusLazyQuery>;
export type TodosByStatusQueryResult = Apollo.QueryResult<TodosByStatusQuery, TodosByStatusQueryVariables>;
export const TodosByTextDocument = gql`
    query TodosByText($text: String!, $cursor: String) {
  todosByText(text: $text, _cursor: $cursor) {
    data {
      _id
      _ts
      todo
      status
    }
    after
    before
  }
}
    `;

/**
 * __useTodosByTextQuery__
 *
 * To run a query within a React component, call `useTodosByTextQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosByTextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosByTextQuery({
 *   variables: {
 *      text: // value for 'text'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useTodosByTextQuery(baseOptions: Apollo.QueryHookOptions<TodosByTextQuery, TodosByTextQueryVariables>) {
        return Apollo.useQuery<TodosByTextQuery, TodosByTextQueryVariables>(TodosByTextDocument, baseOptions);
      }
export function useTodosByTextLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosByTextQuery, TodosByTextQueryVariables>) {
          return Apollo.useLazyQuery<TodosByTextQuery, TodosByTextQueryVariables>(TodosByTextDocument, baseOptions);
        }
export type TodosByTextQueryHookResult = ReturnType<typeof useTodosByTextQuery>;
export type TodosByTextLazyQueryHookResult = ReturnType<typeof useTodosByTextLazyQuery>;
export type TodosByTextQueryResult = Apollo.QueryResult<TodosByTextQuery, TodosByTextQueryVariables>;