import React, { FormEvent, useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'

interface Teams {
  blueTeamOne: string
  blueTeamTwo: string
  redTeamOne: string
  redTeamTwo: string
}

interface TeamScore {
  score: string
  autonomous: string
  driver: string
  endGame: string
  penalty: string
}

const AddPage = () => {
  const [matchName, setMatchName] = useState('')
  const [teams, setTeams] = useState<Teams>({
    blueTeamOne: '',
    blueTeamTwo: '',
    redTeamOne: '',
    redTeamTwo: ''
  })
  const [blueScore, setBlueScore] = useState<TeamScore>({
    score: '0',
    autonomous: '0',
    driver: '0',
    endGame: '0',
    penalty: '0'
  })
  const [redScore, setRedScore] = useState<TeamScore>({
    score: '0',
    autonomous: '0',
    driver: '0',
    endGame: '0',
    penalty: '0'
  })
  const [errorMessage, setErrorMessage] = useState<String>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      Number(blueScore.autonomous) + Number(blueScore.driver) + Number(blueScore.endGame) + Number(blueScore.penalty) !==
      Number(blueScore.score)
    ) {
      setErrorMessage('Blue score must equal the sum of its components')
      return
    }
    if (
      Number(redScore.autonomous) + Number(redScore.driver) + Number(redScore.endGame) + Number(redScore.penalty) !==
      Number(redScore.score)
    ) {
      setErrorMessage('Red score must equal the sum of its components')
      return
    }
    setErrorMessage('')
    console.log('submit')
    const response = await fetch('/api/v1/matches', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: matchName,
        teams: {
          blueTeamOne: Number(teams.blueTeamOne),
          blueTeamTwo: Number(teams.blueTeamTwo),
          redTeamOne: Number(teams.redTeamOne),
          redTeamTwo: Number(teams.redTeamTwo)
        },
        blueScore: {
          score: Number(blueScore.score),
          autonomous: Number(blueScore.autonomous),
          driver: Number(blueScore.driver),
          endGame: Number(blueScore.endGame),
          penalty: Number(blueScore.penalty)
        },
        redScore: {
          score: Number(redScore.score),
          autonomous: Number(redScore.autonomous),
          driver: Number(redScore.driver),
          endGame: Number(redScore.endGame),
          penalty: Number(redScore.penalty)
        }
      })
    })
    if (response.ok) {
      window.location.reload()
    }
  }

  return (
    <Box>
      <Heading>Add match</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Match Name</FormLabel>
          <Input type='text' value={matchName} onChange={e => setMatchName(e.target.value)} placeholder='Qualification 1' />
        </FormControl>
        <Heading as='h6' fontSize='18px' my='15px'>
          Teams
        </Heading>
        <Flex>
          <FormControl isRequired mt='5px' pr='5px'>
            <FormLabel>Blue Team 1</FormLabel>
            <Input
              type='text'
              value={teams.blueTeamOne}
              onChange={e => setTeams(t => ({ ...t, blueTeamOne: e.target.value }))}
              placeholder='20323'
            />
          </FormControl>
          <FormControl isRequired mt='5px' pl='5px'>
            <FormLabel>Blue Team 2</FormLabel>
            <Input
              type='text'
              value={teams.blueTeamTwo}
              onChange={e => setTeams(t => ({ ...t, blueTeamTwo: e.target.value }))}
              placeholder='13092'
            />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl isRequired mt='5px' pr='5px'>
            <FormLabel>Red Team 1</FormLabel>
            <Input
              type='text'
              value={teams.redTeamOne}
              onChange={e => setTeams(t => ({ ...t, redTeamOne: e.target.value }))}
              placeholder='20323'
            />
          </FormControl>
          <FormControl isRequired mt='5px' pl='5px'>
            <FormLabel>Red Team 2</FormLabel>
            <Input
              type='text'
              value={teams.redTeamTwo}
              onChange={e => setTeams(t => ({ ...t, redTeamTwo: e.target.value }))}
              placeholder='13092'
            />
          </FormControl>
        </Flex>
        <Heading as='h6' fontSize='18px' my='15px'>
          Blue Scores
        </Heading>
        <Flex>
          <FormControl isRequired mt='5px' pr='5px'>
            <FormLabel>Score</FormLabel>
            <Input
              type='text'
              value={blueScore.score}
              onChange={e => setBlueScore(s => ({ ...s, score: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
          <FormControl isRequired mt='5px' pl='5px'>
            <FormLabel>Autonomous</FormLabel>
            <Input
              type='text'
              value={blueScore.autonomous}
              onChange={e => setBlueScore(s => ({ ...s, autonomous: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl isRequired mt='5px' pr='5px'>
            <FormLabel>Driver-Controlled</FormLabel>
            <Input
              type='text'
              value={blueScore.driver}
              onChange={e => setBlueScore(s => ({ ...s, driver: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
          <FormControl isRequired mt='5px' pl='5px'>
            <FormLabel>End Game</FormLabel>
            <Input
              type='text'
              value={blueScore.endGame}
              onChange={e => setBlueScore(s => ({ ...s, endGame: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
        </Flex>
        <Heading as='h6' fontSize='18px' my='15px'>
          Red Scores
        </Heading>
        <Flex>
          <FormControl isRequired mt='5px' pr='5px'>
            <FormLabel>Score</FormLabel>
            <Input
              type='text'
              value={redScore.score}
              onChange={e => setRedScore(s => ({ ...s, score: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
          <FormControl isRequired mt='5px' pl='5px'>
            <FormLabel>Autonomous</FormLabel>
            <Input
              type='text'
              value={redScore.autonomous}
              onChange={e => setRedScore(s => ({ ...s, autonomous: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl isRequired mt='5px' pr='5px'>
            <FormLabel>Driver-Controlled</FormLabel>
            <Input
              type='text'
              value={redScore.driver}
              onChange={e => setRedScore(s => ({ ...s, driver: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
          <FormControl isRequired mt='5px' pl='5px'>
            <FormLabel>End Game</FormLabel>
            <Input
              type='text'
              value={redScore.endGame}
              onChange={e => setRedScore(s => ({ ...s, endGame: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
        </Flex>
        <Heading as='h6' fontSize='18px' my='15px'>
          Penalties
        </Heading>
        <Flex>
          <FormControl isRequired mt='5px' pr='5px'>
            <FormLabel>Against Red</FormLabel>
            <Input
              type='text'
              value={blueScore.penalty}
              onChange={e => setBlueScore(s => ({ ...s, penalty: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
          <FormControl isRequired mt='5px' pl='5px'>
            <FormLabel>Against Blue</FormLabel>
            <Input
              type='text'
              value={redScore.penalty}
              onChange={e => setRedScore(s => ({ ...s, penalty: e.target.value }))}
              placeholder='0'
            />
          </FormControl>
        </Flex>
        <Button mt='15px' type='submit'>
          Create
        </Button>
        <Text color='red'>{errorMessage}</Text>
      </form>
    </Box>
  )
}

export default AddPage
