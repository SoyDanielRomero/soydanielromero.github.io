import React, { useEffect } from 'react';
import BankForm from './bankform';
import { UserContext, useBankContext } from '../context';
import { Link } from 'react-router-dom';

function Login() {
  const ctx = React.useContext(UserContext);
  const { login, users } = useBankContext();
  const [currentUser, setCurrentUser] = React.useState('');
  const [userNotFound, setUserNotFound] = React.useState(false);

  useEffect(() => {
    function findlogedUser() {
      let userLoged = ctx.users.filter((user) => user.loged === true);
      if (userLoged.length > 0) {
        setCurrentUser(userLoged[0]);
      } else {
        setCurrentUser(false);
      }
    }

    findlogedUser();
  }, [ctx.users, users]);

  function loghandle(name, email, password, loged) {
    console.log('users', users);
    let user = ctx.users.filter((user) => user.email === email);
    if (user.length > 0) {
      let index = ctx.users.indexOf(user[0]);
      ctx.users[index].loged = true;
      login(user[0]);
      setCurrentUser(user);
      return true;
    } else {
      setUserNotFound(true);
      setTimeout(() => {
        setUserNotFound(false);
      }, 3000);
    }
  }

  return (
    <>
      {!currentUser ? (
        <>
          <div className='container d-flex justify-content-center'>
            <BankForm
              bgcolor='warning'
              header='Welcome'
              hideName={true}
              hideEmail={false}
              hidePassword={false}
              hideAmount={true}
              hideBalance={true}
              handleButton='Login'
              handle={loghandle}
              successButton='Logout'
            />
          </div>
          {userNotFound && <p>User not found, please register</p>}
        </>
      ) : (
        <div className='alert alert-success d-flex justify-content-around flex-column'>
          <p>
            Hello {currentUser.name}, Welcome back what would you like to do?
          </p>
          <div className='container-fluid d-flex justify-content-around flex-row'>
            <Link to='/deposit'>
              <button type='submit' className='btn btn-light mb-2'>
                Deposit
              </button>
            </Link>
            <Link to='/withdraw'>
              <button type='submit' className='btn btn-light mb-2'>
                Withdraw
              </button>
            </Link>
            <Link to='/balance'>
              <button type='submit' className='btn btn-light mb-2'>
                Balance
              </button>
            </Link>
            <Link to='/alldata'>
              <button type='submit' className='btn btn-light mb-2'>
                All Data
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
