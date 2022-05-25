import React from 'react';
import Greeting from "./Greeting";


function LoginButton(props){
    return(
        <button onClick={props.onclick}>
            Login
        </button>
    );
}
function LogoutButton(props){
    return(
        <button conClick={props.onClick}>
            Logout
        </button>
    );
}
// stateful component voi ten goi LoginControl
class LoginControl extends React.Component{
    constructor(props){
super(props);
this.handleLoginClick = this.handleLoginClick.bind(this);
this.handleLogoutClick = this.handleLogoutClick.bind(this);
this.state = {isLoggedIn:false};
}
handleLoginClick(){
    this.setState({isLoggedIn:true});
}
handleLogoutClick(){
    this.setState({isLoggedIn: false});
}
render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick}/>
    }else{
        button = <LogoutButton onClick={this.handleLoginClick}/>
    }
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    );
}

}
export default LoginControl;
