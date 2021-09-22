import React from 'react';
import Card from './card';
import { UserContext } from '../context';

function BankForm({
  bgcolor,
  header,
  hideName,
  hideEmail,
  hidePassword,
  hideAmount,
  // hideBalance,
  handleButton,
  handle,
  successButton,
}) {
  const [show, setShow] = React.useState(true);
  const [errormsg, setErrormsg] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  // const [balance, setBalance] = React.useState(0);
  const [loged, setLoged] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setErrormsg('Error: ' + label);
      setTimeout(() => setErrormsg(''), 3000);
      return false;
    }
    return true;
  }

  function handleAction() {
    if (!hideName) {
      if (!validate(name, 'Empty Name')) return;
    }
    if (!hideEmail) {
      if (!validate(email, 'Empty Email')) return;
    }
    if (!hidePassword) {
      if (!validate(password, 'Empty Password')) return;
    }
    if (!hideAmount) {
      if (!validate(amount, 'Empty Amount')) return;
    }
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
      console.log('loged: ', user.loged);
      console.log('user email: ', user.email);
      console.log('email: ', email);
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
                  type='number'
                  className='form-control'
                  id='amount'
                  placeholder='$'
                  onChange={(e) => setAmount(e.currentTarget.value)}
                />
                <br />
              </>
            )}
            {/* {hideBalance ? (
              <></>
            ) : (
              <>
                Amount
                <br />
                <span>
                  $
                  {() => {
                    let total = ctx.users.filter((user) => user.balance);
                    let test2 = Number(total[0].balance);
                    console.log('total', test2);

                    setBalance(test2);
                    return balance;
                  }}
                </span>
                <br />
              </>
            )} */}
            <button
              type='submit'
              className='btn btn-light'
              onClick={handleAction}>
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
              </>
            ) : (
              <>
                <h5>:D</h5>
              </>
            )}
          </>
        )
      }
    />
  );
}

export default BankForm;
