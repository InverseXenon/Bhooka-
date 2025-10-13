import { useRouteError,Link } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-page">
            <div className="message"><h1>
                Oops!!
            </h1>
            
            <h1>{err.status} : {err.statusText}</h1>
            </div>
            
            <img src="https://img.freepik.com/premium-photo/bearded-fat-man-red-shirt-feeling-shocked-surprised-when-looking-smartphone_368093-8886.jpg" alt="SHOCKED!" />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="go-back-btn">
                <Link to="/"><button>Go back to Home</button></Link>
            </div>
            
        </div>
    )
}

export default Error;