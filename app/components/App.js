// Include React
var React = require("react");
import {Link} from 'react-router'

var App = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">
        <div className="row">
         <div>
          <Link to='/home' className='btn btn--login btn--nav'>Home</Link>
          <Link to='/login' className='btn btn--login btn--nav'>Login</Link>
          <Link to='/signup' className='btn btn--login btn--nav'>Signup</Link>
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