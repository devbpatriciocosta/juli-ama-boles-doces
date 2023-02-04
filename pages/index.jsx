import styled from 'styled-components'

import IconImage from '../src/components/iconImages/IconImages'
import Navbar from '../src/components/navbar/Navbar'

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 0 80px;
`

export default function confeitariaApp() {
  return (
    <>
      <Header>
        <IconImage imageName="logoJuliama" type="svg" />
        <Navbar />
      </Header>
    </>
  )
}
