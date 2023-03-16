import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Draggable from 'react-draggable'


const TextArea = ({ text, handleChange }) => {

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ]
    }

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video', 'color', 'background'
    ]

    const [dragState, setDragState] = useState({
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: 0, y: 0
        }
    });

    const handleDrag = (e, ui) => {
        const { x, y } = dragState.deltaPosition;
        setDragState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    const onStart = () => {
        setDragState({ activeDrags: ++dragState.activeDrags });
    };

    const onStop = () => {
        setDragState({ activeDrags: --dragState.activeDrags });
    };

    const dragHandlers = { onStart, onStop };


    return (
        <div style={{ position: 'relative' }}>
            <Draggable {...handleDrag}>
                <div style={{ padding: '5px', background: '#eee', cursor: 'move' }}>
                    <ReactQuill
                        value={text}
                        onChange={handleChange}
                        modules={modules}
                        formats={formats}
                        style={{ height: 'auto', width: '500px', padding: '10px', resize: 'both', overflow: 'auto' }}
                    />
                </div>
            </Draggable>
            <div style={{ position: 'absolute', left: dragState.deltaPosition.x, top: dragState.deltaPosition.y }}>


            </div>
        </div>

    );
};

export default TextArea
