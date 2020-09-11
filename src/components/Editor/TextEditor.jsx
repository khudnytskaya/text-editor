import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import CustomToolbar from "./CustomToolBar";
import { Button } from "antd";
import 'antd/dist/antd.css';


const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "small2", "medium", "large", "huge"];
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);


export default class TextEditor extends React.Component {
    state = {
        editorHtml: "",
        descriptionTable: [
            {
            text: "",
            fontSize: "13px",
            color: "rgba(0, 0, 0, 0.85)",
            background: "rgba(0, 0, 0, 0)"
        }
    ]
    };

    handleChange = html => {
        this.setState({ editorHtml: html });
    };

    static modules = {
        toolbar: {
            container: "#toolbar"
        }
    };

    static formats = [
        "header",
        "font",
        "size",
        "align",
        "strike",
        "color",
        "background"
    ];

    handleClick = () => {
        const input = document.getElementById('input');
        const span = input.getElementsByTagName('span');
        if (span.length > 0) {
            for (let i = 0; i < span.length; i++) {
                const styleInput = getComputedStyle(span[i]);
                if (input.textContent.length > 0) {
                    this.setState((state) => {
                        return {
                            ...state,
                            descriptionTable : {
                                text: input.textContent,
                                fontSize: styleInput.fontSize,
                                color: styleInput.color,
                                background: styleInput.backgroundColor
                            }
                        }
                    }, function(){
                        console.log(JSON.stringify(this.state.descriptionTable));
                    })
                }
            }
        } else {
            this.setState((state) => {
                return {
                    ...state,
                    descriptionTable: {
                        ...state.descriptionTable,
                        text: input.textContent
                    }
                }
            }, function(){
                console.log(JSON.stringify(this.state.descriptionTable));
            })

        };
    }

    render() {
        return (
            <div className="text-editor">
                <h2 className="text">Text Editor</h2>
                <CustomToolbar />
                <ReactQuill
                    id='input'
                    value={this.state.editorHtml}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    modules={TextEditor.modules}
                    formats={TextEditor.formats}
                />
                <Button
                    className="button-json"
                    onClick={this.handleClick}
                >Convert to JSON</Button>
            </div>
        );
    }
}


