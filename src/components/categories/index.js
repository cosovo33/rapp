import React from'react';
import { Container } from '@mui/material';
const CategoriesPage =()=>{
    return(
        <Container>
            <h3>categories page</h3>
            <p> an arrow function needs to be set ;within this function we will be returning the same jsx with only 
                one change in category name  in every time we change the category an axios call will be launched 
                to server and return a response with the restaurant names having the same category</p>
        </Container>
        )
}
export default CategoriesPage;