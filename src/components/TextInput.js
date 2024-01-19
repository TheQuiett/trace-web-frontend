import {useState} from "react";

export default function TextInput({
    type,
    value, setValue, errorMessage
                                  }) {

    return (
        <div>
            <input type={type} value={value} onChange={(e) => setValue(e.target.value)}  />
            <p style={{
                color: "red",
            }}>{errorMessage}</p>
        </div>
    )
}