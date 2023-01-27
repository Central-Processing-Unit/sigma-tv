package com.zackmurry.sigmatv.service

import com.zackmurry.sigmatv.dao.MatchDao
import com.zackmurry.sigmatv.dao.TeamDao
import com.zackmurry.sigmatv.entity.Match
import com.zackmurry.sigmatv.entity.Team
import com.zackmurry.sigmatv.exception.NotFoundException
import org.springframework.stereotype.Service

@Service
class TeamService(val teamDao: TeamDao, val matchDao: MatchDao) {
    fun createTeamIfNotExists(number: Int) {
        if (!teamDao.existsById(number)) {
            teamDao.save(
                Team(
                    number,
                    0,
                    0,
                    0,
                    0
                )
            )
        }
    }

    fun updateTeamScores(number: Int) {
        val teamOpt = teamDao.findById(number)
        if (teamOpt.isEmpty) {
            throw NotFoundException()
        }
        val matches = matchDao.findByTeamNumber(number)
        var pointsSum = 0
        var autonSum = 0
        var driverSum = 0
        var penaltySum = 0
        var wins = 0
        var losses = 0
        for (match in matches) {
            if (number == match.blueTeamOne || number == match.blueTeamTwo) {
                pointsSum += match.blueScore!!
                autonSum += match.blueAutonomous!!
                driverSum += match.blueDriver!!
                penaltySum += match.blueRedPenalty!!
                if (match.blueScore!! > match.redScore!!) {
                    wins++
                } else {
                    losses++
                }
            } else {
                pointsSum += match.redScore!!
                autonSum += match.redAutonomous!!
                driverSum += match.blueDriver!!
                penaltySum += match.redBluePenalty!!
                if (match.redScore!! > match.blueScore!!) {
                    wins++
                } else {
                    losses++
                }
            }
        }
        val team = teamOpt.get()
        val numMatches = matches.size
        team.averagePoints = pointsSum / numMatches
        team.averageAuton = autonSum / numMatches
        team.averageDriver = driverSum / numMatches
        team.averagePenalty = penaltySum / numMatches
        team.wins = wins
        team.losses = losses
        teamDao.save(team)
    }

    fun getLeaderboard(): List<Team> {
        return teamDao.getLeaderboard()
    }

}