//component has hasChange event listener form hashRouter in root.jsx

import React from "react";
import Splashpage from './splash/splashpage.jsx'



const App = () => (
    <div >
        <Splashpage />
    </div>
)

//hashRouter provides an event listener to check to see if path changes/matches and if so, it renders that container component.
export default App