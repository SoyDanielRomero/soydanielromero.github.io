import React from 'react';
import Card from '../components/card';
import { UserContext } from '../context';
import { Table, Container } from 'react-bootstrap';

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <Card
        bgcolor='dark'
        txtcolor='white'
        header='Fanky All Data Page'
        title='Review all users data'
        text=''
        body={
          <Container className='mt-3'>
            <Table
              className='table table-condensed'
              striped
              bordered
              hover
              size='lg'
              variant='dark'
              responsive>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Password</th>
                  <th scope='col'>Balance</th>
                </tr>
              </thead>
              <tbody>
                {ctx.users.map((item, key) => (
                  <tr key={key}>
                    <th scope='row'>{key + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.balance}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        }
      />
    </>
  );
}

export default AllData;
