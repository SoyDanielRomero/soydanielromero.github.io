import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { UserContext, useBankContext } from '../context';
import img from '../bank_logo.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function NavBar() {
  const ctx = React.useContext(UserContext);
  const { logout, users } = useBankContext();
  let history = useHistory();

  const [currentUser, setCurrentUser] = React.useState();
  React.useEffect(() => {
    let user = ctx.users.filter((user) => user.loged === true);
    let index;
    if (user.length > 0) {
      // eslint-disable-next-line no-unused-vars
      index = ctx.users.indexOf(user[0]);
      setCurrentUser(user[0]);
    }
  }, [ctx.users, users]);

  const logOut = () => {
    let user = ctx.users.filter((user) => user.loged === true);
    if (user[0]) {
      logout(user[0]);
      setCurrentUser(null);
      // BUG
      history.push('/login/');
    } else {
      history.push('/login/');
    }
  };

  function renderTooltip() {
    return <Tooltip>Tooltip for the register button</Tooltip>;
  }
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip id={`tooltip-logo`}>
                <strong>Fanky's</strong> Brand.
              </Tooltip>
            }>
            <Navbar.Brand href='#/'>
              <img
                alt=''
                src={img}
                width='30'
                height='30'
                className='d-inline-block align-top'
              />{' '}
              Fanky
            </Navbar.Brand>
          </OverlayTrigger>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav defaultActiveKey='#/' fill variant='tabs'>
              <Nav.Link href='#/'>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id={`tooltip-home`}>
                      <strong>Fanky's</strong> welcome page.
                    </Tooltip>
                  }>
                  <button className='btn btn-primary'>Home</button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href='#/CreateAccount/'>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id={`tooltip-createAcount`}>
                      Register on <strong>Fanky's</strong>, your prefered
                      insecure bank app.
                    </Tooltip>
                  }>
                  <button className='btn btn-primary'>Create Account</button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href='#/deposit'>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id={`tooltip-deposit`}>
                      <strong>Fanky's</strong> Deposit's page.
                    </Tooltip>
                  }>
                  <button className='btn btn-primary'>Deposit</button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href='#/withdraw'>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id={`tooltip-withdraw`}>
                      <strong>Fanky's</strong> Withdraw's page.
                    </Tooltip>
                  }>
                  <button className='btn btn-primary'>Withdraw</button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href='#/balance/'>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id={`tooltip-balance`}>
                      <strong>Fanky's</strong> Balance page.
                    </Tooltip>
                  }>
                  <button className='btn btn-primary'>Balance</button>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link href='#/alldata/'>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id={`tooltip-allData`}>
                      <strong>Fanky's</strong> Storaged Users Data.
                    </Tooltip>
                  }>
                  <button className='btn btn-primary'>All Data</button>
                </OverlayTrigger>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip id={`tooltip-logIn`}>
                <strong>Fanky's</strong> Log In page.
              </Tooltip>
            }>
            <button className='btn btn-dark' onClick={logOut}>
              {currentUser ? 'Log out' : 'Log In'}
            </button>
          </OverlayTrigger>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
