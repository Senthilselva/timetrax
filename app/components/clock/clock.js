import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
const styles = {
  clock : {
                fontSize: 15,
                fontWeight: 300,
                fontFamily: 'Lato',
                width: 60,
                textAlign: 'center',
                height: 60,
                color: 'black',
                position: 'relative',
                top : 40,

                circular : {
                    position: 'absolute !important',
                    textAlign: 'center',
                    top : -50,
                    left : 10
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
        return moment.utc(this.props.time).format('HH:mm:ss');
    },

    getPercent: function() {
        return 100 - ((this.props.maxtime - this.props.time) / this.props.maxtime * 100);
    },

    render: function() {
        return (
            <div>
            {this.props.isPlaying ? (
                <div style={styles.clock}>
                     {this.getTime()}
                   <div style={styles.clock.circular}>
                    <CircularProgress  size={2} />
                   </div>
                </div> ) : (
                        <div style={styles.clock}>
                            {this.getTime()}
                        </div>
            )}
            </div>
        );
    }
});

module.exports = Clock;