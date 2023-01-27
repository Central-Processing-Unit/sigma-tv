import React, {useEffect, useState} from 'react'
import {
  Box,
  Flex,
  Heading,
  Img,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import './App.css'

interface TeamData {
  teamNumber: number
  averagePoints: number
  numMatches: number
  averageAuton: number
  averageDriver: number
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
      <Flex justifyContent="space-between">
        <Heading ml="2vw">Sigma Statistics</Heading>
        <Img src="/first-logo.png" width="150px" />
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Leaderboard</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>Team Number</Th>
              <Th isNumeric>Average Points</Th>
              <Th isNumeric>Record</Th>
              <Th isNumeric>Matches</Th>
              <Th isNumeric>Average Autonomous</Th>
              <Th isNumeric>Average Teleop</Th>
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
                <Td isNumeric>{team.numMatches}</Td>
                <Td isNumeric>{team.averageAuton}</Td>
                <Td isNumeric>{team.averageDriver}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default HomePage
