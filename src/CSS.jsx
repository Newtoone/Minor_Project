import React, {useState} from 'react'
import Editor from './components/Editor';

const CSS = ({value, onChange}) => {
    // const [css, setCss] = useState('');
    // function handlechange(e){
    //     const value = e.target.value;
    //     setCss(value);
    //     props.onChange(value);
    // }
  return (
      <div className='flex flex-col h-screen'>
          <Editor language="CSS" value={value} onChange={onChange} />
      </div>
  )
}

export default CSS
