import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//import helper file
import Helpers from '../../utils/Helpers.js';

class ScheduleTable extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    name: ""
  };

}//Constructor

componentWillMount() {
  console.log(Helpers)
  Helpers._getSchedule()
      .then(function(userData,err){
        console.log(JSON.stringify(userData));
        this.setState({name:"senthil"});
      }.bind(this));
}//componentWillMount

render(){
  return(
    <Card>
      <CardHeader
        title= { this.state.name }
        subtitle="Subtitle"
        actAsExpander={true}
        showExpandableButton={true}
      />
    </Card>
  );
}

}//class defination






















const scheduleCard = () => (
  <Card>
    <CardHeader
      title="Title"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

// Export the componen back for use in other files
export default ScheduleTable;
