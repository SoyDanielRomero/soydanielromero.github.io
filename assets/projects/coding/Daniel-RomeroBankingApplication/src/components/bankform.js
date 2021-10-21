import React from 'react';
import Card from './card';
import { UserContext } from '../context';
import { Link } from 'react-router-dom';

function BankForm({
  bgcolor,
  header,
  hideName,
  hideEmail,
  hidePassword,
  hideAmount,
  hideBalance,
  handleButton,
  handle,
  successButton,
}) {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [errormsg, setErrormsg] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [loged, setLoged] = React.useState('');
  const [validForm, setValidForm] = React.useState(false);

  function getBalance() {
    let loged = ctx.users.filter((user) => user.loged === true);
    console.log(loged);
    if (loged.length > 0) {
      setBalance(loged[0].balance);
      setLoged(true);
    } else {
      setBalance(false);
      setLoged(false);
    }
  }
  React.useEffect(() => {
    if (!hideAmount) {
      getBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  React.useEffect(() => {
    if (!hideName) {
      if (!validate(name, 'Empty Name')) return;
    }
    if (!hideEmail) {
      if (!validate(email, 'Empty Email')) return;
    }
    if (!hidePassword) {
      if (!validate(password, 'Empty Password')) {
        return;
      }
      if (password.length < 8) {
        return setErrormsg('Error: Password minimum legth is 8 Characters');
      } else {
        setErrormsg('');
      }
    }
    if (!hideAmount) {
      if (!validate(amount, 'Empty Amount')) return;
    }
    setValidForm(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, name, password, amount]);

  function validate(field, label) {
    if (!field) {
      setErrormsg('Error: missing ' + label);
      // setTimeout(() => setErrormsg(''), 3000);
      return false;
    }
    return true;
  }

  function handleAction() {
    handle(name, email, password, loged, amount);
    setShow(false);
  }

  function clearform() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  function logout(email) {
    ctx.users.filter((user) => {
      if (user.email === email[0].email) {
        setLoged(false);
        return loged;
      }
      return loged;
    });
  }

  return (
    <Card
      bgcolor={bgcolor}
      header={header}
      error={errormsg}
      body={
        show ? (
          <>
            {hideBalance ? (
              <></>
            ) : (
              <>
                Current Balance
                <br />
                <span>{loged ? '$ ' + balance : 'Login First'}</span>
                <br />
              </>
            )}
            {hideName ? (
              <></>
            ) : (
              <>
                Name
                <br />
                <input
                  type='input'
                  className='form-control'
                  id='name'
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            {hideEmail ? (
              <></>
            ) : (
              <>
                Email
                <br />
                <input
                  type='input'
                  className='form-control'
                  id='email'
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            {hidePassword ? (
              <></>
            ) : (
              <>
                Password
                <br />
                <input
                  type='password'
                  minLength='8'
                  className='form-control'
                  id='password'
                  placeholder='Enter Your Password'
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            {hideAmount ? (
              <></>
            ) : (
              <>
                Amount
                <br />
                <input
                  type='text'
                  className='form-control'
                  id='amount'
                  placeholder='$'
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    if (!re.test(e.currentTarget.value)) {
                      alert('Use numbers only in the Ammount Box');
                      e.currentTarget.value = '';
                    }
                    return setAmount(e.currentTarget.value);
                  }}
                />
                <br />
              </>
            )}
            <button
              type='submit'
              className='btn btn-light'
              onClick={handleAction}
              disabled={validForm ? false : true}>
              {handleButton}
            </button>
          </>
        ) : (
          <>
            {successButton === 'Add Another Account' ? (
              <>
                <h5>Sucess!!!</h5>
                <button
                  type='submit'
                  className='btn btn-light'
                  onClick={() => {
                    if (successButton === 'Logout') {
                      logout(
                        ctx.users.filter((user) => {
                          console.log('user email2: ', user.email);
                          return user.email;
                        })
                      );
                    } else {
                      clearform();
                    }
                  }}>
                  {successButton}
                </button>
                <br />
                <Link to='/login'>
                  <button type='submit' className='btn btn-light mb-2'>
                    Log In
                  </button>
                </Link>
              </>
            ) : (
              <>
                {successButton === 'Make Another Deposit' ? (
                  <>
                    <h5>Deposit Sucess!!!</h5>
                    <button
                      type='submit'
                      className='btn btn-light'
                      onClick={() => {
                        if (successButton === 'Logout') {
                          logout(
                            ctx.users.filter((user) => {
                              console.log('user email2: ', user.email);
                              return user.email;
                            })
                          );
                        } else {
                          clearform();
                        }
                      }}>
                      {successButton}
                    </button>
                  </>
                ) : (
                  <>
                    {successButton === 'Make Another Withdraw' ? (
                      <>
                        <h5>Withdraw Sucess!!!</h5>
                        <button
                          type='submit'
                          className='btn btn-light'
                          onClick={() => {
                            if (successButton === 'Logout') {
                              logout(
                                ctx.users.filter((user) => {
                                  console.log('user email2: ', user.email);
                                  return user.email;
                                })
                              );
                            } else {
                              clearform();
                            }
                          }}>
                          {successButton}
                        </button>
                      </>
                    ) : (
                      <>
                        <h5>Transaction Failed!!!</h5>
                        {header === 'Deposit Form' && (
                          <p>Deposits must be greater than 0</p>
                        )}
                        {header === 'Withdraw Form' && (
                          <p>
                            Withdraws must be greater than 0 and lower than your
                            Current Balance
                          </p>
                        )}
                        <button
                          type='submit'
                          className='btn btn-light'
                          onClick={() => {
                            if (successButton === 'Logout') {
                              logout(
                                ctx.users.filter((user) => {
                                  console.log('user email2: ', user.email);
                                  return user.email;
                                })
                              );
                            } else {
                              clearform();
                            }
                          }}>
                          {successButton}
                        </button>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )
      }
    />
  );
}

export default BankForm;
