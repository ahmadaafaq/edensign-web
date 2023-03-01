import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Box, Container } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsSuccess, fetchNewsFail } from '../redux/actions/ActionCreators';
import 'react-slideshow-image/dist/styles.css'
import './imgAnimation.css';
import { Slide } from 'react-slideshow-image';


export default function BodyNewsSlideShow() {

  const dispatch = useDispatch();
  const news = useSelector(state => state.allNews);

  const fetchNews = () => {

      return function(dispatch) {
        const url = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=ae4a78988749452c8bacd793bbc6a65d';
        axios.get(url)
        .then(function (response) {
          dispatch(fetchNewsSuccess(response.data.articles));
        })
        .catch(function (error) {
          dispatch(fetchNewsFail(error));
      });
    }
  }

  React.useEffect(() => {
    dispatch(fetchNews());
  }, [])
  

    return (
      <Box sx={{pt:10, width: "100%", backgroundColor:"#F8C8DC"}}>
        <p className='about-para1' style={{textAlign:"center"}}> our latest </p>
        <DiamondIcon sx={{display:"block", margin:"auto"}} />
        <p className='about-para2' style={{textAlign:"center"}}> news </p>
      <Slide>
        {
          news.articles.length ? news.articles.map(article => {
            const {source, title, url, urlToImage } = article;
            return (
              <Container key={url}>
              <Card sx={{ maxWidth: 350, height: "560px" }}>
              <Chip label={source.name} sx={{float: "right", backgroundColor: '#EE82EE', color: "white", fontWeight: "bold"}} />
              <CardMedia
                sx={{ height: 240 }}
                image={urlToImage}
                component='img'
                title="EDENSIGN Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title.length ? title.slice(0, 80) : "..."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <a href={url} target="_blank" rel='noreferrer' style={{textDecoration: "none"}}>
                   Read Full News Here
                  </a>
                  </Button>
              </CardActions>
              </Card>
              </Container>
            )
          })
          : <> <h3> 
              { news.error.slice(0, 30) }
            </h3>
            <h3>
              { news.error.slice(30, 100) }
          </h3> </>
        }
      </Slide>
      </Box>
  );
}
