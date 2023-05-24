import React, { useState } from "react";
import "../../Component/AuthComponent/style.css";
import * as Yup from "yup";
import { LoginForm } from "../../services/LoginApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    };
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };
    const submitForm = async (event) => {
        event.preventDefault();
        await Yup.object()
            .shape({
                email: Yup.string()
                    .email("Invalid email")
                    .required("Email is required"),
                password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required("Password is required"),
            })
            .validate({ email, password });
        const response = await LoginForm(email, password).catch((err) => {
            return err.response;
        });
        if (response) {
            if (response.data.code == 200 && response.data.status) {
                localStorage.setItem("token", response.data.result);
                navigate("/dashboard");
            } else {
                console.log("else block working");
                toast.error(response.data.message);
            }
        }
    };
    return (
        <div className="limiter">
            <ToastContainer autoClose={1000} />
            <div id="preloader" ng-show="dataLoading">
                <div id="status">&nbsp;</div>
            </div>
            <div className="container-login100">
                {/* <div className="col-md-7 com-xs-7 reflection--name">
                    <div className="log-animation">
                        <img
                            src="styles/images/reflection-conceft.gif"
                            alt=""
                            className=""
                        />
                    </div>
                    <div className="login-logo">
                        <img
                            src="styles/images/logo-login.png"
                            alt=""
                            className=""
                        />
                    </div>
                </div> */}
                <div className="col-md-5 com-xs-5 login-form reflection--form">
                    <form
                        className="create_user_form login100-form validate-form"
                        autoComplete="off"
                        onSubmit={submitForm}
                    >
                        <div className="form-group">
                            <label className="ff-gotham-bold t-t-upper f-s-16 c-white">
                                User name
                            </label>
                            <input
                                autoComplete="off"
                                placeholder="Enter your user name"
                                className="form-control ff-geosans-light f-s-20 c-whit "
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-30">
                            <label className="ff-gotham-bold t-t-upper f-s-16 c-black">
                                Password
                            </label>
                            <div className="form-group mb- display-flex">
                                <input
                                    className="form-control ff-geosans-light f-s-20 c-white  "
                                    type="password"
                                    name="password"
                                    id="pwd"
                                    placeholder="Password"
                                    autoComplete="off"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col-sm-6 p-0">
                                <div className="check_box_section clearfix p-t-5">
                                    <label className="control control--checkbox pull-left">
                                        <input
                                            type="checkbox"
                                            name="rememberme"
                                        />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <label className="pull-left c-white m-b-0 m-t-1">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-6 p-0">
                                <a
                                    href="#"
                                    className="forgot_link pull-right ff-gotham-bold f-s-16 c-white mt-0"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <div className="form-group mt-40 clearfix">
                            <div className="col-sm-12 p-0">
                                <div className="row m-0">
                                    <div className="col-sm-4 p-0">
                                        <button
                                            className="btn hvr-float-shadow ff-gotham-bold -s-16 t-t-upper co-white d-grey pl-30 pr-30 pt-10 pb-10"
                                            type="submit"
                                        >
                                            Login{" "}
                                            <img
                                                className="login-arrow"
                                                src="styles/images/login-arrow.png"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                    <div className="col-sm-2 p-0 text-center">
                                        <span className="or_opts p-l-15">
                                            -or-
                                        </span>
                                    </div>
                                    <div className="col-sm-6 p-0">
                                        <button
                                            className="login_offc365 pull-right"
                                            id="callGraphButton"
                                        >
                                            Login with{""}
                                            <img
                                                src="styles/images/office365_logo.png"
                                                alt="Office365"
                                                width="80px"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
