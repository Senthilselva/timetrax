// Include React
var React = require("react");

var App = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <a href="#/home"><button className="btn btn-default">Home</button></a>
            <a href="#/login"><button className="btn btn-default">Login</button></a>
            <a href="#/signup"><button className="btn btn-default">Signup</button></a>
          </div>
          <div className="container">
            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
// Export the component back for use in other files
module.exports = App;