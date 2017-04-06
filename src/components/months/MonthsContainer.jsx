import React, { Component } from 'react';
import Task from '../Task';

class MonthsContainer extends Component {
	
	constructor(props){
		super(props);
		
		this.handleRemoveTask = this.handleRemoveTask.bind(this);
	}
	
	handleRemoveTask(taskIndex){
		const { halfIndex } = this.context;
		this.context.removeTask1(halfIndex, taskIndex);
	}
	
	render(){
		const { title, tasks/* , calculatedFields*/ } = this.props;
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

MonthsContainer.contextTypes = {
	removeTask1: React.PropTypes.func,
	halfIndex: React.PropTypes.number
};

export default MonthsContainer;