import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

export default function PageCreate() {
    const [content, setContent] = useState()
    const handleContent = (event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
        setContent()
    }




    const configurations = [
        {
            name: 'Default',
            config: {
                // Default configuration options
            }
        },
        {
            name: 'Custom',
            config: {
                // Custom configuration options
                contentCss: '/path/to/custom.css'
            }
        },
        // Add more configurations as needed
    ];

    function CKEditorComponent() {
        const [selectedConfig, setSelectedConfig] = useState(0);

        const handleConfigChange = (event) => {
            setSelectedConfig(event.target.value);
        };

        return (
            <div>
                <select value={selectedConfig} onChange={handleConfigChange}>
                    {configurations.map((config, index) => (
                        <option key={index} value={index}>{config.name}</option>
                    ))}
                </select>
                <CKEditor
                    editor={ClassicEditor}
                    config={configurations[selectedConfig].config}
                />
            </div>
        );
    }

    //   
    const editorConfiguration = {
        // ...
        // Add any other CKEditor configuration options here
        // ...
        contentCss: '/path/to/custom.css'
    };
    return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={handleContent}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </div>
    )
}
