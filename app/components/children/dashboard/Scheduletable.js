import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//import helper file
import Helpers from '../../utils/Helpers.js';

class ScheduleTable extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    scheduleTables:[]
  };

}//Constructor

componentWillMount() {
  console.log(Helpers)
  Helpers._getSchedule()
      .then(function(userData,err){
        //console.log(JSON.stringify(userData));
        this.setState({scheduleTables:userData.data});
        //console.log(JSON.stringify(this.state.scheduleTables));
      }.bind(this));
}//componentWillMount

render(){
  console.log((this.state.scheduleTables));

    return (
        <div>
          {this.state.scheduleTables.map(function(id,i){
            return(
            <div key={i}> 
              {id.jobName}
              {id.startDate}
              {id.startTime}
              {id.jobAdd}
            </div>
            );
          })}
        </div>
    );
}

}//class defination


// Export the componen back for use in other files
export default ScheduleTable;
