package com.zackmurry.sigmatv.entity

import javax.persistence.Entity
import javax.persistence.Id

@Entity
class Match(
    @Id var matchName: String? = null,
    var blueTeamOne: Int? = null,
    var blueTeamTwo: Int? = null,
    var redTeamOne: Int? = null,
    var redTeamTwo: Int? = null,
    var blueScore: Int? = null,
    var blueAutonomous: Int? = null,
    var blueDriver: Int? = null,
    var blueEndGame: Int? = null,
    var blueRedPenalty: Int? = null,
    var redScore: Int? = null,
    var redAutonomous: Int? = null,
    var redDriver: Int? = null,
    var redEndGame: Int? = null,
    var redBluePenalty: Int? = null,
    var createdAt: Long? = null
)
