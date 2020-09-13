import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import chat from'./chat.jpg';

class PagePrincipale extends Component {

    constructor(props) {
        super(props)
    }


    state = {
        like: 3
    }

    likes = () => {
        this.setState({
           
            like: this.state.like + 1
            
        })
    }


    render() {

        return (
            <div>
                 <div className="mef">
                     <img src={chat} alt="chat" />
                  </div >
                  <div className="like">
                  <button type="button" class="btn btn-danger btn-rounded" onClick={this.likes}>Like   {this.state.like}</button>
                  
                 </div>
            </div>
        )
    }
}

export default PagePrincipale;