import { useForm } from "react-hook-form";

const Login = () =>{
    const {register, handleSubmit,formState:{errors}} = useForm();
    const onSubmit = (data)=>console.log("Form data:",data);

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label > Name: </label>
                    <input {...register("name",{required:true})}
                    placeholder="Enter Your Name" />
                    <br />
                    <label >Email: </label>
                    <input {...register("email",{required:"true"})}
                    placeholder="Enter your mail id" />
                    <br />
                    <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Login;