import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  resetPassword,
} from "../../actions/userAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";

const ResetPassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const { token } = useParams();
  
    const { error, success, loading } = useSelector((state) => state.forgotPassword);
  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const resetPasswordSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();

      myForm.set("password", password);
      myForm.set("confirmPassword", confirmPassword);
      dispatch(resetPassword(token, myForm));
    };
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (success) {
        alert.success("Password Updated Successfully!");
        navigate("/login");
      }
    }, [dispatch, error, alert, navigate, success]);
    return (
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title="Reset Password" />
            <div className="resetPasswordContainer">
              <div className="resetPasswordBox">
                <form
                  className="resetPasswordForm"
                  onSubmit={resetPasswordSubmit}
                >
                  <h2 className="title">Reset Password</h2>
  
                  <div className="input-field">
                  <LockOpenIcon />
                    <input
                      type="password"
                      placeholder="New Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
  
                  <div className="input-field">
                  <LockIcon />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
  
                  <input type="submit" value="Update" className="btn-submit" />
                </form>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
}

export default ResetPassword
