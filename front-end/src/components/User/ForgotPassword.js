import React, { Fragment, useState, useEffect } from "react";
import "./ForgotPassword.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, forgotPassword } from "../../actions/userAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <h2 className="title">Forgot Password</h2>

                <div className="input-field">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input type="submit" value="Send" className="btn-submit" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ForgotPassword;
