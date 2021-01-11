import React, { useState } from 'react'
import { FileInput, FormThemeProvider } from '@react-md/form'
import { Button, Grid, GridCell } from 'react-md'

import { Wrapper, Wrapper2, TextH2, ErrorText, WrapperImage } from './styles'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../../stores/slices/user'
import { useHistory } from 'react-router-dom'

const SignUpStep2 = () => {
  const [file, setFile] = useState()
  const [imageURL, setPreviewImageURL] = useState()
  const [imageError, setImageError] = useState()
  const user = useSelector(getUser)
  const history = useHistory()

  useEffect(() => {
    document.title = 'BR | Sign Up - Step 2'
  }, [])

  const onImageChange = async (event) => {
    // reset
    setPreviewImageURL()
    setImageError()

    const file = event.target.files[0]

    if (!file) { return setImageError("Required") }

    const type = file.type.split('/').pop().toLowerCase()

    if (type !== 'png' && type !== 'jpg' && type !== 'jpeg') {
      return setImageError("Invalid Image")
    }

    if (file.size > 2 * 1024 * 1024) {
      return setImageError("File size must be less than 2MB")
    }

    setFile(file)
    setPreviewImageURL(URL.createObjectURL(file))
  }

  const handleOnSubmit = () => {
    if (!file) { return alert("Please choose your image") }

    const data = new FormData()
    data.append('file', file)

    fetch('http://localhost:5000/user/upload-avatar', {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': user.token
      }
    }).then(response => response.json())
      .then(result => {
        if (result.status === 200) {
          return history.push('/list-all')
        } else {
          alert('Upload Avatar Failed. ' + result.error)
        }
      })
      .catch(error => alert(error))
  }

  return (
    <Wrapper>
      <Wrapper2>
        <TextH2>Add Avatar</TextH2>
        <h3>Step 2</h3>
        <FormThemeProvider theme={"outline"}>
          <Grid columns={1}>
            <GridCell colSpan={6}>
              <FileInput
                id="configurable-file-input"
                onChange={onImageChange}
                theme='clear'
                themeType='contained'
                buttonType='text'
                accept='image/*'
              >
                Choose Your Image
              </FileInput>
            </GridCell>

            <GridCell colSpan={6}>
              {imageURL &&
                (<WrapperImage>
                  <img src={imageURL} alt={file.name} width="50%" />
                </WrapperImage>)
              }
              {imageError && (<ErrorText>{imageError}</ErrorText>)}
            </GridCell>

            <GridCell colSpan={6}>
              <Button type="submit" id="contained-button-2" theme="primary" themeType="contained" style={{ float: "right" }} onClick={handleOnSubmit}>Submit</Button>
            </GridCell>
          </Grid>
        </FormThemeProvider>
      </Wrapper2>
    </Wrapper >
  )
}

export default SignUpStep2
