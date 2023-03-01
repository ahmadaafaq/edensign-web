import * as React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsSuccess, fetchProductsFail } from '../redux/actions/ActionCreators';
import ProductCard from './ProductCard';


function BodyProductList() {

  const dispatch = useDispatch();
  const items = useSelector(state => state.allProducts);

  const fetchProducts = () => {
    return function(dispatch) {
      const options = {
          method: 'GET',
          url: 'https://sephora.p.rapidapi.com/products/list',
          params: {categoryId: 'cat150006', pageSize: '60', currentPage: '1'},
          headers: {
            'X-RapidAPI-Key': 'c59e8cfe81msh6ab285a929bb127p16defdjsna8e04566d952',
            'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
          }
        };
          
        axios.request(options)
            .then(function (response) {
               dispatch(fetchProductsSuccess(response.data.products));
            })
            .catch(function (error) {
               dispatch(fetchProductsFail(error));
            });
    }
  }

  React.useEffect(() => {
      dispatch(fetchProducts());
  }, [])


    return (
        <>
          <Container maxWidth='xl' sx={{pt:2, display:'flex', justifyContent:"center", alignItems:"center", backgroundColor:"#F8C8DC", width: '100%'}}>
          <nav aria-label="main mailbox folders">
            <List sx={{ display:"inline-flex" }}>
              <ListItem disablePadding>
                <ListItemButton className="list">
                  <ListItemText primary="FEATURED" primaryTypographyProps={{fontSize: "1.5rem"}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton className="list">
                  <ListItemText primary="POPULAR" primaryTypographyProps={{fontSize: "1.5rem"}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton className="list">
                  <ListItemText primary="CATEGORY" primaryTypographyProps={{fontSize: "1.5rem"}} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton className="list" component="a" href="#simple-list">
                  <ListItemText primary="BRAND" primaryTypographyProps={{fontSize: "1.5rem"}} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        <Divider sx={{ borderBottomWidth:"thick", marginTop:'-10px'}} />
        </Container>
        <Grid container spacing={2} sx={{ backgroundColor:"#F8C8DC", justifyContent: "center"}}>
        { items.products.length ? items.products.slice(0, 3).map((item) => {
          return (
            <React.Fragment key={item.productId}>
              <Grid item xs={3}>
                <ProductCard title={item.displayName} img={item.image250} rating={item.rating} url={item.targetUrl} brand={item.brandName}  />
              </Grid>
            </React.Fragment>
            )
          })
          : <> <h3> 
              { items.error.slice(0, 30) }
            </h3> <br />
            <h3>
              { items.error.slice(30, 100) }
          </h3> </>
        }
        </Grid>
        </>
      );
    }


 export default BodyProductList;
