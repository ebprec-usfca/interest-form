import React from "react";

export const BasicField = ({ name, type, text, value, onChange, isRequired }) => {
	return (
		<div>
			<label>{text}</label><br/>
				<input type={type} name={name} value={value}
								onChange={(e) => onChange(name, e.target.value)} required={isRequired}/>
		</div>
	)
}

export const RadioField = ({ name, text, value, options, onChange, isRequired, otherOption, setOtherOption }) => {
	const listOptions = options.map((option) => {
		return (
			<div key={option}>
				<input type={'radio'} value={option} name={name} checked={option === value}
								 onChange={() => onChange(name, option)} required={isRequired}/>
				<span>{option}</span>
			</div>
		)
	})

	return (
		<div className={'radio-group'}>
			<label>{text}</label>
			{listOptions}
			{value === 'Other' && (
				<div>
					<label>Please Specify:</label>
					<input type={text} value={otherOption} onChange={(e) => setOtherOption(name, e.target.value)}/>
				</div>
			)}
		</div>
	)
}

export const CheckboxField = ({ name, text, value, options, onChange, isRequired, otherOption, setOtherOption }) => {
	console.log(options)
	const listOptions = options.map((option) => {
		return (
			<div key={option}>
				{isRequired ?
					<input type={'checkbox'} value={option} name={name} checked={value.includes(option)}
								 onChange={() => onChange(name, option)} required/> :
					<input type={'checkbox'} value={option} name={name} checked={value.includes(option)}
								 onChange={() => onChange(name, option)}/>
				}
				<span>{option}</span>
			</div>
		)
	})

	return (
		<div className={'form-group'}>
			<label>{text}</label>
			{listOptions}
			{value.includes('Other') && (
				<div>
					<label>Please Specify:</label>
					<input type={text} value={otherOption} onChange={(e) => setOtherOption(name, e.target.value)}/>
				</div>
			)}
		</div>
	)
}
