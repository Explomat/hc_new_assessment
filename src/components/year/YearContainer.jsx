import React, { Component } from 'react';
import Year from './Year';
import Month from './Month';

class YearContainer extends Component {
	render(){
		const { title, year, months/* , calculatedFields*/ } = this.props;
		return (
			<div>
				<h3>{title}</h3>
				<div>Год</div>
				<Year {...year} />
				<div>Месяцы</div>
				{months.map((m, index) => {
					return <Month key={index} index={index} {...m} />;
				})}
				
				{/* calculatedFields*/}
			</div>
		);
	}
}


export default YearContainer;