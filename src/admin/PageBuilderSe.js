// I've added some configurations and features for your GrapesJS page builder. This includes the addition of basic blocks, a style manager, and a panel with buttons for basic actions like undo, redo, and export. Here's the updated code:


import React, { useEffect, useRef } from "react";
import GrapesJS from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
// import { GrapesJSReact } from "grapesjs-react";
import { GrapesjsReact } from 'grapesjs-react';


import "grapesjs-preset-webpage";
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";

const PageBuilderSe = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = GrapesJS.init({
                container: editorRef.current,
                fromElement: true,
                storageManager: {
                    type: "none",
                },
                plugins: ["grapesjs-preset-webpage"],
                pluginsOpts: {
                    "grapesjs-preset-webpage": {
                        // options for the webpage preset
                    },
                },
                assetManager: {
                    embedAsBase64: true,
                    assets: [],
                },
                canvas: {
                    styles: [
                        "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                    ],
                },
                panels: {
                    defaults: [
                        {
                            id: "basic-actions",
                            el: ".panel__basic-actions",
                            buttons: [
                                {
                                    id: "undo",
                                    className: "fa fa-undo",
                                    command: "undo",
                                    attributes: { title: "Undo" },
                                },
                                {
                                    id: "redo",
                                    className: "fa fa-repeat",
                                    command: "redo",
                                    attributes: { title: "Redo" },
                                },
                                {
                                    id: "import",
                                    className: "fa fa-download",
                                    command: "export-template",
                                    attributes: { title: "Export" },
                                },
                            ],
                        },
                    ],
                },
            });

            editor.on("storage:store", (js, html, css) => {
                // Handle the save event, send the HTML code to your backend
                console.log("HTML to save:", html);
            });

            // Clean up the editor instance when the component is unmounted
            return () => {
                editor.destroy();
            };
        }
    }, []);

    return (
        <>
            <div className="panel__basic-actions"></div>
            <GrapesJSReact ref={editorRef} />
        </>
    );
};

export default PageBuilderSe;