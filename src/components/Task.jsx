import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './modules/modal';
import { TextView, TextAreaView } from './modules/text-label';
import { AlertDanger } from './modules/alert';
import InputReal from './modules/input-real';

class Task extends Component {
	
	constructor(props){
		super(props);
		
		this.disabledTypes = {
			'fact': props.type === 'year' || props.type === 'halfYear' || props.type === 'quarter'
		};
		this.handleSave = this.handleSave.bind(this);
		this.handleChangeField = this.handleChangeField.bind(this);
		this.handleCloseError = this.handleCloseError.bind(this);
		
		this._checkFields = () => {
			const { fields } = this.state;
			const { tasksHeader } = this.props;

			return Object.keys(fields)
				.filter(k => {
					return (
						(k in tasksHeader) &&
						fields[k].toString().trim() !== '' &&
						(!(k in this.disabledTypes) ||
						this.disabledTypes[k])
					);
				})
				.length === Object.keys(tasksHeader).length;
		};
		
		const { id, name, unit, weight, threshold, plan, challenge, fact, percent, comment } = this.props.task || {};
		this.state = {
			fields: {
				id: id || null,
				name: name || '',
				unit: unit || '',
				weight: weight || 0,
				threshold: threshold || 0,
				plan: plan || 0,
				challenge: challenge ||  0,
				fact: fact || 0,
				percent: percent || 0,
				comment: comment || ''
			},
			error: null
		};
	}
	
	handleSave(){
		const { onSave } = this.props;
		const isFilled = this._checkFields();
		if (!isFilled){
			this.setState({
				error: 'Необходимо заполнить все поля!'
			});
		} else if (onSave && isFilled) {
			onSave(this.state.fields);
		}
	}
	
	handleChangeField(key, val){
		const { fields } = this.state;
		const newFields = { ...fields };
		newFields[key] = val;
		this.setState({
			fields: newFields
		});
	}
	
	handleCloseError(){
		this.setState({ error: null });
	}
	
	render(){
		const {
			tasksHeader,
			title
		} = this.props;
		const { fields, error } = this.state;
		const { name, unit, weight, threshold, plan, challenge, fact, comment } = fields;
		return (
			<Modal
				title={title}
				footerButtonText='Сохранить'
				onClose={this.props.onClose}
				onSave={this.handleSave}
				className='new-task__container'
			>
				{error && <AlertDanger text={error} onClose={this.handleCloseError}/>}
				<div className='new-task'>
					{Object.keys(fields).map((k, index) => {
						if (k in tasksHeader){
							switch (k){
								case 'name':
									return (
										<div key={index} className='new-task__name'>
											<TextAreaView
												value={name}
												placeholder={tasksHeader.name}
												onChange={(val) => this.handleChangeField('name', (val || ''))}
											/>
										</div>
									);
								case 'unit':
									return (
										<div key={index} className='new-task__unit'>
											<TextView
												value={unit}
												placeholder={tasksHeader.unit}
												onChange={(val) => this.handleChangeField('unit', (val || ''))}
											/>
										</div>
									);
								case 'weight':
									return (
										<div key={index} className='new-task__weight'>
											<InputReal
												value={weight}
												min={0}
												title={tasksHeader.weight}
												onChange={(val) => this.handleChangeField('weight', (val || 0))}
												className='form-control'
											/>
										</div>
									);
								case 'threshold':
									return (
										<div key={index} className='new-task__min'>
											<InputReal
												value={threshold}
												title={tasksHeader.threshold}
												onChange={(val) => this.handleChangeField('threshold', (val || 0))}
												className='form-control'
											/>
										</div>
									);
								case 'plan':
									return (
										<div key={index} className='new-task__targ'>
											<InputReal
												value={plan}
												title={tasksHeader.plan}
												onChange={(val) => this.handleChangeField('plan', (val || 0))}
												className='form-control'
											/>
										</div>
									);
								case 'challenge':
									return (
										<div key={index} className='new-task__max'>
											<InputReal
												value={challenge}
												title={tasksHeader.challenge}
												onChange={(val) => this.handleChangeField('challenge', (val || 0))}
												className='form-control'
											/>
										</div>
									);
								case 'fact':
									return (
										<div key={index} className='new-task__fact'>
											<InputReal
												value={fact}
												title={tasksHeader.fact}
												onChange={(val) => this.handleChangeField('fact', (val || 0))}
												className='form-control'
												disabled={this.disabledTypes.fact}
											/>
										</div>
									);
								case 'comment':
									return (
										<div key={index} className='new-task__comment'>
											<TextAreaView
												value={comment}
												placeholder={tasksHeader.comment}
												onChange={(val) => this.handleChangeField('comment', (val || 0))}
											/>
										</div>
									);
								default:
									return null;
							}
						}
						return null;
					})}
				</div>
			</Modal>
		);
	}
}

Task.defaultProps = {
	title: 'Добавление задачи'
};

Task.propTypes = {
	type: PropTypes.string,
	tasksHeader: PropTypes.object,
	title: PropTypes.string,
	footerButtonText: PropTypes.string
};

export default Task;