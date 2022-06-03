import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

export default function Input({ label, name, value, onChange, rule, ...other }) {
    const [errors, setErrors] = useState({ error: false, helperText: "" })

    const handleBlur = () => {
        rule
            ? setErrors({ error: true, helperText: rule })
            : setErrors({ error: false, helperText: "" });
    }

    const handleInput = () => {
        value.trim() && setErrors({ error: false, helperText: "" });
    }

    return (
        <TextField
            color="secondary"
            error={errors.error}
            helperText={errors.helperText}
            variant='outlined'
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            onInput={handleInput}
            {...other}
        />
    )
}
