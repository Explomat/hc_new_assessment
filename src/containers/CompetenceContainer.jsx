import React, { Component } from 'react';
import DropDown from '../components/modules/dropdown';
import { TextView } from '../components/modules/text-label';
import { connect } from 'react-redux';

class CompetenceContainer extends Component {
	
	render(){
		const { title, userMark, bossMark, comment } = this.props;
		return (
			<div className='competence col-lg-12 col-md-12 col-sm-12'>
				<span className='competence__title competence__field col-lg-3 col-md-3 col-sm-3'>
					{title.value}
				</span>
				<span className='competence__user-mark competence__field col-lg-3 col-md-3 col-sm-3'>
					<DropDown
						selectedPayload={userMark.value.selectedPayload}
						items={userMark.value.items}
					/>
				</span>
				<span className='competence__boss-mark competence__field col-lg-3 col-md-3 col-sm-3'>
					<DropDown
						selectedPayload={bossMark.value.selectedPayload}
						items={bossMark.value.items}
					/>
				</span>
				<span className='competence__comment competence__field col-lg-3 col-md-3 col-sm-3'>
					<TextView value={comment.value} />
				</span>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { 
		...state.competences[ownProps.id]
	};
}

export default connect(mapStateToProps)(CompetenceContainer);