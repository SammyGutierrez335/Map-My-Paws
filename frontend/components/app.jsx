//component has hasChange event listener form hashRouter in root.jsx

import React from "react";
import Splashpage from './splash/splashpage.jsx'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'


const App = () => (
    <div className="main">
        <Header />
        <Splashpage />
        <Footer />
    </div>
)

//hashRouter provides an event listener to check to see if path changes/matches and if so, it renders that container component.
export default App