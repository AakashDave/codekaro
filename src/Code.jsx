import React, { useState } from 'react';
import Editor from './Editor';
import { javascript } from '@codemirror/lang-javascript'
import {html} from '@codemirror/lang-html'
import {css} from '@codemirror/lang-css'
import { useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { NavLink } from 'react-router-dom';


const Code = () => {

  const [htmlData,setHtml]=useLocalStorage('hmtl','');
  const [cssData,setCss]=useLocalStorage('css','');
  const [jsData,setJs]=useLocalStorage('js','');
  const [srcDocs,setSrcDocs]=useState();

  useEffect(()=>{
      const timeout=setTimeout(() => {
        setSrcDocs(
          `
            <html>
              <body>${htmlData}</body>
              <style> * {margin:0;padding:0}${cssData}</style>
              <script>${jsData}</script>
            </html>
          `
        )
      }, 500);

      return ()=>clearTimeout(timeout);
  },[htmlData,cssData,jsData])


  return (
    <>
      <div className="codeBox">
        <div className='codeHead'>
          <h1>CodeKaro</h1>
          <NavLink to={"/"} ><p>Home</p></NavLink>
          
        </div>
        <div className='panel'>
          <Editor language={html} displayName='HTML' value={htmlData} onChange={setHtml}/>
          <Editor language={css} displayName='CSS' value={cssData} onChange={setCss}/>
          <Editor language={javascript} displayName='JAVASCRIPT' value={jsData} onChange={setJs}/>
        </div>
        <div className="webview">
          <iframe srcDoc={srcDocs} title="output" width="100%" height="100%"/>
        </div>
      </div>
      
    </>
  )
}

export default Code

