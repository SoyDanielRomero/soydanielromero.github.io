import React from 'react';
import Card from '../components/card';
import img from '../bank_logo.png';
import { Image } from 'react-bootstrap';

function Home() {
  return (
    <Card
      txtcolor='black'
      header='Welcome to Fanky'
      title='A fake bank app'
      text='Send me an email if you liked this app'
      body={
        <>
          <br />
          <Image
            alt="Fanky's logo"
            src={img}
            width='300'
            height='300'
            className='ms-4'
          />
          <br />
          <p className='text-center'>
            Please create an account in order to test the app
          </p>
        </>
      }
    />
  );
}

export default Home;
