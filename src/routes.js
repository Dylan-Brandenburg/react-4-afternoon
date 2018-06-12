import React from "react"; // import react
import { Switch, Route } from "react-router-dom"; // import switch/route from 'react-router-com'
import Home from "./components/Home/Home"; // Import home
import About from "./components/About/About"; // import About
import ClassList from "./components/ClassList/ClassList" // import ClassList
import Student from "./components/Student/Student" // import Student


// export default(blalbalalalalalala)
export default (
  <Switch>                                  //Switch Statement and routes inside 
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={ClassList} path="/classlist/:class" />
    <Route component={Student} path="/student/:id" />
  </Switch>
);
