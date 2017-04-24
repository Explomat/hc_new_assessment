import React, { Component } from 'react';
import Modal from './modules/modal';
import { TextView, TextAreaView } from './modules/text-label';
import { AlertDanger } from './modules/alert';
import InputReal from './modules/input-real';

class NewTask extends Component {
	
	constructor(props){
		super(props);
		
		this.handleSave = this.handleSave.bind(this);
		this.handleChangeField = this.handleChangeField.bind(this);
		this.handleCloseError = this.handleCloseError.bind(this);
		
		/*this._checkFields = () => {
			const { fields } = this.state;
			const { header } = this.props;
			return Object.keys(fields)
				.filter(k => (k in header) && fields[k])
				.length === Object.keys(header).length;
		};*/
		
		this._checkFields = () => {
			const { fields } = this.state;
			const { tasksHeader } = this.props;
			return Object.keys(fields)
				.filter(k => (k in tasksHeader) && fields[k].toString().trim() !== '')
				.length === Object.keys(tasksHeader).length;
		};
		
		this._calcPercent = () => {
			return Math.random();
		};
		
		this.state = {
			fields: {
				name: '',
				unit: '',
				weight: 0,
				min: 0,
				targ: 0,
				max: 0,
				fact: 0,
				percent: 0,
				comment: ''
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
		//newFields.percent = this._calcPercent();
		this.setState({
			fields: newFields
		});
	}
	
	handleCloseError(){
		this.setState({ error: null });
	}
	
	render(){
		const {
			tasksHeader
		} = this.props;
		const { fields, error } = this.state;
		const { name, unit, weight, min, targ, max, fact, comment } = fields;
		return (
			<Modal
				title='Добавьте задачу'
				footerButtonText='Добавить'
				onClose={this.props.onClose}
				onSave={this.handleSave}
			>
				{error && <AlertDanger text={error} onClose={this.handleCloseError}/>}
				<div className='new-task'>
					{Object.keys(fields).map((k, index) => {
						if (k in tasksHeader){
							switch (k){
								case 'name':
									return (
										<TextAreaView
											key={index}
											value={name}
											placeholder={tasksHeader.name}
											onChange={(val) => this.handleChangeField('name', (val || ''))}
										/>
									);
								case 'unit':
									return (
										<TextView
											key={index}
											value={unit}
											placeholder={tasksHeader.unit}
											onChange={(val) => this.handleChangeField('unit', (val || ''))}
										/>
									);
								case 'weight':
									return (
										<InputReal
											key={index}
											value={weight}
											title={tasksHeader.weight}
											onChange={(val) => this.handleChangeField('weight', (val || 0))}
											className='form-control'
										/>
									);
								case 'min':
									return (
										<InputReal
											key={index}
											value={min}
											title={tasksHeader.min}
											onChange={(val) => this.handleChangeField('min', (val || 0))}
											className='form-control'
										/>
									);
								case 'targ':
									return (
										<InputReal
											key={index}
											value={targ}
											title={tasksHeader.targ}
											onChange={(val) => this.handleChangeField('targ', (val || 0))}
											className='form-control'
										/>
									);
								case 'max':
									return (
										<InputReal
											key={index}
											value={max}
											title={tasksHeader.max}
											onChange={(val) => this.handleChangeField('max', (val || 0))}
											className='form-control'
										/>
									);
								case 'fact':
									return (
										<InputReal
											key={index}
											value={fact}
											title={tasksHeader.fact}
											onChange={(val) => this.handleChangeField('fact', (val || 0))}
											className='form-control'
										/>
									);
								case 'comment':
									return (
										<TextAreaView
											key={index}
											value={comment}
											placeholder={tasksHeader.comment}
											onChange={(val) => this.handleChangeField('comment', (val || 0))}
										/>
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

NewTask.propTypes = {
	tasksHeader: React.PropTypes.object
};

export default NewTask;