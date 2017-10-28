import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { HomeComponent,HomeComponentOne }  from './home/home.component';
import { ContactUsComponent } from './contact/contact.component';
import { AboutUsComponent } from './about/about.component';
import { ThemeComponent }  from './theme/theme.component';

class App extends React.Component {
    constructor(){
    super();
    this.testvalue = "sp";
  }
  passParams(name){
    this.name = name;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={() => this.passParams("poorni")}>Welcome to React</h2>
        </div>
        <BrowserRouter>
        <div> 
          <nav>
            <Link to="/home">Home</Link>&nbsp;&nbsp;
            <Link to="/about">AboutUs</Link>&nbsp;&nbsp;
            <Link to={`/contact/${this.testvalue}`} >ContactUs</Link>&nbsp;&nbsp;
            <Link to="/theme">Themes</Link>&nbsp;&nbsp;
          </nav>
          <Route exact path="/" render={() => <h1>Click on above links and I will disapear</h1>}></Route>
          <Route path="/home" render={() => <div><HomeComponent /> <HomeComponentOne /></div>}></Route>
          <Route path="/about" component={AboutUsComponent}></Route>
          <Route path="/contact/:contactName" component={ContactUsComponent}></Route>
          <Route path="/theme" component={ThemeComponent}></Route>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
