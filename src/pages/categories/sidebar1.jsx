import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar1 =(props) => {
    const products = useSelector(state => state.products);

    let categories = [];
    let selectedCat = [];
    let brand = []
    let selectedBrand = []
    if (products !== null) {
        categories = products.data.products.map((product) => product.category);
        brand = products.data.products.map((product) => product.brand);
         }
      for (let i = 0; i < categories.length; i++) {
        if (selectedCat.indexOf(categories[i]) === -1) {
            selectedCat.push(categories[i]);
        }
      }
      for (let i = 0; i < brand.length; i++) {
        if (selectedBrand.indexOf(brand[i]) === -1) {
            selectedBrand.push(brand[i]);
        }
      }
     
     
    return (
        <>
      
         <div className='d-flex flex-column border-bottom pb-2 mb-2'>
        <div className='small mb-2'>
          <small className='font-weight-bold'>{props.type}</small>
        </div>
        {props.type === "category" ? products === null ? <p>loading</p> : selectedCat.map(category =>
          <label class='checkbox path'>
            <input type='checkbox' name={category} onChange={(e) => props.handler(e)} />
            <svg viewBox='0 0 21 21'>
              <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186'></path>
            </svg>
            <small className='checkbox-title'>
              <small className='text-capitalize'>{category}</small>
            </small>
          </label>
        ) :

       products === null ? <p>loading</p> : selectedBrand.map(brand =>
        <label class='checkbox path'>
        <input type='checkbox' name={brand} onChange={(e) => props.handler(e)} />
                 <svg viewBox='0 0 21 21'>
                  <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186'></path>
                    </svg>
                <small className='checkbox-title'>
        <small className='text-capitalize'>{brand}</small>
                          </small>
      </label>
          ) }
</div>
      
      </>
    )
}
export default Sidebar1;