import React, {useEffect, useState} from 'react'
import {
  Box,
  Flex,
  Heading,
  IconButton,
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
import {DeleteIcon} from '@chakra-ui/icons'

interface MatchData {
  matchName: String
  blueTeamOne: number
  blueTeamTwo: number
  redTeamOne: number
  redTeamTwo: number
  blueScore: number
  blueAutonomous: number
  blueDriver: number
  blueEndGame: number
  blueRedPenalty: number
  redScore: number
  redAutonomous: number
  redDriver: number
  redEndGame: number
  redBluePenalty: number
  createdAt: number
}

const DeletePage = () => {
  const [matches, setMatches] = useState<MatchData[]>([])

  const fetchData = async () => {
    const response = await fetch('/api/v1/matches')
    if (response.ok) {
      setMatches(await response.json())
    }
  }

  const handleDelete = async (matchName: String) => {
    const response = await fetch(`/api/v1/matches/name/${matchName}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      window.location.reload()
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Heading ml="2vw">Delete Matches</Heading>
        <Img src="/first-logo.png" width="150px" />
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Matches</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>Match Name</Th>
              <Th isNumeric>Time Created</Th>
              <Th isNumeric>Blue Score</Th>
              <Th isNumeric>Red Score</Th>
              <Th isNumeric>Blue Teams</Th>
              <Th isNumeric>Red Teams</Th>
              <Th isNumeric>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {matches.map(match => (
              <Tr key={match.matchName + match.createdAt.toString()}>
                <Td isNumeric>{match.matchName}</Td>
                <Td isNumeric>{new Date(match.createdAt).getTime()}</Td>
                <Td isNumeric>{match.blueScore}</Td>
                <Td isNumeric>{match.redScore}</Td>
                <Td isNumeric>
                  {match.blueTeamOne + ' & ' + match.blueTeamTwo}
                </Td>
                <Td isNumeric>{match.redTeamOne + ' & ' + match.redTeamTwo}</Td>
                <Td isNumeric>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => handleDelete(match.matchName)}
                    icon={<DeleteIcon />}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default DeletePage
