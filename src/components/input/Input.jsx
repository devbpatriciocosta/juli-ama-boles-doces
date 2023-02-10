import styled from 'styled-components'
import { useController } from 'react-hook-form'

const InputContainer = styled.div`
  min-width: 90%;
`

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 50px;
  width: 100%;
  height: 41px;
  padding: 15px 10px;
  color: ${(props) => props.theme.secondary};
  box-sizing: border-box;

  ::placeholder {
    color: ${(props) => props.theme.secondary};
    font-family: 'Gabriela';
    font-size: 15px;
  }

  transition: 0.5s ease-in-out;

  :hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
  }
  &:focus {
    outline: none;
  }
  ${(props) => props.error && `border: 2px solid ${props.theme.error};`}
`

const InputLabel = styled.p`
  font-size: 18px;
  font-family: 'Gabriela';
  margin-bottom: 5px;
  color: ${(props) => props.theme.secondary};
`

const ErrorLabel = styled.span`
  color: ${(props) => props.theme.error};
  font-weight: bold;
  font-size: 12px;
`

const errorMessage = {
  'string.empty': 'Este campo é obrigatório',
  'string.email': 'Digite um e-mail válido',
  // eslint-disable-next-line prettier/prettier
  'duplicated': 'Já existe uma conta registrada com esse valor'
}

const Input = ({ label, name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <StyledInput placeholder={label} error={error} {...props} value={value} onChange={onChange} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
}
export default Input
