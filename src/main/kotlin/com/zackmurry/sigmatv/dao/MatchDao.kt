package com.zackmurry.sigmatv.dao

import com.zackmurry.sigmatv.entity.Match
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*
import javax.transaction.Transactional

@Transactional
interface MatchDao : JpaRepository<Match, UUID> {

}

