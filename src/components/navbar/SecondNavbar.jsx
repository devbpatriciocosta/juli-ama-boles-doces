import styled from 'styled-components'

const MainContainer = styled.nav`
  color: ${(props) => props.theme.secondary};
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const MainList = styled.ul`
  display: flex;
  gap: 100px;
  list-style: none;

  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }
`

const SecondaryList = styled.li`
  font-size: 24px;
  font-family: 'Gabriela';
  font-style: normal;
  font-weight: 600;
  line-height: 10px;
`

const TagA = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export default function Navbar() {
  return (
    <MainContainer>
      <MainList>
        <SecondaryList>
          <TagA>Doces Tradicionais</TagA>
        </SecondaryList>
        <SecondaryList>
          <TagA>Doces Finos</TagA>
        </SecondaryList>
        <SecondaryList>
          <TagA>Bolos & Tortas</TagA>
        </SecondaryList>
        <SecondaryList>
          <TagA>Biscoitos & Merengues</TagA>
        </SecondaryList>
      </MainList>
    </MainContainer>
  )
}
