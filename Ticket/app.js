import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Agent from "./Agent";
import Tickets from "./Tickets";
import Contact from "./Contact"

function App() {
  return (
    <BrowserRouter>
      <div>
        <table style={{padding:"20px",border:"1px solid black",width:"700px"}}>
          <tr>
            <th> <Link to="/agent">Agent</Link></th>
             <th><Link to="/contact">Contact</Link></th>
             <th><Link to="/tickets">Tickets</Link></th>
           </tr>
        </table>

        <Switch>
          <Route path="/agent" component={Agent} />

          <Route path="/contact" component={Contact} />
            
        
          <Route path="/tickets" component={Tickets} />
      
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
