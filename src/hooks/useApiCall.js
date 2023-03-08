
import React from 'react';
import { fetchProductsSuccess, fetchProductsFail } from '../redux/actions/ActionCreators';

const useApiCall = () => {

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

      return (
        <div>useApiCall</div>
    )
}

export default useApiCall;