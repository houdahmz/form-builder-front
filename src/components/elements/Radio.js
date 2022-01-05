import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Radio = ({ name, label, value, options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3 form-check">

            {
                options?.map(i => (
                    <>
                        <input type="radio" className="form-check-input" id="exampleCheck1" checked={i.value}
                            onChange={event => handleChange(name, event)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">{i.label}</label>
                    </>
                ))
            }
        </div>
    )
}

export default Radio
