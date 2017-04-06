import React, { Component } from 'react';

class Task extends Component {
	
	constructor(props){
		super(props);
		
		this.handleRemoveTask = this.handleRemoveTask.bind(this);
	}
	
	handleRemoveTask(){
		const { index, removeTask } = this.props;
		removeTask(index);
	}
	
	render(){
		const {
			header,
			isEdit
		} = this.props;
		return (
			<tr>
				{Object.keys(this.props).map((k, index) => {
					return k in header
						? <td key={index}>{this.props[k]}</td>
						: null;
				})}
				<td>
					{isEdit && <i className='icon-trash-1' onClick={this.handleRemoveTask}/>}
				</td>
			</tr>
		);
	}
}

Task.propTypes = {
	index: React.PropTypes.number.isRequired
};

export default Task;