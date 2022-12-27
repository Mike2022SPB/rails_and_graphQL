import React from 'react';
import { Query, Mutation } from "react-apollo";
import { Me, SignMeIn } from "./operations.graphql";
import cs from './styles';

const UserInfo = () => (
  <div className={cs.userInfo}>👋</div>
);

<Query query={Me}>
  {({ data, loading }) => {
    if (loading) return "...Loading";
    if (!data.me) {
      // Show login form
      return;
    }

    const { fullName } = data.me;
    return <div className={cs.info}>😈 {fullName}</div>;
  }}
</Query>

<Mutation mutation={SignMeIn}>
  {(signIn, { loading: authenticating }) =>
    authenticating ? (
      "..."
    ) : (
      <form onSubmit={() => signIn(/* email here */)}>
        <input type="email" />
        <input type="submit" value="Sign In" />
      </form>
    )
  }
</Mutation>

export default UserInfo;