import React, { Component } from 'react';

class Test extends Component {
	render(){
		const { name, result, status } = this.props;
		return (
			<table>
				<thead>
					<tr>
						<th>Название</th>
						<th>Результат</th>
						<th>Статус</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{name}</td>
						<td>{result}</td>
						<td>{status}</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Test;