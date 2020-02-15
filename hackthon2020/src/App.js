import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import pageLiving from './pageLiving';
import pageExercising from './pageExercising';
import pageStudy from './pageStudy';



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact={true} path="/dashboard" component={Dashboard} />
        <Route exact={true} path="/study" component={pageStudy} />
        <Route exact={true} path="/living" component={pageLiving} />
        <Route exact={true} path="/exercising" component={pageExercising} />

        {/* <Dashboard /> */}
      </div>
    </Router>
  );
}

export default App;