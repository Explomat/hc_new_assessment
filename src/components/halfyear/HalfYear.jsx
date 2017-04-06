import React, { Component } from 'react';
import Task from '../Task';
import Test from './Test';

class HalfYear extends Component {
	
	constructor(props){
		super(props);
		
		this.handleRemoveTask = this.handleRemoveTask.bind(this);
	}
	
	handleRemoveTask(taskIndex){
		const { halfIndex } = this.context;
		this.context.removeTask3HalfYear(halfIndex, taskIndex);
	}
	
	render(){
		const { title, tasks, tests } = this.props;
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
				<div>Тесты</div>
				{tests.map((t, index) => {
					return <Test key={index} {...t} />;
				})}
			</div>
		);
	}
}

HalfYear.contextTypes = {
	removeTask3HalfYear: React.PropTypes.func,
	halfIndex: React.PropTypes.number
};

export default HalfYear;