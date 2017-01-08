import React from 'react';
import { Card } from 'material-ui';

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <Card id="home" className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-2 col-md-8">
            Home ????
          </Card>
        </div>
      </div>
    );
  }
});

module.exports = Home;