import React from "react";
 
function Dropdown(props) {
    return <div>
        <select {...props}>
            {props.options &&
                props.options.map(o =>
                    <option key={o.id} value={o.id}>
{o.name}</option>)
            }
        </select>
    </div>;
}
export default Dropdown;