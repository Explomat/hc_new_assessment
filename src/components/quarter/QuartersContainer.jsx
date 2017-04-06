import React, { Component } from 'react';
import Quarter from './Quarter';

class QuartersContainer extends Component {
	
	render(){
		const { quarters } = this.props;
		return (
			<div>
				{quarters.map((q, index) => {
					return <Quarter key={index} index={index} {...q} />;
				})}
			</div>
		);
	}
}

export default QuartersContainer;