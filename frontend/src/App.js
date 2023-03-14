import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, {useState} from 'react'
// import 'materialize-css/dist/css/materialize.min.css'
// import 'materialize-js/dist/js/materialize.min.js'
import Home from './components/Home'

function App() {

  //To use fonts from google, installed webfontloader
  // React.useEffect(() => {
  //   webfont.load({
  //     google: {
  //       families: ["Inria Sans", "Roboto"]
  //     }
  //   })
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router >
  );
}

export default App;