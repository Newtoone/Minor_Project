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


import React from "react";
import Editor from "./components/Editor";

const HTML = ({ value, onChange }) => (
  <div className="h-screen">
    <Editor language="HTML" value={value} onChange={onChange} />
  </div>
);

export default HTML;
