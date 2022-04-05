import { useEffect, useState } from "react";

export const LoginForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isInputValid, setIsInputValid] = useState(false);

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        if(username.length > 5 && password.length > 6) {
            setIsInputValid(true);
        }
    }, [username, password]);

    return (
        <div className="modal modal-overlay">
            <section className="modal-main">
                <label>Username:</label>
                <input onChange={usernameChangeHandler} value={username} />
                <label>Password:</label>
                <input onChange={passwordChangeHandler} value={password} />
                <button disabled={!isInputValid} onClick={props.onLogin}>Login</button>
            </section>
        </div>
    );
}