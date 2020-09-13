import React, {Component} from 'react';
import './index.css';
import Navigation from './Navigation';
import Login from './Login';

class App extends React.Component<{},any> {

    constructor(props: number) {
        super(props);
    
    }


    render () {


        return(
       
           
        <div >
            
            <Navigation/>  
            <Login/>         
        </div>

        
        );
}
}
 
export default App;