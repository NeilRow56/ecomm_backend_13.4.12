import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0

import React from 'react'
import products from "@/actions/get-products";
import ProductList from "@/components/product-list";

const HomePage = async () => {

  const billboard = await getBillboard("4b57f1f9-5aad-48e4-8f7f-c029de217bbb")
  const products = await getProducts({ isFeatured: true})
  
  
  return (
    <Container>
      <div>
        <Billboard  data={billboard}/> 
      
        
      <div className="flex flex-col gap-y-8 sm: px-4 lg:px-8" >
      <ProductList title="Featured Products" items={products}/>
      </div>
      </div>
    </Container>
  )
}

export default HomePage
