package com.zackmurry.sigmatv.service

import com.zackmurry.sigmatv.dao.MatchDao
import com.zackmurry.sigmatv.entity.Match
import com.zackmurry.sigmatv.model.MatchCreateRequest
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service

val logger: Logger = LoggerFactory.getLogger(MatchService::class.java)

@Service
class MatchService(val matchDao: MatchDao) {
    fun createMatch(req: MatchCreateRequest) {
        logger.info(req.name)
        val match = Match(
            req.name,
            req.teams.blueTeamOne,
            req.teams.blueTeamTwo,
            req.teams.redTeamOne,
            req.teams.redTeamTwo,
            req.blueScore.score,
            req.blueScore.autonomous,
            req.blueScore.driver,
            req.blueScore.endGame,
            req.blueScore.penalty,
            req.redScore.score,
            req.redScore.autonomous,
            req.redScore.driver,
            req.redScore.endGame,
            req.redScore.penalty,
        )
        matchDao.save(match)
    }
}
