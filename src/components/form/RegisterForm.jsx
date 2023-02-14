import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import loginSchema from '../../../modules/user/user.schema'

import Input from '../input/RadioInput'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
  align-items: center;
  width: 250px;

  @media (max-width: 425px) {
    width: 300px;
    margin: 10px 0;
  }
`

const StyledNormalInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 70px;
`

const InputFile = styled.input`
  border-radius: 50px;
  box-decoration-break: none;
`

const StyledRadioSelectors = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 600px;
  height: 30px;

  background-color: ${(props) => props.theme.primary};
  border-radius: 50px;

  color: ${(props) => props.theme.secondary};
`

const RadioInput = styled.input``

const Button = styled.button`
  cursor: pointer;
  width: 188px;
  height: 35px;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 20px;
  background-color: ${(props) => props.theme.terciary};
  color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;

  :hover {
    background-color: ${(props) => props.theme.primary};
  }
`

export default function Form() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: joiResolver(loginSchema)
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 201) {
        router.push('/')
      }
    } catch (err) {
      if (err.response.data.code === 11000) {
        setError(err.response.data.duplicatedKey, {
          type: 'duplicated'
        })
      }
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(handleForm)}>
        <StyledNormalInput>
          <Input
            label="Produto"
            type="name"
            placeholder="Insira o nome do produto"
            name="Name"
            control={control}
          />
          <Input
            label="Preço"
            type="number"
            placeholder="Insira o valor do produto"
            name="Preco"
            control={control}
          />
          <InputFile
            label="Imagem"
            type="file"
            accept="image/*"
            placeholder="Anexar imagem"
            name="Preco"
            control={control}
          />
        </StyledNormalInput>

        <StyledRadioSelectors>
          <RadioInput type="radio" name="tradicionais" control={control} />
          <label>Doces tradicionais</label>
          <RadioInput type="radio" name="finos" control={control} />
          <label>Doces finos</label>
          <RadioInput type="radio" name="BeT" control={control} />
          <label>Bolos & Tortas</label>
          <RadioInput type="radio" name="BeM" control={control} />
          <label>Biscoitos & Merengues</label>
        </StyledRadioSelectors>

        <Button type="submit" disabled={Object.keys(errors).length > 0}>
          Salvar
        </Button>

        <Button type="submit" disabled={Object.keys(errors).length > 0}>
          Cancelar
        </Button>
      </StyledForm>
    </>
  )
}
