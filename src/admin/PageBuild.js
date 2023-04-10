import React, { useRef } from 'react';
import { GrapesjsReact } from 'grapesjs-react';
import 'grapesjs/dist/css/grapes.min.css';
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import grapesjs from 'grapesjs';
import webpagePreset from 'grapesjs-preset-webpage';

const PageBuild = () => {
    const editorRef = useRef(null);

    const editorConfig = {
        container: '#gjs',
        plugins: [webpagePreset],
        pluginsOpts: {
            webpagePreset: {
                blocksBasicOpts: {
                    flexGrid: true,
                },
                navbarOpts: false,
                countdownOpts: false,
                formsOpts: {
                    formPresets: [
                        {
                            name: 'Simple Form',
                            action: '',
                            method: 'POST',
                            enctype: 'multipart/form-data',
                            components: [
                                {
                                    type: 'text',
                                    label: 'First Name',
                                    className: 'form-control',
                                    name: 'first-name',
                                    required: true,
                                },
                                {
                                    type: 'text',
                                    label: 'Last Name',
                                    className: 'form-control',
                                    name: 'last-name',
                                    required: true,
                                },
                                {
                                    type: 'email',
                                    label: 'Email',
                                    className: 'form-control',
                                    name: 'email',
                                    required: true,
                                },
                                {
                                    type: 'textarea',
                                    label: 'Message',
                                    className: 'form-control',
                                    name: 'message',
                                    required: true,
                                },
                                {
                                    type: 'button',
                                    label: 'Submit',
                                    className: 'btn btn-primary',
                                },
                            ],
                        },
                    ],
                },
                countdownBlock: false,
                formsBlock: true,
                countdownStyles: false,
                formsStyles: false,
                extraStyles: false,
            },
        },
        storageManager: {
            type: null,
        },
        blockManager: {
            appendTo: '#blocks',
            blocks: [
                {
                    id: 'section',
                    label: '<b>Section</b>',
                    attributes: { class: 'gjs-block-section' },
                    content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
                },
                {
                    id: 'text',
                    label: 'Text',
                    content: '<div data-gjs-type="text">Insert your text here</div>',
                },
                {
                    id: 'image',
                    label: 'Image',
                    select: true,
                    content: { type: 'image' },
                    activate: true,
                },
            ],
        },
    };

    const onInit = (editor) => {
        editor.Panels.removeButton('options', 'gjs-open-import-template');
        editor.Panels.removeButton('options', 'gjs-open-webpage');
    };

    return (
        <div>
            <div className="panel__top">
                <div className="panel__basic-actions"></div>
            </div>
            <div id="gjs" ref={editorRef}></div>
            <div id="blocks"></div>
            <GrapesjsReact config={editorConfig} onInit={onInit} />
        </div>
    );
};

export default PageBuild;
