import { gql } from '@apollo/client';

export const todosByText = gql`
    query TodosByText($text: String!, $cursor: String) {
        todosByText(text: $text, _cursor: $cursor) {
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