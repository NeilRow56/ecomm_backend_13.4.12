import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0

import React from 'react'

const HomePage = async () => {

  const billboard = await getBillboard("4b57f1f9-5aad-48e4-8f7f-c029de217bbb")
  return (
    <Container>
      <div>
        <Billboard  data={billboard}/> 
      </div>
    </Container>
  )
}

export default HomePage
