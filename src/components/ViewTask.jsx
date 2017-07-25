import React from 'react';
import CheckBox from './modules/checkbox';

const ViewTask = ({ id, tasksHeader, isEdit, checked, ...props }) => {
	const handleSelect = val => props.onToggleSelect(id, val);

	return (
		<tr className='task'>
			<td className='task__check-container'>
				<CheckBox
					onChange={handleSelect}
					disabled={!isEdit}
					className='task__check'
					checked={checked}
				/>
			</td>
			{Object.keys(tasksHeader).map((k, index) => {
				if (k in props){
					return <td key={index} className={`task__name task__name--${k}`}>{props[k]}</td>;
				}
				return null;
			})}
		</tr>
	);
};

export default ViewTask;