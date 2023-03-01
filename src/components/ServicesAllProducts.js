import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import axios from 'axios';


function ServicesAllProducts() {

  const items = useSelector(state => state.allProducts);

    // const [allProducts, setAllProducts] = React.useState([]);

    // React.useEffect(() => {

    //     const options = {
    //         method: 'GET',
    //         url: 'https://sephora.p.rapidapi.com/products/list',
    //         params: {categoryId: 'cat150006', pageSize: '60', currentPage: '1'},
    //         headers: {
    //           'X-RapidAPI-Key': 'c59e8cfe81msh6ab285a929bb127p16defdjsna8e04566d952',
    //           'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    //         }
    //       };
            
    //       axios.request(options).then(function (response) {
    //           setAllProducts(response.data);
    //       }).catch(function (error) {
    //           console.error(error);
    //       });
    //   }, [])

    const [products, setProducts] = React.useState(items.products.slice(0, 52));
    const [pageNumber, setPageNumber] = React.useState(0);

    const productsPerPage = 9;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(products.length / productsPerPage);

    const pageChangeHandler = ({selected}) => {
      setPageNumber(selected);
    }

    // const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage)
    //   .map(item => {
    //     return (
    //     <>
    //       <Grid item xs={4} key={item.productId}>
    //         <ProductCard title={item.displayName} img={item.image250} rating={item.rating} url={item.targetUrl} brand={item.brandName} />
    //       </Grid>
    //     </>
    //     )
    //   })

    return ( <>
        <Grid container spacing={2} sx={{width:'75%'}} className="all-products-grid-container">
          { products.length ? products.slice(pagesVisited, pagesVisited + productsPerPage).map(item => {
        return (
        <>
          <Grid item xs={4} key={item.productId}>
            <ProductCard title={item.displayName} img={item.image250} rating={item.rating} url={item.targetUrl} brand={item.brandName} />
          </Grid>
        </>
        )
      })
          : <h3 style={{display:"flex", justifyContent:"center", alignItems:"center"}}> ...Loading </h3>
          }
        </Grid>
          <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={pageChangeHandler}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          activeClassName={"paginationAct"}
          />  </>
    )
}

export default ServicesAllProducts;
