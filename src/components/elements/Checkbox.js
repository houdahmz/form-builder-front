import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Checkbox = ({ name, label, value }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={value}
                onChange={event => handleChange(name, event)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">{label}</label>
        </div>
    )
}

export default Checkbox
