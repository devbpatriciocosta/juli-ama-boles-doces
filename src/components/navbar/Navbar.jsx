import styled from 'styled-components'

const MainContainer = styled.nav`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  width: 100%;
  min-height: 40px;
  margin-left: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;

  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 2% 50%, 0% 0%);

  @media (max-width: 1420px) {
    min-height: 60px;
    text-align: center;
    clip-path: none;
    padding: 20px;
  }
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

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.secondary};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  li:hover:after {
    width: 100%;
  }

  @media (max-width: 920px) {
    gap: 50px;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`

const SecondaryList = styled.li`
  font-size: 24px;
  font-family: 'Gabriela';
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
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
          <TagA>Home</TagA>
        </SecondaryList>
        <SecondaryList>
          <TagA>Produtos</TagA>
        </SecondaryList>
        <SecondaryList>
          <TagA>Nossa história</TagA>
        </SecondaryList>
        <SecondaryList>
          <TagA>Dicas</TagA>
        </SecondaryList>
        <SecondaryList>
          <TagA>Contatos & Localização</TagA>
        </SecondaryList>
      </MainList>
    </MainContainer>
  )
}
