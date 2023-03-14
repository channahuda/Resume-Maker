import React, { useState } from 'react';
import './Education.css'
import './Home.css'
import TextArea from './TextArea';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Education = () => {
    const [text, setText] = useState('Education');

    const handleChange = (value) => {
        setText(value);
    }
    return (
        <div>
            <TextArea
                text={text}
                onChange={handleChange} />
            {/* <div className='resumeContainer'> */}
            {/* <ReactQuill value={text} onChange={handleChange} /> */}
            {/* <textarea
                    className="input"
                    type="text"
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                /> */}
            {/* </div> */}
        </div>
    );
};

export default Education;
