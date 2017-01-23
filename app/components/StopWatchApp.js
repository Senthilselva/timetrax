var React = require("react");
var classNames = require('classnames');
        const initialState = {
            start: 0,
            lap: 0,
            mSecondsElapsedTotal: 0,
            mSecondsElapsedLap: 0,
            isRunning: false,
            results: []
        };
        function secondsToString(ms) {
            return moment().hour(0).minute(0).second(0).millisecond(ms).format('HH:mm:ss.SSS');
        } 
        function formatDiff(ms) {
            if ( ms == 0 ) { return '-'; }
            if ( ms < 0 ) {
                return moment.duration(ms).asSeconds();
            }
            else {        
                return "+" + moment.duration(ms).asSeconds();
            }
        }
        
        class StopWatchList extends React.Component {

            render() {
                var cx = classNames({
                        'is-positive': this.props.data.diff > 0 ? true : false,
                        'is-negative': this.props.data.diff < 0 ? true : false
                    }),
                    diff = formatDiff(this.props.data.diff),
                    lap = secondsToString( this.props.data.lap ),
                    total = secondsToString( this.props.data.total );
                return  (
                    <tr>
                      <td>{this.props.index}</td>
                      <td className={type}>{diff}</td>
                      <td>{lap}</td>
                      <td>{total}</td>
                  </tr>
                );
            }
        }
        class StopWatchApp extends React.Component {
            constructor(props) {
                super(props);
                this.state = initialState;
                // Bind all methods
                this.tick = this.tick.bind(this);
                this.handleStartAndStop = this.handleStartAndStop.bind(this);
                this.handleLap = this.handleLap.bind(this);
                this.handleReset = this.handleReset.bind(this);
            }
            tick() {
                var mSecondsElapsedTotal = new Date().getTime() - this.state.start,
                    mSecondsElapsedLap = new Date().getTime() - this.state.lap;

                this.setState({ mSecondsElapsedTotal: mSecondsElapsedTotal, mSecondsElapsedLap: mSecondsElapsedLap })
            }
            handleStartAndStop() {
                if ( this.state.isRunning ) {
                    this.handleStop();
                    return; 
                }
                var startValue = this.state.start;
                if ( this.state.start === 0 ) {
                    startValue = new Date().getTime();
                }
                this.setState({ 
                    start: startValue,
                    isRunning: true,
                    lap: new Date().getTime()
                });
                this.interval = setInterval(this.tick.bind(this), 10);
            } 
            handleLap() {
                if ( !this.state.isRunning ) { return; }
                var oldResults = this.state.results,
                    newLap = {
                        key: new Date().getTime(),
                        lap : this.state.mSecondsElapsedLap,
                        total : this.state.mSecondsElapsedTotal,
                        diff: 0
                    };
                // Diff
                if ( this.state.results.length >= 1 ) {
                    newLap.diff = newLap.lap - this.state.results[this.state.results.length-1].lap;
                }
                // Adding the new lap to the results
                var newResults = oldResults.concat([newLap]);
                // New lap
                this.setState({ 
                    lap: new Date().getTime(),
                    results: newResults
                });
            }
            handleStop() {
                this.handleLap();
                this.setState({ isRunning : false });
                clearInterval( this.interval );
            } 
            handleReset() {
                this.setState( initialState );
            }
            render() {
                var cx = classNames({
                        'StopWatchApp': true,
                        'is-running': this.state.isRunning,
                    }),
                    ms = secondsToString( this.state.mSecondsElapsedTotal ),
                    msLap = secondsToString( this.state.mSecondsElapsedLap ),
                    labelStart = this.state.isRunning ? 'Stop' : 'Start',
                    results = this.state.results;
                return (
                    <div >
                        <div className="Time">
                            <span className="Time-value">{ms}</span>
                        </div>
                        
                        <div className="Controls">
                            <button className="Button"  type="button" onClick={this.handleStartAndStop}>{labelStart}</button>
                       </div>
                       
                    </div>
                );
            }
        }

 module.exports = StopWatchApp;       