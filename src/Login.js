import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import PagePrincipale from './PagePrincipale'


class Login extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        login: 0
    }

    Logged=() => {
        this.setState({
            login:1
        })
    }
    
 
    
    Accueil=() => {
        if (this.state.login === 0) {
            return (
                
                    <div>
                    <div class="sidenav">
                         <div class="login-main-text">
                          <h2>StoryPage</h2> 
                           <br/>
                           <p>Login or register from here to access.</p>
                        </div>
                   </div>
                   <div class="main">
                          <div class="col-md-6 col-sm-12">
                               <div class="login-form">
                                    <form>
                                       <div class="form-group">
                                           <label>User Name</label>
                                           <input type="text" class="form-control" placeholder="User Name"></input>
                                      </div>
                                          <div class="form-group">
                                           <label>Password</label>
                                           <input type="password" class="form-control" placeholder="Password"></input>
                                          </div>
                                      <button type="submit" class="btn btn-black" onClick={this.Logged}>Login</button>
                                      <button type="submit" class="btn btn-secondary">Register</button>
                                    </form>
                              </div>
                         </div>
                    </div>
                  </div>
            )

        }else{
            if (this.state.login === 1) {
                return (
                  (<PagePrincipale/>))
                }
        }
    }

    render() {

        return(
            <div>
            {this.Accueil()}
            </div>

        
        
        )
    }
}

export default Login;