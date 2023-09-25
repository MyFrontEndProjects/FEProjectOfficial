import React, { 
    DetailedHTMLProps, 
    InputHTMLAttributes, 
    TextareaHTMLAttributes } from "react";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

interface Props extends DetailedHTMLProps<InputAttributes, HTMLInputElement>{
    id: string;
    inputRef?: any;
    label: string;
    labelSize?: number;
    rows?: number;
}
class Input extends React.Component<Props> {
    render() {
        const { inputRef, id, label,labelSize= 3, rows =1, className="", ...others } = this.props;
        const labelClass =`col-sm-${labelSize} col-form-label`;
        const inputClass = `form-control ${className}`;
        return (
            <>
            <div className="row mb-3">
                <label htmlFor={id} className={labelClass}>
                    {label}
                </label>
                <div className="col-sm">
                    {
                        rows > 1 ? (
                            <textarea ref={inputRef} id = {id} rows ={rows}
                            {...(others as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                            className={inputClass}></textarea>
                        ): (<input ref={inputRef} id = {id} {...others} className={inputClass} />)
                    }
                </div>
            </div>
            </>
        );
    }
}
export default Input;