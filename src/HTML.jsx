// import React, {useState} from 'react'
// import Editor from './components/Editor';

// const HTML = (props) => {
//     const [html, setHtml] = useState('');
//     function handlechange(e){
//         const value = e.target.value;
//         setHtml(value);
//         props.onChange(value);
//     }
//    return (
//     <div>
//         <div className='h-screen'>
//             <Editor language="HTML" value={html} onChange={handlechange} />
//         </div>
//     </div>
//   )
// }

// export default HTML
import React, { useState } from "react";
import Editor from "./components/Editor";

const HTML = ({ value, onChange }) => {
  const [html, setHtml] = useState(value);

  const handleChange = (newValue) => {
    setHtml(newValue);
    onChange(newValue); // Pass changes to the parent
  };

  return <Editor language="HTML" value={html} onChange={handleChange} />;
};

export default HTML;