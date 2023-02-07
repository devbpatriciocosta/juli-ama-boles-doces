import styled from 'styled-components'

import H5 from '../typography/H5'

const ProductCardContainer = styled.div`
  width: 186px;
  height: 225px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  cursor: pointer;

  transition: ease-in-out 0.3s;

  :hover {
    transform: scale(1.2);
  }
`

const ProductImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 144px;
  border-radius: 25px;
  background-color: aliceblue;
`

const ProductInfoContainer = styled.div`
  color: ${(props) => props.theme.secondary};
`

export default function ProductCard() {
  return (
    <>
      <ProductCardContainer>
        <ProductImageContainer>
          <h6>IMAGEM</h6>
        </ProductImageContainer>
        <ProductInfoContainer>
          <H5>8,90 / Unidade</H5>
        </ProductInfoContainer>
      </ProductCardContainer>
    </>
  )
}
