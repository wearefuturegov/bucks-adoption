import React from "react"
import "./style.scss"

const OptionBubble = ({name, value, label, onChange, selectionState}) =>
    <div className="option-bubble">
        <input
            className="option-bubble__input visually-hidden"
            type="radio"
            name={name}
            value={value}
            autoComplete="off"
            id={`${name}-${value}`}
            checked={selectionState.includes(value)}
            onChange={onChange}
        />
        <label className={"option-bubble__label"} htmlFor={`${name}-${value}`}>
            {label}
        </label>
    </div>

export default OptionBubble
