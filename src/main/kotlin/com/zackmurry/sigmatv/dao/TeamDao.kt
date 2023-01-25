package com.zackmurry.sigmatv.dao

import com.zackmurry.sigmatv.entity.Team
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.util.*
import javax.transaction.Transactional

@Transactional
interface TeamDao : JpaRepository<Team, Int> {

    @Query("SELECT * FROM team ORDER BY average_points DESC", nativeQuery = true)
    fun getLeaderboard(): List<Team>

}
