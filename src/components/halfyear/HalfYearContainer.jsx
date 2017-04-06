import React, { Component } from 'react';
import HalfYear from './HalfYear';
import Month from './Month';

class HalfYearContainer extends Component {
	render(){
		const { title, halfYear, months/* , calculatedFields*/ } = this.props;
		return (
			<div>
				<h3>{title}</h3>
				<div>Полугодие</div>
				<HalfYear {...halfYear} />
				<div>Месяцы</div>
				{months.map((m, index) => {
					return <Month key={index} index={index} {...m} />;
				})}
				
				{/* calculatedFields*/}
			</div>
		);
	}
}


export default HalfYearContainer;