import React from 'react';
import BankForm from '../components/bankform';
import { UserContext } from '../context';

function Withdraw() {
  const [withdrawError, setWithdrawError] = React.useState(false);
  const ctx = React.useContext(UserContext);

  function withdraw(name, email, password, loged, amount) {
    let user = ctx.users.filter((user) => user.loged === true);
    if (user.length === 0) {
      alert('Please Login first');
      window.location.assign('#/login/');
    } else {
      let index = ctx.users.indexOf(user[0]);
      let balance = ctx.users[index].balance;
      if (balance > 0 && balance >= amount && amount > 0) {
        setWithdrawError(false);
        ctx.users[index].balance -= Number(amount);
      } else {
        setWithdrawError(true);

        return false;
      }
      return true;
    }
  }

  return (
    <div className='container d-flex justify-content-center'>
      <BankForm
        bgcolor='danger'
        header='Withdraw Form'
        hideName={true}
        hideEmail={true}
        hidePassword={true}
        hideAmount={false}
        hideBalance={false}
        handleButton='Withdraw'
        handle={withdraw}
        successButton={withdrawError ? 'Try again' : 'Make Another Withdraw'}
      />
    </div>
  );
}

export default Withdraw;
