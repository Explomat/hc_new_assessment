import React from 'react';

const ViewCompetenceTask = ({ tasksHeader }) => {
	return (
		<tr className='task'>
			{Object.keys(tasksHeader).map((k, index) => {
				if (k in this.props){
					return (
						<td
							key={index}
							className={`task__name task__name--${k}`}
						>
							{this.props[k]}
						</td>
					);
				}
				return null;
			})}
		</tr>
	);
}

export default ViewCompetenceTask;