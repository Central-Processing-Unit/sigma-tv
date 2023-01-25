package com.zackmurry.sigmatv.dao

import com.zackmurry.sigmatv.entity.Match
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.util.*
import javax.transaction.Transactional

@Transactional
interface MatchDao : JpaRepository<Match, UUID> {

    @Query("SELECT * FROM match WHERE blue_team_one = :teamNumber OR blue_team_two = :teamNumber OR red_team_one = :teamNumber OR red_team_two = :teamNumber", nativeQuery = true)
    fun findByTeamNumber(@Param("teamNumber") teamNumber: Int): List<Match>

}

