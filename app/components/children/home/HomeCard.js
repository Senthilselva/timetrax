import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const HomeCard = () => (
  <Card>
    <CardHeader
      title="WELCOME"
      subtitle="Time sheet management system"
    />

    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="/assets/images/poolpic.jpg" />
    </CardMedia>
    <CardTitle title="Company Name" subtitle="" />
  
  </Card>
);

export default HomeCard;