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
import { ContextProvider } from './context';

function App() {
  return (
    <HashRouter>
      <div className='d-flex justify-content-around flex-column pl-5 container'>
        <ContextProvider>
          <NavBar />
          <br />
          <div
            className='container-fluid d-flex justify-content-center'
            style={{ padding: '20px' }}>
            <Route path='/' exact component={Home} />
            <Route path='/CreateAccount/' component={CreateAccount} />
            <Route path='/login/' component={Login} />
            <Route path='/deposit/' component={Deposit} />
            <Route path='/withdraw/' component={Withdraw} />
            <Route path='/balance/' component={Balance} />
            <Route path='/alldata/' component={AllData} />
          </div>
        </ContextProvider>
      </div>
    </HashRouter>
  );
}

export default App;
