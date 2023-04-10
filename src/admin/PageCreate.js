import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import parse from 'html-react-parser';

export default function PageCreate() {
    const [content, setContent] = useState()
    const handleChange = (event, editor) => {
        const data = editor.getData();
        setContent(data);
    }




    // const configurations = [
    //     {
    //         name: 'Default',
    //         config: {
    //             // Default configuration options
    //         }
    //     },
    //     {
    //         name: 'Custom',
    //         config: {
    //             // Custom configuration options
    //             contentCss: '/path/to/custom.css'
    //         }
    //     },
    //     // Add more configurations as needed
    // ];

    // function CKEditorComponent() {
    //     const [selectedConfig, setSelectedConfig] = useState(0);

    //     const handleConfigChange = (event) => {
    //         setSelectedConfig(event.target.value);
    //     };

    //     return (
    //         <div>
    //             <select value={selectedConfig} onChange={handleConfigChange}>
    //                 {configurations.map((config, index) => (
    //                     <option key={index} value={index}>{config.name}</option>
    //                 ))}
    //             </select>
    //             <CKEditor
    //                 editor={ClassicEditor}
    //                 config={configurations[selectedConfig].config}
    //             />
    //         </div>
    //     );
    // }

    //   
    // const editorConfiguration = {
    //     // ...
    //     // Add any other CKEditor configuration options here
    //     // ...
    //     contentCss: '/path/to/custom.css'
    // };
    return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ClassicEditor}
                data={content}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={handleChange}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            <hr />
            <div>
                {parse(content)}
            </div>
        </div>
    )
}


// import React, { useState } from "react";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// export default function PageCreate() {
//     const [content, setContent] = useState("");
//     const [css, setCss] = useState("");

//     function handleChange(event, editor) {
//         const data = editor.getData();
//         setContent(data);
//     }

//     function handleCssChange(event) {
//         const css = event.target.value;
//         setCss(css);
//     }

//     const editorConfig = {
//         toolbar: ["bold", "italic", "link", "bulletedList", "numberedList"],
//     };

//     const editorStyle = css ? { border: "1px solid black", ...css } : {};

//     return (
//         <div>
//             <textarea value={css} onChange={handleCssChange} placeholder="Enter CSS here" />
//             <CKEditor editor={ClassicEditor} data={content} config={editorConfig} onChange={handleChange} style={editorStyle} />
//         </div>
//     );
// }