import React from 'react'
import Education from './Education'
import './Home.css'

const Home = () => {
    return (
        <div>
                <div style={{ boxShadow: "0px 0px 10px #888888", padding: "20px", height: "600px", overflow: 'scroll'}}>
                    <Education />
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