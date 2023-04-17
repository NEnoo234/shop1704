import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import * as Components from "./Components";
import { Link } from "react-router-dom";
import { login } from "../../Store/Reducers/Auth";
import { useNavigate } from "react-router-dom";
import userService from "./../../Service/userService";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signIn, toggle] = React.useState(true);
  const [message, setMessage] = useState("");

  const usernameRef = useRef();
  const passwordRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    userService.login(username, password).then((res) => {
      if (res.errorCode === 0) {
        setMessage("");
        dispatch(
          login({
            token: res.data.accessToken,
            userInfo: res.data,
          })
        );
        // save user info
        navigate("/Main");
      } else {
        setMessage(res.message);
      }
    });
  };

  useEffect(() => {
    if (usernameRef && usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <>
      <Components.Container
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          height: "50vh",
          width: "50%",
          marginTop: "200px",
        }}
      >
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={formSubmitHandler}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="text"
              placeholder="Email"
              ref={usernameRef}
              id="txtUsername"
            />
            <Components.Input
              id="txtPassword"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button type="submit">Sigin In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
              <Link to="../Main">
                <span style={{ color: "black" }}>Back Home</span>
              </Link>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
              <Link to="../Main">
                <span style={{ color: "black" }}>Back Home</span>
              </Link>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
};

export default Login;
