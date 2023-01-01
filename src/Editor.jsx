import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import {darcula} from '@uiw/codemirror-theme-darcula'
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {
  const [open,setOpen]=useState(true);
    const {
      language,
      displayName,
      value,
      onChange
    }=props
  const handleChange=(value)=>{
    console.log(value);
    onChange(value);
  }
  

  return (
    <div className={`panel-box ${open ? "" : 'collapsed'}`}>
        <div className="panel-header">
            <h5>{displayName}</h5>
            <button className='collapse-btn' onClick={()=>{
              setOpen(!open);
            }}><FontAwesomeIcon icon={open?faCompressAlt:faExpandAlt}/></button>
        </div>
      <CodeMirror
      className='code-mirror-wrapper'
      value={value}
      height="200px"
      theme={darcula}
      extensions={language()}
      onChange={handleChange}
    />
    </div>
  )
}

export default Editor
