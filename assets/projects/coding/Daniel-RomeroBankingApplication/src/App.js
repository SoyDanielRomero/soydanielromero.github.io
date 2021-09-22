import NavBar from './components/navbar';
import Home from './pages/home';
import AllData from './pages/alldata';
import CreateAccount from './pages/createaccount';
import Withdraw from './pages/withdraw';
import Deposit from './pages/deposit';
import Login from './components/login';
import Balance from './components/balance';
import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { UserContext } from './context';

function App() {
  return (
    <HashRouter>
      <div className='d-flex justify-content-around pl-5 container'>
        <NavBar />
      </div>
      <div className='d-flex justify-content-center mt-5 container'>
        <UserContext.Provider
          value={{
            users: [
              {
                name: 'Daniel',
                email: 'daniromerro@gmail.com',
                password: 'secret',
                balance: 100,
                loged: false,
              },
            ],
          }}>
          <Route path='/' exact component={Home} />
          <Route path='/createaccount/' exact component={CreateAccount} />
          <Route path='/login/' exact component={Login} />
          <Route path='/deposit/' exact component={Deposit} />
          <Route path='/withdraw/' exact component={Withdraw} />
          <Route path='/balance/' exact component={Balance} />
          <Route path='/alldata/' exact component={AllData} />
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
