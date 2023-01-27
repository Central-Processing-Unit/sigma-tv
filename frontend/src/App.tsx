import React from 'react'
import logo from './logo.svg'
import {Box, ChakraProvider, Flex, Text} from '@chakra-ui/react'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomePage from './HomePage'
import AddPage from './AddPage'
import DeletePage from './DeletePage'

function App() {
  return (
    // ChakraProvider>
    <div>
      <ChakraProvider>
        <Box mx={{base: '5vw', lg: '20vw'}} my="5vh">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/delete" element={<DeletePage />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ChakraProvider>
    </div>
    // </ChakraProvider>
  )
}

export default App
