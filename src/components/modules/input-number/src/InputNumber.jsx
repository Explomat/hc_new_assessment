import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from '../../numeric-input';

import './style/input-number.styl';

const InputNumber = ({ value, title, ...props }) => {
	return (
		<div className='input-number'>
			{title && <span className='input-number__title'>{title}</span>}
			<NumericInput
				value={value}
				step={1}
				mobile={false}
				autoCorrect='on'
				placeholder='Введите число'
				{...props}
			/>
		</div>
	);
};

InputNumber.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string
};

InputNumber.defaultProps = {
	value: ''
};

export default InputNumber;
