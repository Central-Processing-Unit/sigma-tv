package com.zackmurry.sigmatv.dao

import com.zackmurry.sigmatv.entity.Team
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*
import javax.transaction.Transactional

@Transactional
interface TeamDao : JpaRepository<Team, Int> {

}
