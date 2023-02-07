import styled from 'styled-components'

import IconImage from '../src/components/iconImages/IconImages'
import Navbar from '../src/components/navbar/Navbar'
import IntroInfo from '../src/components/introInfo/IntroInfo'
import TimeInfos from '../src/components/timeInfos/TimeInfos'
import Products from '../src/components/products/Products'

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
  margin-top: -335px;
  width: 1500px;
`

const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1500px;
  margin-left: 420px;
  margin-top: -420px;
`

export default function confeitariaApp() {
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
      <ProductsContainer>
        <Products />
      </ProductsContainer>
    </>
  )
}
