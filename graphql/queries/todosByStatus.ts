import { gql } from '@apollo/client';

export const todosByStatus = gql`
    query TodosByStatus($status: TodoStatus!, $cursor: String) {
        todosByStatus(status: $status, _cursor: $cursor) {
            data {
                _id,
                _ts,
                todo,
                status
            },
            after,
            before
        }
    }
`;