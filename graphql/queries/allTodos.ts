import { gql } from '@apollo/client';

export const allTodosQuery = gql`
    query AllTodos($cursor: String) {
        allTodos(_cursor: $cursor) {
            data {
                _id,
                _ts,
                todo,
                status
            },
            before,
            after
        }
    }
`;