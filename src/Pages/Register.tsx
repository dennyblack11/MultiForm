import { useState } from "react";
import styled from "styled-components";
import {BiCamera} from "react-icons/bi"
import pix from "../assets/DennyImage.jpg"

const PageI =()  =>{

    return <Main>
      <CircleContainer>
        <Circle bg="#ff4400d5" cl="white">1</Circle>
        <Line />
        <Circle bg="#ff440013" cl="">2</Circle>
        <Line />
        <Circle bg="#ff440013" cl="">3</Circle>
      </CircleContainer>

      <Input placeholder="input your name" />
      <Input placeholder="input your email" />

      <ButtonHolder>
        <Button bg="#000" onClick={() => {
          localStorage.setItem("page", JSON.stringify(2))
          window.location.reload()
        }}>Next</Button>
      </ButtonHolder>
    </Main>;
  }

const PageII =()  =>{

  const x = JSON.parse(localStorage.getItem("page")!)
  console.log(x)


    return <Main>
      <CircleContainer>
        <Circle bg="#ff4400d5" cl="white">1</Circle>
        <Line />
        <Circle bg="#ff4400d5" cl="white">2</Circle>
        <Line />
        <Circle bg="#ff440013" cl="">3</Circle>
      </CircleContainer>

      <Input placeholder="input your password" />

      <ButtonHolder>
        <Button bg="#000"
        onClick={() => {
          localStorage.setItem("page", JSON.stringify(1))
          window.location.reload()
        }}>Prev</Button>
        <Button bg="#ff4400d5" onClick={() => {
          localStorage.setItem("page", JSON.stringify(3))
          window.location.reload()
        }}>Next</Button>
      </ButtonHolder>
    </Main>;
  }

const PageIII =()  =>{
  const [image, setImage] = useState<string>("")
  const [avatar, setAvatar] = useState<string>(pix)


  const x = JSON.parse(localStorage.getItem("page")!)
  console.log(x)

  const onHandleImage = (e: any) => {
    const file = e.target.files![0]
    const readyImage = URL.createObjectURL(file)

    setImage(file)
    setAvatar(readyImage)
  }
    return <Main>
      <CircleContainer>
        <Circle bg="#ff4400d5" cl="white">1</Circle>
        <Line />
        <Circle bg="#ff4400d5" cl="white">2</Circle>
        <Line />
        <Circle bg="#ff4400d5" cl="white">3</Circle>
      </CircleContainer>

      <Hold>

      <Img src={avatar} />
      <Input2 type="file" id= "id" 
      onChange={onHandleImage}/>
      <Label htmlFor="id">
        <BiCamera/>
      </Label>
      </Hold>

      <ButtonHolder>
        <Button bg="#000" 
        onClick={() => {
          localStorage.setItem("page", JSON.stringify(2))
          window.location.reload()
        }}>Prev</Button>
      </ButtonHolder>
    </Main>;
  }
const Register = () => {

  const x = JSON.parse(localStorage.getItem("page")!)
  console.log(x)
  return (
    <div>
      <Container>
        {
          x === 1 ? (<PageI/>) : x === 2 ? (<PageII/>) : x === 3 ? (<PageIII/>) : null
        }

        {/* <PageI /> */}
      </Container>
    </div>
  )

  
}

export default Register;

// const Main = styled.div``

const Label = styled.label`
width: 45px;
height: 45px;
background-color: #ff4400d5;
border-radius: 50%;
position: absolute;
bottom: 10px;
right: 245px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
font-size: 25px;
`

const Hold = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: relative;
`

const Input2 = styled.input`
display: none;
`

const Img = styled.img`
width: 180px;
height: 180px;
object-fit: cover;
border-radius: 50%;
background-color: #ff44007f ;
`

const Button = styled.div<{bg: string}>`
width: 70px;
height: 45px;
color: white;
background-color: ${({bg}) => bg};
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
cursor: pointer;
`
  

const ButtonHolder = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`

const Input = styled.input`
width: 100%;
height: 45px;
border: 1px solid #ff440094;
background-color: #fff;
margin: 10px 0;
outline: none;

&::placeholder{
  padding-left: 10px;
}
`

const Line = styled.div`
width: 70px;
height: 4px;
background-color: #ff4400;
margin: 0 10px;
`

const Circle = styled.div<{bg: string, cl: string}>`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bg}) => bg};
color: ${({cl}) => cl};
border: 1px solid #ff4400d5;
border-radius: 50%;
font-size: 20px;

`

const CircleContainer = styled.div`
width: 100%;
cursor: pointer;
margin-bottom: 20px;
display: flex;
justify-content: center;
align-items: center;
`

const Main = styled.div`
width: 600px;
min-height: 300px;
border: 2px solid #ff4400d5;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 40px;
flex-direction: column;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

`