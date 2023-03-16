import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillToolbar = () => {
    return (
        <div id="toolbar">
            <select className="ql-header" defaultValue="">
                <option value="1"></option>
                <option value="2"></option>
                <option value=""></option>
            </select>
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <button className="ql-strike"></button>
            <select className="ql-color"></select>
            <select className="ql-background"></select>
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-indent" value="-1"></button>
            <button className="ql-indent" value="+1"></button>
            <button className="ql-link"></button>
            <button className="ql-image"></button>
            <button className="ql-video"></button>
        </div>
    );
};

export default QuillToolbar;
