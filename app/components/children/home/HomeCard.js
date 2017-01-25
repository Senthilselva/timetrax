import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const HomeCard = () => (
  <Card>
    <CardHeader
      subtitle="Time sheet management system"
    />
    <CardMedia>
      <img src="/assets/images/poolpic.jpg" />
    </CardMedia>
  </Card>
);

export default HomeCard;