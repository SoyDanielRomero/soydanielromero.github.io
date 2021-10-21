import React from 'react';
import BankForm from '../components/bankform';
import { UserContext } from '../context';

function Deposit() {
  const [depositError, setDepositError] = React.useState(false);
  const ctx = React.useContext(UserContext);

  function deposit(name, email, password, loged, amount) {
    let user = ctx.users.filter((user) => user.loged === true);
    if (user.length === 0) {
      alert('Please Login first');
      window.location.assign('#/login/');
    } else {
      let index = ctx.users.indexOf(user[0]);
      if (amount > 0) {
        setDepositError(false);
        ctx.users[index].balance += Number(amount);
      } else {
        setDepositError(true);

        return false;
      }
      return true;
    }

    console.log('user', user);
  }
  return (
    <div className='container d-flex justify-content-center'>
      <BankForm
        bgcolor='success'
        header='Deposit Form'
        hideName={true}
        hideEmail={true}
        hidePassword={true}
        hideAmount={false}
        hideBalance={false}
        handleButton='Deposit'
        handle={deposit}
        successButton={depositError ? 'Try again' : 'Make Another Withdraw'}
      />
    </div>
  );
}

export default Deposit;
