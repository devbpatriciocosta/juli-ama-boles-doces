import styled from 'styled-components'

import H1 from '../typography/H1'
import H3 from '../typography/H3'
import SecondNavbar from '../navbar/SecondNavbar'

const IntroInfoMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px dashed ${(props) => props.theme.secondary};
`

const TitleIntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SecondNavbarContainer = styled.div`
  margin-top: 100px;
`

export default function IntroInfo() {
  return (
    <IntroInfoMainContainer>
      <TitleIntroInfo>
        <H1>Seu dia muito mais doce!</H1>
        <H3>Produtos produzidos artesanalmente com amor e carinho</H3>
      </TitleIntroInfo>
      <SecondNavbarContainer>
        <SecondNavbar />
      </SecondNavbarContainer>
    </IntroInfoMainContainer>
  )
}
