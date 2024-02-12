import {useState} from "react";
// import React from "react";
// import ReactDOM from "react-dom";
import './App.css'
import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
// import{BrowserRouter as Router, Route} from 'react-router-dom'


function App() {

  //LISTGROUP
  //listed items, when clicked on it will display item in console.
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];  

  const handleSelectItem = (item:string) => {
    console.log(item)
  }

  //ALERT pop up and dismiss
  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
        {/* listGroup component | returns array of items, with heading of city, and when selected, display in console. */}
        <ListGroup items={items} heading ={"Cities"} onSelectItem={handleSelectItem} />
      </div> 
      <div>
        {/* Alert options found in bootstrap */}
        {/* <Alert>Hello <span>World</span></Alert> */}
      </div>
      <div>
      {/* to pop up alert after clicking button */}
      {/* {alertVisible && <Alert >My alert</Alert>} */}
      {/* <Button color='primary' onClick={() => setAlertVisibility(true)}>Alert</Button> */}
      </div>
      <div>
          <Button color='primary' onClick={() => console.log('Clicked')}>Primary</Button>
          <Button color='secondary' onClick={() => console.log('Clicked')}>Secondary</Button>
      </div>
      <div>
        {/* <Router>
          <NavBar/>
          
            <Route path= '/' exact />
            
        </Router> */}
      
      </div>

      </>
  )
}

export default App;
