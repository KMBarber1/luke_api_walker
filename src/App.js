import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,  
  // Link,
} from "react-router-dom";
import Form from "./components/Form";
import People from "./views/People";
import Planet from "./views/Planet";
import Species from "./views/Species";
import Starship from "./views/Starship";
import Vehicle from "./views/Vehicle";
    
function App() {

  return (

    <div className="App">

      <BrowserRouter>

      <div>
        <Form />
      </div>

      <Switch>

        <Route path="/people/:id">
          <People />
        </Route>
        <Route path="/planets/:id">
          <Planet />
        </Route>
        <Route path="/species/:id">
          <Species />
        </Route>
        <Route path="/starships/:id">
          <Starship />
        </Route>
        <Route path="/vehicles/:id">
          <Vehicle />
        </Route>
            
      </Switch>
      
      </BrowserRouter>

    </div>

  );

}
    
export default App;


