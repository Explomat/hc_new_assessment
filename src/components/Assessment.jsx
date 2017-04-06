import React, { Component } from 'react';
import QuartersContainer from './quarter/QuartersContainer';
import MonthsContainer from './months/MonthsContainer';
import YearContainer from './year/YearContainer';
import HalfYearContainer from './halfyear/HalfYearContainer';

const viewTypes = {
	0: QuartersContainer,
	1: MonthsContainer,
	2: YearContainer,
	3: HalfYearContainer
};

class Category extends Component {
	render(){
		const {
			title,
			startDate,
			endDate,
			bossFullname,
			viewType,
			data
		} = this.props;
		const DataComponent = viewTypes[viewType];
		return (
			<div className='category'>
				Категория
				{`${title}\r\n ${startDate} - ${endDate} ${bossFullname}`}
				{DataComponent && <DataComponent {...data} />}
			</div>
		);
	}
}

class Half extends Component {
	
	getChildContext() {
		return {
			halfIndex: this.props.index
		};
	}
	
	render(){
		const {
			title,
			startDate,
			endDate,
			categories
		} = this.props;
		return (
			<div className='half'>
				Полугодие
				{`${title}\r\n ${startDate} - ${endDate}`}
				{categories.map((c, index) => {
					return <Category key={index} {...c}/>;
				})}
			</div>
		);
	}
}

Half.childContextTypes = {
	halfIndex: React.PropTypes.number
};

class Assessment extends Component {
	getChildContext() {
		return {
			removeTask0Quarters: this.props.removeTask0Quarters,
			removeTask1: this.props.removeTask1,
			removeTask2Year: this.props.removeTask2Year,
			removeTask2Month: this.props.removeTask2Month,
			removeTask3HalfYear: this.props.removeTask3HalfYear,
			removeTask3Month: this.props.removeTask3Month
		};
	}
	
	render(){
		const { halves } = this.props;
		return (
			<div className='assessment'>
				{halves.map((h, index) => {
					return <Half key={index} index={index} {...h}/>;
				})}
			</div>
		);
	}
}

Assessment.childContextTypes = {
	removeTask0Quarters: React.PropTypes.func,
	removeTask1: React.PropTypes.func,
	removeTask2Year: React.PropTypes.func,
	removeTask2Month: React.PropTypes.func,
	removeTask3HalfYear: React.PropTypes.func,
	removeTask3Month: React.PropTypes.func
};

export default Assessment;