import PropTypes from "prop-types";

function UserGreet(props){
    return (
        props.isloggedin
            ? <h2 className="welcome-message">Welcome to React JS, {props.username}</h2>
            : <h2 className="login-message">Please login to continue</h2>
    );
}
UserGreet.propTypes = {
    isloggedin: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
}

export default UserGreet;