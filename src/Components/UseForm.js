import React, { useState } from 'react';


export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return { 
        values, 
        setValues,
        handleTextChange 
    };
}

export function Form({ children, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

