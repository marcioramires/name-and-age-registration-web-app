import React, { useState, useRef } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import Button from '../../components/Button'
import ContainerItems from "../../components/ContainerItems"
import H1 from "../../components/Title"

import {
    Container,
    Image,
    InputLabel,
    Input,
} from './styles'

const App = () => {

    const [users, setUsers] = useState([])
    const inputName = useRef()
    const inputAge = useRef()
    const history = useHistory()

    async function addNewUser() {
        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name: inputName.current.value,
            age: inputAge.current.value,
        })

        setUsers([...users, newUser,])
   
        history.push("/users")
    }

    return (
        <Container>
            <Image alt="logo" src={People} />
            <ContainerItems>
                <H1>Olá!</H1>

                <InputLabel>Nome</InputLabel>
                <Input ref={inputName} placeholder="None" />

                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} placeholder="None" />

                <Button onClick={addNewUser}>Cadastrar<img alt="seta" src={Arrow} /></Button>
            </ContainerItems>
        </Container>
    )
}

export default App