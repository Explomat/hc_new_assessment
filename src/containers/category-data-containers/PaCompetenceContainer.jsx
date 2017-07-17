import React, { Component } from 'react';
import { AlertInfo } from '../../components/modules/alert';
import ViewCompetenceTask from '../../components/ViewCompetenceTask';
import { getTasksByPaCompetence } from '../../selectors';
import { connect } from 'react-redux';

class PaCompetenceContainer extends Component {
	
	_renderTasks(){
		const { tasksHeader, tasks } = this.props;
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
							<ViewCompetenceTask
								key={index}
								{...t}
								tasksHeader={tasksHeader}
							/>
						);
					})}
				</tbody>
			</table>
		);
	}
	
	render(){
		const { title, tasks, calcs } = this.props;
		return (
			<div className='pa-competence'>
				<h4>{title}</h4>
				<div className='tasks-container'>
					{tasks && tasks.length > 0 ? this._renderTasks() : <AlertInfo text='Список задач пуст' isClose={false} />}
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
		...state.pasCompetence[ownProps.id],
		tasks: getTasksByPaCompetence(state, ownProps)
	};
}


export default connect(mapStateToProps)(PaCompetenceContainer);
