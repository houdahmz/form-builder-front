import React from 'react'
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Radio from './elements/Radio';
import Select from './elements/Select';
const Element = ({ field: {options, type, label, placeholder, value, name, } }) => {

    switch (type) {
        case 'text':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='text'

            />)
        case 'number':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='number'

            />)
        case 'password':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='password'

            />)
        case 'date':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='date'

            />)
        case 'email':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='email'

            />)
        case 'time':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='time'

            />)
        case 'url':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='url'

            />)
        case 'tel':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='tel'

            />)
        case 'file':
            return (<Input
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                type='file'

            />)
        case 'select':
            return (<Select
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                options={options}
            />)
        case 'checkbox':
            return (<Checkbox
                name={name}
                label={label}
                value={value}
            />)
        case 'radio':
            return (<Radio
                name={name}
                label={label}
                value={value}
                options={options}
            />)
        default:
            return null;
    }


}

export default Element
