import React, { Component } from 'react';
import DropDown from '../components/modules/dropdown';
//import { TextView } from '../components/modules/text-label';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';

class CompetenceContainer extends Component {

	constructor(props){
		super(props);
		
		this.handleChangeCompetenceUserMark = this.handleChangeCompetenceUserMark.bind(this);
		this.handleChangeCompetenceBossMark = this.handleChangeCompetenceBossMark.bind(this);
		//this.handleChangeCompetenceComment = this.handleChangeCompetenceComment.bind(this);
	}

	handleChangeCompetenceUserMark(e, payload){
		const { id, changeUserMarkInCompetence } = this.props;
		changeUserMarkInCompetence(id, payload);
	}

	handleChangeCompetenceBossMark(e, payload){
		const { id, changeBossMarkInCompetence } = this.props;
		changeBossMarkInCompetence(id, payload);
	}

	/*handleChangeCompetenceComment(val){
		const { id, changeCommentInCompetence } = this.props;
		changeCommentInCompetence(id, val);
	}*/
	
	render(){
		const { title, userMark, bossMark/*, comment */ } = this.props;
		return (
			<div className='competence'>
				<span className='competence__title competence__field'>
					{title.value}
				</span>
				<span className='competence__user-mark competence__field'>
					{userMark &&
						<DropDown
							selectedPayload={userMark.value.selectedPayload}
							items={userMark.value.items}
							onChange={this.handleChangeCompetenceUserMark}
							disabled={!userMark.isEdit}
						/>
					}
				</span>
				<span className='competence__boss-mark competence__field'>
					{bossMark &&
						<DropDown
							selectedPayload={bossMark.value.selectedPayload}
							items={bossMark.value.items}
							onChange={this.handleChangeCompetenceBossMark}
							disabled={!bossMark.isEdit}
						/>
					}
				</span>
				{/*<span className='competence__comment competence__field col-lg-3 col-md-3 col-sm-3'>
					<TextView
						value={comment.value}
						onBlur={this.handleChangeCompetenceComment}
					/>
				</span>*/}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { 
		...state.competences[ownProps.id]
	};
}

export default connect(mapStateToProps, actionCreators)(CompetenceContainer);