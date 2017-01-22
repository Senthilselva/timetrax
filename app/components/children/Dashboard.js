import React, {Component} from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import {FlatButton, FontIcon} from 'material-ui';
import Auth  from "./Auth";

class TotalsSection extends Component {
  constructor(props) {
    super(props);
    const userData = Auth._getData();
    this.state = { name: userData.firstName }
  }

  render() {

    return (
      <Card>
        <CardHeader title={this.state.name + "'s Overview"} subtitle="" avatar="assets/images/ic_account_circle_black_24dp_2x.png" />
        <CardText>
          This section will display a running total for the week
        </CardText>
      </Card>
    )
  }
}

class TodaySchedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Card>
        <CardHeader title="Today's Schedule" subtitle="" avatar="assets/images/ic_schedule_black_24dp_2x.png" />
        <CardText>
          This section will display a list of jobs the user is scheduled for today.
          If the user doesn't have any jobs for today, it will display "No jobs scheduled for today"
          <p><Link to="/schedule">View Full Schedule</Link></p>
        </CardText>
      </Card>
    )
  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
   }
  
  render() {
   
    return (
      <div>
        <TotalsSection />
        <TodaySchedule />
      </div>
    )
  }
}

// Export the component back for use in other files
export default Dashboard;