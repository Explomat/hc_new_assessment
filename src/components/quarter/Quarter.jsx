import React, { Component } from 'react';
import Task from '../Task';

class Quarter extends Component {
	
	constructor(props){
		super(props);
		
		this.handleRemoveTask = this.handleRemoveTask.bind(this);
	}
	
	handleRemoveTask(taskIndex){
		const { index } = this.props;
		const { halfIndex } = this.context;
		this.context.removeTask0Quarters(halfIndex, index, taskIndex);
	}
	
	render(){
		const { title, tasks/* calculatedFields*/ } = this.props;
		const { header, body } = tasks;
		return (
			<div>
				<h3>{title}</h3>
				<table>
					<thead>
						<tr>
							{Object.values(header).map((h, index) => {
								return <th key={index}>{h}</th>;
							})}
						</tr>
					</thead>
					<tbody>
						{body.map((b, index) => {
							return (
								<Task
									key={index} {...b}
									index={index}
									header={header}
									removeTask={this.handleRemoveTask}
								/>
							);
						})}
					</tbody>
				</table>
				{/* calculatedFields*/}
			</div>
		);
	}
}

Quarter.contextTypes = {
	removeTask0Quarters: React.PropTypes.func,
	halfIndex: React.PropTypes.number
};

export default Quarter;