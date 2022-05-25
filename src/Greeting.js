import {Welcome, Welcome1} from './App'

function UserGreeting(props){
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
    return <div> <Welcome name="hdsvfdf" />  <Welcome1 name="12324" /> </div> 
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>
    }
    return<GuestGreeting/>
}

export default Greeting;
/*ReactDOM.render(
    <Greeting isLoggedIn={false}/>
    document.getElementById('root')
); */