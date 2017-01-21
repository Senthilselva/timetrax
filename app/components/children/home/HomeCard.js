import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const HomeCard = () => (
  <Card>
    <CardHeader
      title="WELCOME"
      subtitle="Time sheet management system"
    />
    
    <CardMedia>
      <img src="/assects/images/poolpic.jpg" />
    </CardMedia>

  </Card>
);

export default HomeCard;