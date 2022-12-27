import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const LibraryQuery = gql`
  {
    items {
      id
      title
      user {
        email
      }
    }
  }
`;

export default () => (
  const input = useRef(null);
  <Query query={LibraryQuery}>
    {({ data, loading }) => (
      <div>
        {loading
          ? 'loading...'
          : data.items.map(({ title, id, user }) => (
              <div key={id}>
                <b>{title}</b> {user ? `added by ${user.email}` : null}
              </div>
            ))}
      </div>
    )}
  </Query>
);

    return (
    <form
  onSubmit={event => {
    event.preventDefault();
    signIn({
      variables: { email: input.current.value },
    }).then(({ data: { signIn: { token } } }) => {
      if (token) {
        localStorage.setItem('mlToken', token);
      }
    });
  }}
>
      <input
        ref={input}
        type="email"
        className={cs.input}
        placeholder="your email"
      />
    </form>
  );
};