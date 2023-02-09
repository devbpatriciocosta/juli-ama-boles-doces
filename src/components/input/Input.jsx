import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 50px;
  width: 235px;
  height: 41px;
  padding: 20px;
  color: ${(props) => props.theme.secondary};
`

export default function Input() {
  return <StyledInput />
}
