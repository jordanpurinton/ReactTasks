import React, { Component } from 'react';
import {Appbar, Container} from 'muicss/react';
import Tasks from './Components/Tasks';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Appbar>
            <Container>
              <table width="100%">
               <tbody>
                 <tr>
                   <td className="mui--appbar-height"><h3>ReactTasks</h3></td>
                 </tr>
               </tbody>
              </table>
            </Container>
          </Appbar>
          <br />
          <Container>
            <Tasks />
          </Container>
      </div>
    );
  }
}

export default App;
