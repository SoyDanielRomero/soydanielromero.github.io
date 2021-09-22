import React from 'react';
import Card from '../components/card';

function Home() {
  return (
    <Card
      txtcolor='black'
      header='Welcome to Fanky'
      title='A fake bank app'
      text='Send me an email if you liked this app'
      body={<p> Hola!</p>}
    />
  );
}

export default Home;
