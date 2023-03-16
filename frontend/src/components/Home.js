import React from 'react'
import Education from './Education'
import Achievements from './Achievements'
import './Home.css'
import Toolbar from './Toolbar'



const Home = () => {
    return (
        <div>
            <div style={{ boxShadow: "0px 0px 10px #888888", padding: "20px", height: "600px", overflow: 'scroll' }}>
                {/* <Toolbar /> */}
                
                    <Education />
                    <Achievements />
                
            </div>
        </div>
        // </div>
        // <div className='main'>
        //     <div className='resumeContainer'>
        //         <div className='resumeForm'>

        //         </div>

        //     </div>
        // </div>
    )
}

export default Home