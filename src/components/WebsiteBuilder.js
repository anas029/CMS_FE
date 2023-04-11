import React, { useState, useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function WebsiteBuilder() {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: editorRef.current,
      height: '100%',
      components: pageData,
      storageManager: {
        id: 'gjs-',
        type: 'remote',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
        store: {
          type: 'remote',
          url: '/api/websites',
          headers: {},
          params: {},
          data: {},
          method: 'POST',
        },
      },
    });
    setEditor(editor);
  }, []);

  const handleSave = async () => {
    const data = editor.getHtml();
    try {
      const response = await axios.post('/api/websites', {
        title: 'My Website',
        url: 'https://mywebsite.com',
        content: data,
      });
      const savedData = response.data;
      console.log(savedData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container" >
      <div className="row" style={{ height: '1000px' }}>
        <div className="col-12">
          <div ref={editorRef} ></div>
          <button className="btn btn-primary mt-3" onClick={handleSave}>
            Save Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebsiteBuilder;