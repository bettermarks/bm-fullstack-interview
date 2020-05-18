import React from 'react';
import {NavBar} from './NavBar';
import {NavItem} from './NavItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
        <NavBar>
            <NavItem
                name='Reports'
                icon={
                    <FontAwesomeIcon icon={faChartBar} size='2x' color='white'/>
                }
            />
        </NavBar>
      <div>
        <p>Best of luck for the interview :)</p>
      </div>
    </div>
  );
}

export default App;
