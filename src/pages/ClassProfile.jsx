import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    render(){
        return(
            <div>
                <h1>This is a Class based Component!</h1>
                <h1>Hello This is: {this.props.name}</h1>
                <h2>Count: {this.state.count}</h2>
            </div>
            
        )
    }
}

export default Profile;