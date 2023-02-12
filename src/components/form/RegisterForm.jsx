import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import loginSchema from '../../../modules/user/user.schema'

import Input from '../input/Input'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
  align-items: center;
  width: 450px;

  @media (max-width: 425px) {
    width: 300px;
    margin: 10px 0;
  }
`

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
        <Input
          label="E-mail"
          type="email"
          placeholder="Insira seu e-mail"
          name="Name"
          control={control}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Insira sua senha"
          name="password"
          control={control}
        />
        <Button type="submit" disabled={Object.keys(errors).length > 0}>
          Entrar
        </Button>
      </StyledForm>
    </>
  )
}
