import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';


export default function ProductCard(props) {
  const {brand, title, img, rating, url} = props;
  const fullUrl = `https://www.sephora.com/${url}`

    return (
        <Card sx={{ maxWidth: 310, height: "490px" }}>
        <Chip label={brand} sx={{float: "right", backgroundColor: '#EE82EE', color: "white", fontWeight: "bold"}} />
        <CardMedia
          sx={{ height: 310 }}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"> <Rating name="read-only" value={rating} readOnly />
            <a href={fullUrl} target="_blank" rel='noreferrer' style={{textDecoration: "none"}}>
            &nbsp;&nbsp;&nbsp; Buy
            </a>
            </Button>
        </CardActions>
        </Card>
  );
}
