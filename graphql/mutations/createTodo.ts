import { gql } from '@apollo/client';

export const createTodoQuery = gql`
    mutation CreateTodo($todo: String!) {
        createTodo(data: {
            todo: $todo,
            status: NEW
        }) {
            _id,
            _ts,
            todo,
            status
        }
    }
`;