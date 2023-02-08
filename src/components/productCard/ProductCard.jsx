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
  opacity: 0.7;

  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: ease-in-out 0.3s;

  -webkit-transition: all 0.9s ease;
  -moz-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
  -ms-transition: all 0.9s ease;
  width: 100%;
  height: 200px;

  :hover {
    transform: scale(1.2);

    opacity: 0.99;

    -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -ms-transform: scale(1.15);
    -o-transform: scale(1.15);
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
          <span>
            <H5>8,90 / Unidade</H5>
          </span>
        </ProductInfoContainer>
      </ProductCardContainer>
    </>
  )
}
