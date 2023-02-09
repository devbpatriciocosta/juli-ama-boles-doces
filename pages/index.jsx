/* eslint-disable react-hooks/rules-of-hooks */
import styled from 'styled-components'

import { useState } from 'react'
import { useEffect } from 'react'
import { getProducts, getProductsData } from './api/confeitaria/confeitariaApi'

import IconImage from '../src/components/iconImages/IconImages'
import Navbar from '../src/components/navbar/Navbar'
import IntroInfo from '../src/components/introInfo/IntroInfo'
import TimeInfos from '../src/components/timeInfos/TimeInfos'
import Products from '../src/components/products/Products'
import ProductCard from '../src/components/productCard/ProductCard'

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 0 80px;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const IntroInfoContainer = styled.div`
  margin-top: -297px;
  width: 1500px;
`

const ProductsMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1500px;
  margin-left: 420px;
  margin-top: -430px;
`

const ProductsCardMainContainer = styled.div`
  display: grid;
  grid-column-gap: 45px;
  grid-row-gap: 43px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
`

function confeitariaApp() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchAllProducts()
  }, [])

  const fetchAllProducts = async () => {
    try {
      setLoading(true)
      const data = await getProducts()
      const promises = data.results.map(async (products) => {
        return await getProductsData(products.url)
      })

      const result = await Promise.all(promises)
      setProducts(result)
      setLoading(false)
    } catch (err) {
      console.log('fetchProducts error', err)
    }
  }

  return (
    <>
      <Header>
        <IconImage imageName="logoJuliama" type="svg" />
        <Navbar />
      </Header>
      <InfoContainer>
        <TimeInfos />
        <IntroInfoContainer>
          <IntroInfo />
        </IntroInfoContainer>
      </InfoContainer>
      <ProductsMainContainer>
        <Products />
        <ProductsCardMainContainer>
          <ProductCard loading={loading} products={products} />
        </ProductsCardMainContainer>
      </ProductsMainContainer>
    </>
  )
}

export default confeitariaApp
