// // import React, { useState } from 'react';
// // import CKEditor from '@ckeditor/ckeditor5-react';
// // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// // import CKEditorUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// // import Image from '@ckeditor/ckeditor5-image/src/image';
// // import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// // import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// // import Fontawesome from 'ckeditor5-fontawesome-plugin';

// // function RichTextEditor() {
// //     const [content, setContent] = useState('');

// //     function handleEditorChange(event, editor) {
// //         const data = editor.getData();
// //         setContent(data);
// //     }

// //     return (
// //         <div>
// //             <h2>Rich Text Editor</h2>
// //             <CKEditor
// //                 editor={ClassicEditor}
// //                 data={content}
// //                 config={{
// //                     plugins: [
// //                         CKEditorUploadAdapter,
// //                         Image,
// //                         ImageToolbar,
// //                         ImageUpload,
// //                         Fontawesome,
// //                     ],
// //                     toolbar: [
// //                         'heading',
// //                         '|',
// //                         'bold',
// //                         'italic',
// //                         'underline',
// //                         '|',
// //                         'fontawesome',
// //                         'imageUpload',
// //                         '|',
// //                         'undo',
// //                         'redo',
// //                     ],
// //                     image: {
// //                         toolbar: [
// //                             'imageStyle:alignLeft',
// //                             'imageStyle:full',
// //                             'imageStyle:alignRight',
// //                             '|',
// //                             'imageResize',
// //                             '|',
// //                             'imageTextAlternative',
// //                         ],
// //                         styles: [
// //                             'full',
// //                             'alignLeft',
// //                             'alignRight'
// //                         ]
// //                     }
// //                 }}
// //                 onChange={handleEditorChange}
// //             />
// //         </div>
// //     );
// // }

// // export default RichTextEditor;


// // // By using CKEditor5-react, developers can take advantage of the benefits of both CKEditor 5 and React.js, creating a seamless editing experience for users while leveraging the power and flexibility of React.js for building dynamic user interfaces. This integration can be especially useful for web applications that require rich text editing capabilities, such as content management systems, blogging platforms, or e-commerce websites that allow users to write product descriptions or reviews.

// import React, { useState, useEffect } from "react";
// import "grapesjs/dist/css/grapes.min.css";
// import grapesjs from "grapesjs";

// const PageBuilder = () => {
//   const [editor, setEditor] = useState(null);

//   useEffect(() => {
//     const initEditor = () => {
//       const newEditor = grapesjs.init({
//         container: "#gjs",
//         height: "100%",
//         width: "auto",
//         storageManager: false,
//         plugins: ["gjs-preset-webpage"],
//         pluginsOpts: {
//           "gjs-preset-webpage": {
//             modalImportTitle: "Import",
//             modalImportLabel: "",
//             modalImportContent: "",
//             importViewerOptions: {},
//             textCleanCanvas: "Are you sure to clean the canvas?",
//           },
//         },
//         canvas: {
//           styles: [
//             "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
//           ],
//           scripts: [
//             "https://code.jquery.com/jquery-3.5.1.slim.min.js",
//             "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.4.4/umd/popper.min.js",
//             "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
//           ],
//         },
//       });
//       setEditor(newEditor);
//     };

//     if (!editor) {
//       initEditor();
//     }
//   }, [editor]);

//   return (<div id="gjs"></div>);
// };

// export default PageBuilder;

// import React from 'react'

// export default function PageBuilder() {
//   return (
//     <div>PageBuilder</div>
//   )
// }

import React, { useRef, useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import "grapesjs-preset-webpage"

// const PageBuilder = () => {
//   const editorRef = useRef(null);
//   const [htmlCode, setHtmlCode] = useState()
//   const [style, setStyle] = useState()
//   useEffect(() => {
//     const editor = grapesjs.init({
//       container: editorRef.current,
//       plugins: ["gjs-blocks-basic", "gjs-preset-webpage"],
//       pluginsOpts: {
//         "gjs-preset-webpage": {
//           navbarOpts: {
//             blocks: ["link-block"],
//             navbarCls: "navbar",
//             navbarWrapperCls: "navbar-wrapper",
//             style: {
//               height: "60px",
//               backgroundColor: "#333",
//             },
//           },
//           headerOpts: {
//             blocks: ["link-block"],
//             style: {
//               height: "500px",
//               backgroundImage: "url('/path/to/image.jpg')",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             },
//             content: "<h1>My Header</h1><p>Some text here</p>",
//           },
//           // ... other options go here
//         },
//       },
//       components: "<div>Hello World!</div>",
//       style: ".some-css-rule { color: red }",
//     });
//     setHtmlCode(editor.getHtml({ exportWrapper: false, clean: true }))
//     setStyle(editor.getStyle())
//   }, []);

//   const handleSave = () => {
//     // const regex = /(<\/?body[^>]*>|<body[^>]*>|<\/?html[^>]*>|<html[^>]*>)/gi;
//     console.log(style);

//     // console.log(htmlCode.replace(regex, ""));
//     console.log(htmlCode);
//   }
//   return (
//     <>
//       <button onClick={handleSave}>Save</button>
//       <div ref={editorRef} />
//     </>
//   );
// };

// export default PageBuilder;
import 'grapesjs-preset-webpage';
import { GrapesjsReact } from 'grapesjs-react';
export default function PageBuilder() {
  // const editorRef = useRef(null);
  // const [htmlCode, setHtmlCode] = useState()
  // const [style, setStyle] = useState()
  // const editor = grapesjs.init({
  //   container: '#gjs',
  //   fromElement: true,
  //   height: '300px',
  //   width: 'auto',
  //   storageManager: false,
  //   panels: { defaults: [] },
  //   blockManager: {
  //     appendTo: '#blocks',
  //     blocks: [
  //       {
  //         id: 'section',
  //         label: '<b>Section</b>',
  //         attributes: { class: 'gjs-block-section' },
  //         content: `<section>
  //           <h1>This is a simple title</h1>
  //           <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
  //         </section>`
  //       },
  //       {
  //         id: 'text',
  //         label: 'Text',
  //         content: '<div data-gjs-type="text">Insert your text here</div>'
  //       },
  //       {
  //         id: 'image',
  //         label: 'Image',
  //         select: true,
  //         content: { type: 'image' },
  //         activate: true
  //       }
  //     ]
  //   }
  // });
  // const editorRef = useRef(null);
  // const [editor, setEditor] = useState(null);

  // useEffect(() => {
  //   if (editorRef.current) {
  //     setEditor(editorRef.current.getInstance());
  //   }
  // }, [editorRef]);

  // const onInit = (editor) => {
  //   editor.Panels.addButton('options', {
  //     id: 'save',
  //     className: 'btn-save',
  //     label: 'Save',
  //     command: 'save-webpage',
  //     context: 'options',
  //   });

  //   editor.Commands.add('save-webpage', () => {
  //     const html = editor.getHtml();
  //     console.log('Webpage HTML:', html);
  //   });
  // };
  // const editorConfig = {
  //   container: '#grapesjs-react',

  //   plugins: ['gjs-preset-webpage', 'gjs-blocks-basic'],
  //   pluginsOpts: {
  //     'gjs-preset-webpage': {},
  //   },
  //   styleManager: {
  //     clearProperties: true,
  //   },
  // };



  return (
    <GrapesjsReact id='grapesjs-react' {...editorConfig} />
  )
}
    // <div>
    //   <div class="panel__top">
    //     <div class="panel__basic-actions"></div>
    //   </div>
    //   <div id="gjs" ref={editorRef} >
    //     <h1>Hello World Component!</h1>
    //   </div>
    //   <div id="blocks"></div>
    // </div>