import React from 'react';
import './App.css';
import PersonItem from './Components/PersonItem';
import avatar from './datas/avatar';
import name from './datas/name';
import online from './datas/online';

function App() {
  return (
      <div className="person-item">
          <PersonItem avatar={avatar}
                      name={name}
                      online={online}
          />
      </div>
  );
}

export default App;