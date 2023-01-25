package com.zackmurry.sigmatv.service

import com.zackmurry.sigmatv.dao.MatchDao
import com.zackmurry.sigmatv.dao.TeamDao
import com.zackmurry.sigmatv.entity.Team
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
        // todo
    }
}