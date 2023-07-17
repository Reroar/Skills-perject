import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import './index.css'

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div >
			<div >
				<div className="addContainer" >
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="form-control"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='form-control'
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className='btn btn-primary'>
							Sign In
						</button>
						<div style={{display:'flex'}}>
						<p>New Here ?</p>
					<Link to="/signup">
						<button type="button" className='btn btn-primary'>
							Sign Up
						</button>
					</Link>
					</div>
					</form>
					
				</div>
				{/* <div className="addContainer">
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className='btn btn-primary'>
							Sing Up
						</button>
					</Link>
				</div> */}
			</div>
		</div>
	);
};

export default Login;
