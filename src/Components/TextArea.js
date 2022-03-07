import React from "react";


export default class Decription extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			rows: 1,
			minRows: 1,
			maxRows: 100,
		};
	}
	
	handleChange = (event) => {
		const textareaLineHeight = this.props.lineheight;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
    if (currentRows === previousRows) {
    	event.target.rows = currentRows;
    }
		
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}
    
  	this.setState({
    	value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
	};
	
	render() {
		return (
			<textarea
				rows={this.state.rows}
				value={this.state.value}
				placeholder={this.props.placeholder}
				className={this.props.css}
				onChange={this.handleChange}
			/>
		);
	}
}


