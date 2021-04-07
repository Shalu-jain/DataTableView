import Home from './userhome/home';
import React, { Fragment, PureComponent } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import DetailPage from './userhome/detailPage';

class App extends PureComponent {
  render(){
    return (
        <Fragment>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail-page" component={DetailPage}/>  
        </Fragment>
          );
}
}
export default App;
