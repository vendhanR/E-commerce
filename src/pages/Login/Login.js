import './Login.css'

import {useNavigate} from 'react-router-dom'
function Login() {

    const navigate = useNavigate()
    function loginHandel() {
        navigate('/ProductCard')
    }
    return(
        <div className="container">
            <h3>Please Login</h3>
            <form onSubmit={loginHandel} action="" className="login-fome">
                <div className="mb-3">
                    <label className="form-lable" htmlFor=""> Email</label>
                    <input type="email" />
                </div>

                <div className="mb">
                    <label className="form-lable" htmlFor="">Password</label>
                    <input type="password" />
                </div>

                <button type='submit' className="btn btn-primary float-end">Login</button>
            </form>
        </div>
    );
}


export default Login