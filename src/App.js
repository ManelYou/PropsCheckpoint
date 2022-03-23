import './App.css';
import React  from 'react';
import Profile from "./profile/Profile";


  

function App() {
  function handleName(evt){
    alert("I am " + evt.target.value)
}
function handleChange(evt) {
  const value = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value
  });
}
const [state, setState] = React.useState({
  fullName: "",
  bio: 5,
  profession:""
})
  return (
    <div>
      <form>
        <label>First name<input type="text" name="fullName" value={state.fullName} onChange={handleChange}/></label>
        <label>Bio<input type="text" name="bio" value={state.bio} onChange={handleChange}/></label>
        <label> Profession<input type="text" name="profession" value={state.profession} onChange={handleChange}/></label>
      </form>

    <Profile fullName={state.fullName} bio={state.bio}  data="Click here" onChildClick={handleName}>
      <img src="./IT.jpg" />
    </Profile> 
    </div>
  );
}

export default App ;
