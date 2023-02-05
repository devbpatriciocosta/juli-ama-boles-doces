import styled from 'styled-components'

const TitleIntroInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`

export default function IntroInfo() {
  return (
    <TitleIntroInfo>
      <h1>Seu dia muito mais doce!</h1>
    </TitleIntroInfo>
  )
}
