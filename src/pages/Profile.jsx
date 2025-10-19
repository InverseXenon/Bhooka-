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
            <>
                <h1>Hello I am {this.props.name}</h1>
                {++this.state.count}
                <h2>Count: {this.state.count}</h2>
            </>
        )
    }
}

export default Profile;