import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import BodyComp from './BodyComp.jsx';

const AppRoot = () => {
  return (
    <div className='container'>
      <Header />
      <BodyComp />
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container); // Use ReactDOM.createRoot instead of createRoot
root.render(<AppRoot />);

export default AppRoot;
