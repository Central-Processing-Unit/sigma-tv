import React from 'react'
import logo from './logo.svg'
import {Box, ChakraProvider, Flex, Heading, Text} from '@chakra-ui/react'
import './App.css'
import {Link} from 'react-router-dom'

const HomePage = () => (
  <Box>
    <Heading>Sigma Statistics</Heading>
    <Link to="/add">Add Match</Link>
  </Box>
)

export default HomePage
