import React from 'react';
import Card from './card';
import { UserContext } from '../context';

function Balance() {
  const ctx = React.useContext(UserContext);
  let user = ctx.users.filter((user) => user.loged === true);
  let index;
  let balance;
  if (user.length > 0) {
    index = ctx.users.indexOf(user[0]);
    balance = ctx.users[index].balance;
  } else {
    alert('Please Login first');
    window.location.assign('/assets/projects/coding/badbank/#/login/');
  }
  return (
    <>
      {user.length > 0 ? (
        <Card
          bgcolor={'info'}
          header={'Curent Balance'}
          body={<h1>$ {balance}</h1>}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Balance;
