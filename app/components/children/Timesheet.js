import React from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'

import Overview from "./dashboard/Overview.js"

//import helper file  
import Helpers from '../utils/Helpers.js';
import Auth  from "./Auth";

//alarm, alarm on, alarm off
const iconStyle = { margin: 12 };


class Timesheet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
    		timeSheets:[],
    		userData:Auth._getData()
  		};
	}

	componentWillMount() {
  	
  		Helpers._getTimeSheets()
      		.then(function(userData,err){
        	this.setState({timeSheets:userData.data});
        	console.log(userData.data)
      	}.bind(this));
}//componentWillMount




	render() {
	    var that =this;
		return(
			<div>
				<Overview />
				<Card>
		    	  <CardHeader title="MM/DD/YYYY" subtitle="When expanded, shows all jobs scheduled for that date" actAsExpander={true} showExpandableButton={true} />
		    		<CardText expandable={true}>
					<Table selectable={true}>
				    	<TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
				          	{this.state.timesheets.map(function(row, i){
				            return(
				              <TableRow key={i}> 
				                <TableRowColumn>{row.jobName}</TableRowColumn>
				                <TableRowColumn>{dateFormat(row.startDate, "mm/dd/yyyy")}</TableRowColumn>
				                <TableRowColumn>{row.startTime}</TableRowColumn>
				                <TableRowColumn>{row.endTime}</TableRowColumn>
				              </TableRow>
				            );
				          })}
				    	</TableBody>
					</Table>
					</CardText>
				</Card>
				
        	</div>
		);
	}
}
export default Timesheet;