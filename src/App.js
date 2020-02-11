import React from 'react';
import './App.css';
import Contacts from "./Components/Contacts";
import getAll from "./DataProvider/Person/getAll";

function App() {
    let contacts = getAll();

    return (
        <div>
            <Contacts contacts={contacts}/>
        </div>
    );
}

export default App;