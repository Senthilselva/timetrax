import React from 'react';
import { Router} from 'react-router';
import {RaisedButton, FloatingActionButton, Colors} from 'material-ui';

var Clock = require('./clock');

var ClockPage = React.createClass({
    
    getMaxTime: function() {
           return 60 * 60 * 1000;
    },

    getInitialState: function () {
        return {
            isPlaying: false,
            time: this.getMaxTime(),
            maxtime: this.getMaxTime(),
            clockintime:new Date()
        };
    },

    timeOver: function() {
        this.setState({
            maxtime: this.getMaxTime(),
            time: this.getMaxTime(),
        });
    },

    startTimer: function() {
        var _this = this;
        this.state.clockintime = new Date();
        return window.setInterval(function () {
            if (_this.state.time > 0) {
                _this.setState({
                    time: _this.state.time-1000
                });
            } else {
                _this.timeOver();
            }
        }, 1000);
    },

    handleTransition: function() {
        this.context.router.transitionTo('clock');
    },

    handleStart: function() {
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    },

    handleReset: function() {
        this.setState({
            time: this.state.maxtime,
            isPlaying: false
        });
    },

    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.isPlaying) {
            if (!this.timer)
                this.timer = this.startTimer();
        } else {
            window.clearInterval(this.timer);
            this.timer = null;
        }
    },

    componentDidMount: function() {
        
    },

    componentWillUnmount: function() {
        window.clearInterval(this.timer);
        this.timer = null;
    },

    getIconName: function() {
        if (this.state.isPlaying) {
            return 'fa fa-pause';
        } else {
            return 'fa fa-play';
        }
    },

    
    render: function() {
        return (
            <div>
                {this.state.clockintime.toLocaleTimeString()}
                <Clock time={this.state.time} maxtime={this.state.maxtime} />

                <div className="floating">
                    <span className="item">
                        <FloatingActionButton iconClassName={this.getIconName()} iconStyle={{color: '#2196F3'}} onClick={this.handleStart} />
                    </span>
                    <span className="item">
                        <FloatingActionButton iconClassName="fa fa-refresh" iconStyle={{color: '#2196F3'}} onClick={this.handleReset} />
                    </span>
                </div>
            </div>
        );
    }
});

module.exports = ClockPage;