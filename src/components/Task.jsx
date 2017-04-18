import React, { Component } from 'react';
import Portal from './modules/portal';
import Confirm from './modules/confirm';
import { dom } from '../config';

class Task extends Component {
	
	constructor(props){
		super(props);
		
		this.handleToggleConfirm = this.handleToggleConfirm.bind(this);
		this.handleRemoveTask = this.handleRemoveTask.bind(this);
		this._firstCol = () => {
			const firstColName = Object.keys(this.props)[1];
			return this.props[firstColName];
		};
		
		this.state = {
			isDisplayConfirm: false
		};
	}
	
	handleToggleConfirm(){
		this.setState({ isDisplayConfirm: !this.state.isDisplayConfirm });
	}
	
	handleRemoveTask(isConfirm){
		const { id, onRemove } = this.props;
		if (onRemove && isConfirm){
			onRemove(id);
		}
		this.handleToggleConfirm();
	}
	
	render(){
		const {
			tasksHeader,
			isEdit
		} = this.props;
		const { isDisplayConfirm } = this.state;
		return (
			<tr className='task'>
				{Object.keys(this.props).map((k, index) => {
					if (k in tasksHeader){
						return <td key={index} className={`task__name task__name--${k}`}>{this.props[k]}</td>;
					}
					return null;
				})}
				{isEdit &&
					<td className='task__delete-button'>
						<i className='icon-trash-1' onClick={this.handleToggleConfirm}/>
					</td>
				}
				<Portal nodeId={dom.portalModalId}>
					{isDisplayConfirm &&
						<Confirm
							text={`Вы действительно хотите удалить - \"${this._firstCol()}\"`}
							onConfirm={this.handleRemoveTask}
							onClose={this.handleToggleConfirm}
						/>
					}
				</Portal>
			</tr>
		);
	}
}

export default Task;