//home page that all users can see
import { render } from "react-dom"
import {Link} from "react-router-dom"
import React from 'react'
import Footer from './footer/footer.jsx'


class Splashpage extends React.Component {


    render() {
        return (
            <div className="splashpage" >
                <div className="splashpage-top">

                <h2 className="splash-title"> 
                    <hr className="accent"></hr>
                        <span>Healthier Lives <br />With every Walk</span>
                        <hr className="accent"></hr>
                </h2>
                <p className="splash-subtitle"> 
                <span>
                    A new fitness community of pet parents with the goal
                    of leading healthier,happier lives for their pets.
                    </span>
                </p>
                <div className="splash-session-links">
                    <div className="signup-button-container">
                        <Link className="signup-button"to="/signup">
                            <span>
                                Sign up!
                            </span>
                        </Link>
                    </div>
                    <div className="login-button-container"> 
                        <p className="login-button-question">
                            <span>Already Signed Up?</span>
                        </p>
                        <Link className="login-button" to="/login">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
                </div>
        )
    }


}

export default Splashpage