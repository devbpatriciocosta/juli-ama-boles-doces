import styled from 'styled-components'

import H3 from '../typography/H3'
import H4 from '../typography/H4'

const TimeInfoMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  border-right: 2px dashed ${(props) => props.theme.secondary};
`

const WorkingTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px dashed ${(props) => props.theme.secondary};
  padding: 20px;
`

const SecondaryWorkingTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const InsideWorkingTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 10px;
`

export default function TimeInfos() {
  return (
    <TimeInfoMainContainer>
      <WorkingTimeContainer>
        <H3>Horário de confeitaria & café</H3>
        <InsideWorkingTimeContainer>
          <H4>Seg - Sex</H4>
          <H4>7h às 20h</H4>
        </InsideWorkingTimeContainer>
        <InsideWorkingTimeContainer>
          <H4>Sábado</H4>
          <H4>7h às 21h</H4>
        </InsideWorkingTimeContainer>
        <InsideWorkingTimeContainer>
          <H4>Domingo</H4>
          <H4>7h às 18h</H4>
        </InsideWorkingTimeContainer>
      </WorkingTimeContainer>
      <WorkingTimeContainer>
        <H3>Horário para encomendas</H3>
        <InsideWorkingTimeContainer>
          <H4>Seg - Sex</H4>
          <H4>7h às 19h</H4>
        </InsideWorkingTimeContainer>
        <InsideWorkingTimeContainer>
          <H4>Sábado</H4>
          <H4>7h às 18h</H4>
        </InsideWorkingTimeContainer>
        <InsideWorkingTimeContainer>
          <H4>Domingo</H4>
          <H4>Retirada na loja</H4>
        </InsideWorkingTimeContainer>
      </WorkingTimeContainer>
      <SecondaryWorkingTimeContainer>
        <H3>Contatos & Localização</H3>
        <InsideWorkingTimeContainer>
          <H4>(85) 99727-5152</H4>
        </InsideWorkingTimeContainer>
        <InsideWorkingTimeContainer>
          <H4>juli.amadoces@gmail.com</H4>
        </InsideWorkingTimeContainer>
        <InsideWorkingTimeContainer>
          <H4>Rua dos Bolos, 171</H4>
        </InsideWorkingTimeContainer>
        <InsideWorkingTimeContainer>
          <H4>Fortaleza - CE</H4>
        </InsideWorkingTimeContainer>
      </SecondaryWorkingTimeContainer>
    </TimeInfoMainContainer>
  )
}
