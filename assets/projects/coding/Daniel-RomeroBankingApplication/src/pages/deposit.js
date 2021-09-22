import React from 'react';
import BankForm from '../components/bankform';
// import { UserContext } from '../context';

function Deposit() {
  // const ctx = React.useContext(UserContext);

  function deposit(name, email, password, loged, amount) {
    // ctx.users.filter((user) => {
    //   console.log('user.loged', user.loged);
    //   if (user.loged === false) {
    //     alert('Please Login first');
    //     return window.location.assign(
    //       '/assets/projects/coding/badbank/#/login/'
    //     );
    //   } else {
    //     let currentBalance = user.balance;
    //     return (user.balance = Number(currentBalance) + Number(amount));
    //   }
    // });
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
        hideBalance={true}
        handleButton='Deposit'
        handle={deposit}
        successButton='Make another deposit'
      />
    </div>
  );
}

export default Deposit;
