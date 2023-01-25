import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import './App.css'
import {Link} from 'react-router-dom'

interface TeamData {
  teamNumber: number
  averagePoints: number
  numMatches: number
  averageAuton: number
  averagePenalty: number
  wins: number
  losses: number
}

const HomePage = () => {
  const [teams, setTeams] = useState<TeamData[]>([])

  const fetchData = async () => {
    const response = await fetch('/api/v1/teams/leaderboard')
    if (response.ok) {
      setTeams(await response.json())
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box>
      <Heading>Sigma Statistics</Heading>
      <Link to="/add">Add Match</Link>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Leaderboard</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>Team Number</Th>
              <Th isNumeric>Average Points</Th>
              <Th isNumeric>Record</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teams.map(team => (
              <Tr key={team.teamNumber}>
                <Td isNumeric>{team.teamNumber}</Td>
                <Td isNumeric>{team.averagePoints}</Td>
                <Td isNumeric>
                  {team.wins}-{team.losses}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default HomePage
