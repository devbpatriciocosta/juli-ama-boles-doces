import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import signUpSchema from '../../../modules/user/user.schema'

import Input from '../input/Input'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 10px;
  align-items: center;
  width: 350px;

  @media (max-width: 425px) {
    width: 300px;
    margin: 10px 0;
  }
`

const Button = styled.button`
  cursor: pointer;
  width: 188px;
  height: 35px;
  border: 2px solid white;
  border-radius: 20px;
  background-color: hsla(630, 60%, 50%, 0.9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  ${(props) => !props.disabled && 'cursor: pointer'}
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #3e8e41;
  }
  :active {
    box-shadow: 0 5px #666;
    transform: translateY(2px);
  }
  :disabled {
    background-color: #666;
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
    resolver: joiResolver(signUpSchema)
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/signIn`,
        data
      )
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
          label="Nome completo"
          placeholder="Insira seu nome completo"
          name="completeName"
          control={control}
        />
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
          placeholder="Crie sua senha"
          name="password"
          control={control}
        />
        <Button type="submit" disabled={Object.keys(errors).length > 0}>
          Cadastrar
        </Button>
      </StyledForm>
    </>
  )
}
