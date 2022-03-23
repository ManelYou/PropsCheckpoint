import React  from 'react';
import "./Profile.css";
import PropTypes from "prop-types";

const Profile = (props) =>{

    return(<div>
    <h1>FullName: {props.fullName}</h1>
    <h1>Bio: {props.bio}</h1>
    <h1>Profession: {props.profession}</h1>
    <h1>{props.children}</h1> 
    <button value={props.fullName} onClick={props.onChildClick}>{props.data}</button>
</div>)
}

export default Profile;

//Set default props
Profile.defaultProps = {
    fullName: "John",
    bio:"description",
    profession: "Engineer"
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}
    