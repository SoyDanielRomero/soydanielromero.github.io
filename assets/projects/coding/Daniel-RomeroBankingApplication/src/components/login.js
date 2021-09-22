import React from 'react';
import BankForm from './bankform';
import { UserContext } from '../context';

function Login() {
  const ctx = React.useContext(UserContext);

  function login(name, email, password, loged) {
    ctx.users.filter((user) => {
      console.log('new user email: ', user.email);
      console.log('new user email2: ', email);
      if (user.email === email) {
        if (user.password === password) {
          return (user.loged = true);
        } else {
          return alert('Wrong Password');
        }
      } else {
        return alert('Wrong Email');
      }
    });
  }
  return (
    <div className='container d-flex justify-content-center'>
      <BankForm
        bgcolor='warning'
        header='Create Account'
        hideName={true}
        hideEmail={false}
        hidePassword={false}
        hideAmount={true}
        hideBalance={true}
        handleButton='Login'
        handle={login}
        successButton='Logout'
      />
    </div>
  );
}

export default Login;
