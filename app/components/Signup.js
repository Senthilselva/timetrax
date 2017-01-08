import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import { Card, CardTitle, CardText, RaisedButton, TextField } from 'material-ui';

var SignUp = React.createClass({

  _submit: function(e) {
  },

  render: function() {
    return (
      <div className="row">
        <Card className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
          <form id="signup-form" className="text-center" action="/" onSubmit={this._submit}>
            <CardTitle title="Sign Up with Email" />

            <div className="field-line">
              <TextField ref="email" floatingLabelText="Email" name="email"/>
            </div>

            <div className="field-line">
              <TextField ref="password" floatingLabelText="Password" type="password" name="password"/>
            </div>

            <div className="button-line">
              <RaisedButton type="submit" label="Create New Account" primary={true} />
            </div>

            <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
          </form>
        </Card>
      </div>
    );
  }
});

module.exports = SignUp;