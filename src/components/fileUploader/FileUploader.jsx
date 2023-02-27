import React from 'react'
import styled from 'styled-components'

const ButtonFile = styled.button`
  width: 188px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.terciary};
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 70px;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.primary};
  }
`

const InputFile = styled.input`
  display: none;
`

const FileUploader = (props) => {
  const hiddenFileInput = React.useRef(null)

  const handleUploadButton = (event) => {
    hiddenFileInput.current.click()
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    props.handleFile(fileUploaded)
  }

  return (
    <>
      <ButtonFile onClick={handleUploadButton}>Upload a file</ButtonFile>
      <InputFile type="file" accept="image/*" ref={hiddenFileInput} onChange={handleChange} />
    </>
  )
}

export default FileUploader
