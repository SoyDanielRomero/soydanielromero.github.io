import React from 'react';
import BankForm from '../components/bankform';
// import { UserContext } from '../context';

function Withdraw() {
  // const ctx = React.useContext(UserContext);

  function withdraw(name, email, password, loged, amount) {
    // ctx.users.filter((user) => {
    //   if (user.loged === false) {
    //     alert('Please Login first');
    //     return window.location.assign(
    //       '/assets/projects/coding/badbank/#/login/'
    //     );
    //   } else {
    //     let currentBalance = user.balance;
    //     return (user.balance = Number(currentBalance) - Number(amount));
    //   }
    // });
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
        hideBalance={true}
        handleButton='Withdraw'
        handle={withdraw}
        successButton='Make another withdraw'
      />
    </div>
  );
}

export default Withdraw;
