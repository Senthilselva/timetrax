import React from 'react';
import {AppBar, Drawer, MenuItem} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleDashboard = this.handleDashboard.bind(this);
        this.handleMyProfile = this.handleMyProfile.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleToggle() {
      this.setState({open: !this.state.open});
    } 

    handleDashboard() {
      console.log('Dashboard');
    }

    handleMyProfile() {
      console.log('Your Profile');
    }

    handleSignOut() {
      console.log('You are now signed out');
      this.setState({open: false});
    }

    render() {
        return (
           <div>
             <AppBar title="TimeTrax" onLeftIconButtonTouchTap={this.handleToggle} />
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
                      handleSignOut={this.handleSignOut}
                      >
                <MenuItem onTouchTap={this.handleMyProfile}>My Profile</MenuItem>
                <MenuItem onTouchTap={this.handleDashboard}>Dashboard</MenuItem>
                <MenuItem onTouchTap={this.handleSignOut}>Sign Out</MenuItem>
              </Drawer>
          </div>
        )
    }
}


export default Header;
