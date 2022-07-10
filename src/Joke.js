
import React, {Component} from 'react';


export default class Joke extends Component {
    state = {};

    componentDidMount() {
        this.dadJokes()
    }

    dadJokes = () => {
        fetch('/jokes/one')
            .then(response => response.json())
            .then(message => {
                this.setState({message: message[0]});
            });
    };

    render() {
        return (
            <h3 className="">{this.state.message}</h3>
    );
    }
}
