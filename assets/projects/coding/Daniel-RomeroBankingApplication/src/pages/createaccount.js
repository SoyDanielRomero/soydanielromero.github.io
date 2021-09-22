import React from 'react';
import BankForm from '../components/bankform';
import { UserContext } from '../context';

function CreateAccount() {
  const ctx = React.useContext(UserContext);
  function createaccount(name, email, password) {
    ctx.users.push({ name, email, password, balance: 100, loged: false });
  }
  return (
    <div className='container d-flex justify-content-center'>
      <BankForm
        bgcolor='primary'
        header='Create Account'
        hideName={false}
        hideEmail={false}
        hidePassword={false}
        hideAmount={true}
        hideBalance={true}
        handleButton='Create New Account'
        handle={createaccount}
        successButton='Add Another Account'
      />
    </div>
  );
}

export default CreateAccount;
