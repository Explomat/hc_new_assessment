import React, { Component } from 'react';
import Task from '../../components/Task';
import NewTask from '../../components/NewTask';
import { ButtonDefault } from '../../components/modules/button';
import { AlertInfo } from '../../components/modules/alert';
import * as actionCreators from '../../actions';
import { connect } from 'react-redux';
import { getVisibleTasksByPa } from '../../selectors';

class PaContainer extends Component {
	
	constructor(props){
		super(props);
		
		this.handleToogleDisplayNewTask = this.handleToogleDisplayNewTask.bind(this);
		this.handleRemoveTask = this.handleRemoveTask.bind(this);
		this.handleAddNewTask = this.handleAddNewTask.bind(this);
		
		this.state = {
			isDisplayNewTask: false
		};
	}
	
	handleRemoveTask(taskId){
		const { id, removeTask } = this.props;
		removeTask(id, taskId);
	}
	
	handleAddNewTask(task){
		const { id, addTask } = this.props;
		this.handleToogleDisplayNewTask();
		addTask(id, task);
	}
	
	handleToogleDisplayNewTask(){
		this.setState({ isDisplayNewTask: !this.state.isDisplayNewTask });
	}
	
	_renderTasks(){
		const { isEdit, tasksHeader, tasks } = this.props;
		return (
			<table className='tasks'>
				<thead>
					<tr>
						{Object.values(tasksHeader).map((h, index) => {
							return <th key={index} className='tasks__header-name'>{h}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{tasks.map((t, index) => {
						return (
							<Task
								key={index}
								{...t}
								isEdit={isEdit && t.isEdit}
								tasksHeader={tasksHeader}
								onRemove={this.handleRemoveTask}
							/>
						);
					})}
				</tbody>
			</table>
		);
	}
	
	render(){
		const { isEdit, title, tasksHeader, tasks, calcs } = this.props;
		const { isDisplayNewTask } = this.state;
		return (
			<div className='pa'>
				<h4>{title}</h4>
				<div className='tasks-container'>
					{tasks.length > 0 ? this._renderTasks() : <AlertInfo text='Список задач пуст' isClose={false} />}
					<div className='tasks-container__menu'>
						{isEdit && <ButtonDefault text='Добавить задачу' onClick={this.handleToogleDisplayNewTask} />}
					</div>
					{isDisplayNewTask &&
						<NewTask
							tasksHeader={tasksHeader}
							onClose={this.handleToogleDisplayNewTask}
							onSave={this.handleAddNewTask}
						/>
					}
				</div>
				<div className='calcs'>
					{calcs.map((c, index) =>
						<span key={index}>
							<span className='calcs__label'>{c.name}</span>
							<span className='calcs__value'>{c.value}</span>
						</span>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		...state.pas[ownProps.id],
		tasks: getVisibleTasksByPa(state, ownProps)
	};
}


export default connect(mapStateToProps, actionCreators)(PaContainer);
