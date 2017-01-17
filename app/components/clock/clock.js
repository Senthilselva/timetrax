import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
const styles = {
  clock : {
                fontSize: 15,
                fontWeight: 300,
                fontFamily: 'Lato',
                width: 100,
                textAlign: 'center',
                height: 100,
                color: 'black',
                position: 'relative',
                
                circular : {
                    position: 'absolute !important',
                    textAlign: 'center',
                    top : -30,
                }
            }
};

var Clock = React.createClass({
    getDefaultProps: function() {
        return {
            time: 60 * 60 * 1000,
            maxtime: 60 * 60 * 1000,
        };
    },

    getTime: function() {
        return moment.utc(this.props.time).format('mm.ss');
    },

    getPercent: function() {
        return 100 - ((this.props.maxtime - this.props.time) / this.props.maxtime * 100);
    },

    render: function() {
        return (
             <div style={styles.clock}>
                {this.getTime()}
                 <div style={styles.clock.circular}>
                    <CircularProgress mode="determinate" 
                                      value={this.getPercent()} 
                                      size={2} />
                </div>
            </div>
        );
    }
});

module.exports = Clock;