import styled from 'styled-components'

import IconImage from '../src/components/iconImages/IconImages'
import H3 from '../src/components/typography/H3'

import RegisterForm from '../src/components/form/RegisterForm'

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 0 80px;
`

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

  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 2% 50%, 0% 0%);
`

const SecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: none;
  width: 600px;
  min-height: 500px;
  margin-left: 850px;
  border: 2px dashed ${(props) => props.theme.secondary};
`

export default function SignUp() {
  return (
    <>
      <Header>
        <IconImage imageName="logoJuliama" type="svg" />
        <MainContainer>
          <H3>Olá, administrador</H3>
        </MainContainer>
      </Header>
      <SecondaryContainer>
        <H3>Cadastrar novo produto</H3>
        <RegisterForm />
      </SecondaryContainer>
    </>
  )
}
