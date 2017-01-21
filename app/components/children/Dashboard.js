import React from "react";
import Scheduletable from "./dashboard/Scheduletable.js"
import Timecard from "./dashboard/Timecard.js"
import Auth  from "./Auth";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockInId : 0,
      isClockOut : false
    };

    this._getScheduleClockInId = this._getScheduleClockInId.bind(this);
  }
  
  _getScheduleClockInId(id){    
    this.setState({clockInId:id});
  }

  render() {
    const userData = Auth._getData();
    console.log("userData: ", userData);
    return (
      <div>
        <p>Hi {userData.firstName}</p>
        
        {this.state.clockInId == 0 ? (
        <Scheduletable _getScheduleClockInId = {this._getScheduleClockInId} /> 
        ) : (
        <Timecard clockInId = {this.state.clockInId}/>
        ) }
      </div>
    )
  }
}

// Export the component back for use in other files
export default Dashboard;