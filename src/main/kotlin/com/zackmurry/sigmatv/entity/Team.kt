package com.zackmurry.sigmatv.entity

import javax.persistence.Entity
import javax.persistence.Id

@Entity
class Team(
    @Id var teamNumber: Int? = null,
    var averagePoints: Int? = null,
    var numMatches: Int? = null,
    var averageAuton: Int? = null,
    var averageDriver: Int? = null,
    var averagePenalty: Int? = null,
    var wins: Int? = null,
    var losses: Int? = null
)
