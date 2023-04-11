const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '300px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    // Avoid any default panel
    panels: { defaults: [] },

    blockManager: {
        appendTo: '#blocks',
        blocks: [
            {
                id: 'section', // id is mandatory
                label: '<b>Section</b>', // You can use HTML/SVG inside labels
                attributes: { class: 'gjs-block-section' },
                content: `<section>
            <h1>This is a simple title</h1>
            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          </section>`,
            }, {
                id: 'text',
                label: 'Text',
                content: '<div data-gjs-type="text">Insert your text here</div>',
            }, {
                id: 'image',
                label: 'Image',
                // Select the component once it's dropped
                select: true,
                // You can pass components as a JSON instead of a simple HTML string,
                // in this case we also use a defined component type `image`
                content: { type: 'image' },
                // This triggers `active` event on dropped components and the `image`
                // reacts by opening the AssetManager
                activate: true,
            }
        ]
    },
})

import React, { useRef } from 'react';
import { GrapesJSEditor } from 'grapesjs-react';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import grapesjs from 'grapesjs';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';

const PageBuilder = () => {
    const editorRef = useRef(null);

    const editorConfig = {
        container: '#gjs',
        height: '100%',
        width: 'auto',
        showOffsets: true,
        noticeOnUnload: false,
        storageManager: {
            id: 'gjs-', // Prefix identifier that will be used to distinguish storage for different files
            type: 'local', // Type of the storage
            autosave: false, // Store data automatically
            autoload: false, // Load data on init
            stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
            storeComponents: true, // Enable/Disable storing of components in JSON format
            storeStyles: true, // Enable/Disable storing of rules in JSON format
            storeHtml: true, // Enable/Disable storing of HTML in JSON format
            storeCss: true, // Enable/Disable storing of CSS in JSON format
        },
        plugins: [grapesjsPresetWebpage],
        pluginsOpts: {
            [grapesjsPresetWebpage]: {
                // Options for the webpage preset
                modalImportTitle: 'Import Template',
                modalImportButton: 'Import',
                modalImportLabel:
                    '<div style="margin-bottom: 10px">Paste here your HTML/CSS and click import</div>',
                modalImportContent: function (editor) {
                    return editor.getHtml() + '<style>' + editor.getCss() + '</style>';
                },
                filestackOpts: null, // Options for Filestack, a third party file uploader and picker
                aviaryOpts: false, // Options for Aviary, a third party image editor
                blocksBasicOpts: {
                    // Options for the Basic category
                    flexGrid: true,
                },
                customStyleManager: [
                    {
                        name: 'Custom Property',
                        properties: [
                            {
                                name: 'Background color',
                                property: 'background-color',
                                type: 'color',
                            },
                            {
                                name: 'Border',
                                property: 'border',
                                type: 'composite',
                                properties: [
                                    {
                                        name: 'Border type',
                                        property: 'border-type',
                                        type: 'select',
                                        options: [
                                            { value: 'solid', name: 'Solid' },
                                            { value: 'dotted', name: 'Dotted' },
                                            { value: 'dashed', name: 'Dashed' },
                                            { value: 'double', name: 'Double' },
                                            { value: 'groove', name: 'Groove' },
                                            { value: 'ridge', name: 'Ridge' },
                                            { value: 'inset', name: 'Inset' },
                                            { value: 'outset', name: 'Outset' },
                                            { value: 'none', name: 'None' },
                                        ],
                                    },
                                    {
                                        name: 'Border width',
                                        property: 'border-width',
                                        type: 'integer',
                                    },
                                    {
                                        name: 'Border color',
                                        property: 'border-color',
                                        type: 'color',
                                    },
                                ],
                            },
           




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

                        return(
    <div>
      <div className="panel__top">
        <div className="panel__basic-actions"></div>
      </div>
      <div id="gjs" ref={editorRef}></div>
      <div id="blocks"></div>
      <GrapesJSEditor config={editorConfig} onInit={onInit} />
    </div >
  );
};

export default PageBuilder;




// This code adds the `grapesjs-preset-webpage` plugin, which provides a style manager, basic blocks, and some other useful features.It also adds the Bootstrap CSS framework to the canvas for styling purposes.

// Please note that you'll need to install the `grapesjs-preset-webpage` package using npm or yarn:

//     ```bash
// npm install grapesjs-preset-webpage
// ```

// or

//     ```bash
// yarn add grapesjs-preset-webpage
// ```

// You can further customize your GrapesJS instance by modifying the options and adding more plugins.Check out the GrapesJS documentation for more information on available options and plugins: <https://grapesjs.com/docs/>




//     Sure, here's an updated version of your code with additional configs and features for the page builder:

//         ```javascript
// import React, { useEffect, useRef } from "react";
// import GrapesJS from "grapesjs";
// import "grapesjs/dist/css/grapes.min.css";
// import { GrapesJSReact } from "grapesjs-react";

// const PageBuilder = () => {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     if (editorRef.current) {
//       const editor = GrapesJS.init({
//         container: editorRef.current,
//         components: "<h1>Hello World!</h1>", // Set initial content for the canvas
//         storageManager: {
//           type: "remote", // Set storage type to remote
//           autosave: true, // Enable autosave
//           stepsBeforeSave: 1, // Save on every change
//           urlStore: "/save", // URL to save the data to
//           urlLoad: "/load", // URL to load the data from
//           headers: { "X-CSRF-Token": "YOUR_CSRF_TOKEN" }, // Set headers for the AJAX requests
//           params: { id: "page-1" }, // Set additional params for the AJAX requests
//         },
//         styleManager: {
//           sectors: [{ name: "General", open: false }], // Set which style sectors to show and hide
//         },
//         blockManager: {
//           appendTo: "#blocks", // Set where to render the block manager
//           blocks: [
//             {
//               id: "section",
//               label: "Section",
//               category: "Layout",
//               attributes: { class: "gjs-block-section" },
//               content: '<section class="gjs-block-section"></section>',
//             },
//             {
//               id: "text",
//               label: "Text",
//               category: "Basic",
//               attributes: { class: "gjs-block-text" },
//               content: '<div class="gjs-block-text">Insert your text here</div>',
//             },
//             {
//               id: "image",
//               label: "Image",
//               category: "Basic",
//               attributes: { class: "gjs-block-image" },
//               content:
//                 '<img class="gjs-block-image" src="https://picsum.photos/200/300" alt="Image">',
//             },
//           ], // Configure the blocks to show in the block manager
//         },
//         layerManager: {
//           appendTo: "#layers", // Set where to render the layer manager
//         },
//         panels: {
//           defaults: [
//             {
//               id: "panel-switcher",
//               el: ".panel__switcher",
//               buttons: [
//                 {
//                   id: "show-layers",
//                   active: true,
//                   label: "Layers",
//                   command: "show-layers",
//                   togglable: false,
//                 },
//                 {
//                   id: "show-style",
//                   active: true,
//                   label: "Styles",
//                   command: "show-styles",
//                   togglable: false,
//                 },
//                 {
//                   id: "show-traits",
//                   active: true,
//                   label: "Traits",
//                   command: "show-traits",
//                   togglable: false,
//                 },
//               ],
//             },
//             {
//               id: "panel-devices",
//               el: ".panel__devices",
//               buttons: [
//                 {
//                   id: "device-desktop",
//                   label: "Desktop",
//                   command: "set-device-desktop",
//                   active: true,
//                   togglable: false,
//                 },
//                 {
//                   id: "device-tablet",
//                   label: "Tablet",
//                   command: "set-device-tablet",
//                   togglable: false,
//                 },
//                 {
//                   id: "device-mobile",
//                   label: "Mobile",
//                   command: "set-device-mobile",
//                   togglable: false,
//                 },
//               ],
//             },
//           ], // Configure which panels to show and hide
//         },
//         commands: {
//           defaults: [
//             {
//               id: "save",
//               run: (editor) => {
//                 // Send the data to the backend for saving
//                 editor.store();
//               },
//               stop: (editor) => {
//                 // Handle the stop event
//               },
//             },
//           ], // Define custom commands
//         },
//         canvas: {
//           styles: [
//             "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", // Add external stylesheets to the canvas
//             "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css",
//           ],
//           scripts: [
//             "https://code.jquery.com/jquery-3.5.1.slim.min.js", // Add external scripts to the canvas
//             "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
//             "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
//           ],
//           stylePrefix: "gjs-", // Set prefix for the canvas



//         },
//         blocks: {
//           stylePrefix: "gjs-", // Set prefix for the blocks
//         },
//       },
//       plugins: [], // Add GrapesJS plugins here if needed
//     });

//     editor.on("storage:store", (js, html, css) => {
//       // Handle the save event, send the HTML code to your backend
//       console.log("HTML to save:", html);
//     });

//     // Clean up the editor instance when the component is unmounted
//     return () => {
//       editor.destroy();
//     };
//   }
// }, []);

// return (
//   <>
//     <div className="panel__switcher"></div>
//     <div className="panel__devices"></div>
//     <div className="blocks-container" id="blocks"></div>
//     <div className="layers-container" id="layers"></div>
//     <GrapesJSReact ref={editorRef} />
//   </>
// );
// };

// export default PageBuilder;
// ```

// Here are the new configs and features that have been added:

// - `components`: Sets the initial content for the canvas.
// - `storageManager`: Configures the storage options for the editor.In this case, it has been set to use remote storage with autosave enabled, and the URL and headers for the AJAX requests have been set.
// - `styleManager`: Configures which style sectors to show and hide.
// - `blockManager`: Configures the blocks to show in the block manager.
// - `layerManager`: Configures where to render the layer manager.
// - `panels`: Configures which panels to show and hide, and the buttons for each panel.
// - `commands`: Defines custom commands for the editor.
// - `canvas`: Configures external stylesheets and scripts to be added to the canvas, and sets the prefix for the canvas and blocks.

// I hope this helps! Let me know if you have any questions.