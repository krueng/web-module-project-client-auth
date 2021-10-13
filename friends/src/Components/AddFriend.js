import React from "react";
import axiosWithAuth from "../Utils/axiosWithAuth";
const initialState = {
    name: '',
    age: '',
    email: ''
}
class AddFriend extends React.Component {
    state = { initialState }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('state: ', this.state);

        axiosWithAuth()
            .post('/friends', this.state)
            .then(res => {
                this.setState(initialState)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button>Add a Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;