import React from 'react';
import { Link } from 'react-router';
import Router from 'react-router';
import {AppBar, Drawer, MenuItem, FontIcon} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import Auth  from "./Auth";

injectTapEventPlugin();

class Header extends React.Component {
   constructor(props) {
     super(props);
     this.state = { open: false };
     this.handleToggle = this.handleToggle.bind(this);
   }

   handleToggle() {
     this.setState({open: !this.state.open});
   }

   render() {
       return (
         <div>
            <Link to="/home"><AppBar title="TimeTrax" onLeftIconButtonTouchTap={this.handleToggle} /></Link>
             <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}}
                     docked={true}
                     tapToClose={true}
                     openDrawerOffset={0.2} // 20% gap on the right side of drawer
                     panCloseMask={0.2}
                     closedDrawerOffset={-3}
                     styles={{
                       main: {paddingLeft: 3}
                     }}
                     tweenHandler={(ratio) => ({
                       main: { opacity:(2-ratio)/2 }
                     })}
                     width={200}
                     open={this.state.open}
                     onRequestChange={(open) => this.setState({open})}
                     handleMyProfile={this.handleMyProfile}
                     handleDashboard={this.handleDashboard}
                     handleSignOut={this.handleSignOut}
                     >
               <Link to="/home"><MenuItem onTouchTap={this.handleMyProfile}>Overview</MenuItem></Link>
               <Link to="/timesheets"><MenuItem onTouchTap={this.handleMyProfile}>Time Sheets</MenuItem></Link>
               <Link to="/schedule"><MenuItem onTouchTap={this.handleMyProfile}>Schedule</MenuItem></Link>
             </Drawer>
         </div>
       )
   }
}


export default Header;
