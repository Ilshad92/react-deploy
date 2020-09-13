import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Navigation extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        return (
            <div>
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand">StoryPage</a>
                     <form class="form-inline">
                         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </nav>
            </div>
        )
    }
}

export default Navigation;
