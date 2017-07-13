import React, { Component } from 'react';

class ViewCompetenceTask extends Component {
	
	render(){
		const { tasksHeader } = this.props;
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
						)
					}
					return null;
				})}
			</tr>
		);
	}
}

export default ViewCompetenceTask;