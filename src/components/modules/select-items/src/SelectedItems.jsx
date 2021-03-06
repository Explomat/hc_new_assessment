import React from 'react';
import PropTypes from 'prop-types';

class SelectedItem extends React.Component {

	constructor(props){
		super(props);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
	}

	handleRemoveItem(){
		if (this.context.onRemoveItem){
			this.context.onRemoveItem(this.props.id);
		}
	}

	_getFirstField() {
		return Object.keys(this.props.data).filter((key, index) => {
			return index === 0;
		}).map(key => {
			return this.props.data[key];
		});
	}

	render(){
		return (
			<div className='item' onClick={this.handleRemoveItem}>
				<i className='item__icon icon-minus' />
				<label className='item__text oneline'>{this._getFirstField()}</label>
			</div>
		);
	}
}

SelectedItem.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	data: PropTypes.object
};

SelectedItem.contextTypes = {
	onRemoveItem: PropTypes.func
};

const SelectedItems = ({ items }) => {
	return (
		<div className='selected-items'>
			{items.map((item, index) => <SelectedItem key={index} {...item}/>)}
		</div>
	);
};

SelectedItems.propTypes = {
	items: PropTypes.array // [{id:'', cols: [{}, ...]}, ...]
};

SelectedItems.defaultProps = {
	items: []
};

export default SelectedItems;
