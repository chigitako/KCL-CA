import AppBar from '../components/AppBar';
import React from 'react';

const ChickenPage: React.FC = () => {
  return (
    <div>
        <AppBar title='鶏　chicken'/>
        <h1>Chicken Page</h1>
        <p>This is Chicken page</p>
    </div>
  );
};

export default ChickenPage;