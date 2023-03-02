import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { Grid, Box } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsSuccess, fetchProductsFail } from '../redux/actions/ActionCreators';
import 'react-slideshow-image/dist/styles.css';
import './imgAnimation.css';
import { Slide } from 'react-slideshow-image';


export default function ProductSlideShow() {

  // const dispatch = useDispatch();
  const items = useSelector(state => state.allProducts);

  // const fetchProducts = () => {

  //   return function(dispatch) {
  //     const options = {
  //         method: 'GET',
  //         url: 'https://sephoira.p.rapidapi.com/products/list',
  //         params: {categoryId: 'cat150006', pageSize: '60', currentPage: '1'},
  //         headers: {
  //           'X-RapidAPI-Key': 'c59e8cfe81msh6ab285a929bb127p16defdjsna8e04566d952',
  //           'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
  //         }
  //       };
          
  //       axios.request(options)
  //           .then(function (response) {
  //              dispatch(fetchProductsSuccess(response.data.products));
  //           })
  //           .catch(function (error) {
  //              dispatch(fetchProductsFail(error));
  //           });
  //   }
  // }

  // React.useEffect(() => {
  //     dispatch(fetchProducts());
  // }, [])


    return (
        <Grid container spacing={2} sx={{pt:10, backgroundColor:"#F8C8DC", justifyContent: "center" }}>
          <Grid item xs={4}>
            <Box sx={{mt:4, width: 350, height: 500, backgroundColor: '#E6E6FA', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}> 
              <p className='about-para1'> branded top </p>
              <DiamondIcon />
              <p className='about-para2'> hits </p>
              <p className='about-para3'> Our company serves the best makeup products that can be manufactured with all the natural ingredients from the Himalayas, here is a brand new product of the company that will make you go like a lavender queen. Hope you enjoy the day and keep purchasing the latest trends from our company to become fashion icon. Only you can make us a company that is known worldwide. </p>
              <Button sx={{background:'transparent', color:"#000", border:"1px solid black", marginTop:"10px"}}> Explore </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Slide>
              {items.products.length ? items.products.map((item) => {
              const {displayName, image250, rating, targetUrl} = item;
              const fullUrl = `https://www.sephora.com/${targetUrl}`;
            return (
            <Card sx={{ maxWidth:310, height:500 }} key={targetUrl}>
            <Chip label='FEATURED' sx={{float: "right", backgroundColor: '#EE82EE', color: "white", fontWeight: "bold"}} />
            <CardMedia
            sx={{ height: 310 }}
              image={image250}
              title={displayName}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {displayName}
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
            )})
            : <> <h3> 
                { items.error.slice(0, 30) }
              </h3> <br />
              <h3>
                { items.error.slice(30, 100) }
             </h3> </> }
            </Slide>
        </Grid>
      </Grid>
  );
}
