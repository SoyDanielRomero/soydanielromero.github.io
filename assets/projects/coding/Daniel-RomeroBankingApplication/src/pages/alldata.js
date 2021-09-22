import React from 'react';
import { UserContext } from '../context';

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <div className='container d-flex justify-content-center'>
      <h1>All Data</h1>
      <br />
      {JSON.stringify(ctx)}
    </div>
  );
}

export default AllData;
