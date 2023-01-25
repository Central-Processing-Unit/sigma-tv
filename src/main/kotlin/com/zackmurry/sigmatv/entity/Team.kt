package com.zackmurry.sigmatv.entity

import javax.persistence.Entity
import javax.persistence.Id

//CREATE TABLE IF NOT EXISTS team
//(
//team_number INT NOT NULL UNIQUE PRIMARY KEY,
//average_points INT NOT NULL DEFAULT 0,
//num_matches INT NOT NULL DEFAULT 0,
//average_auton INT NOT NULL DEFAULT 0,
//average_penalty INT NOT NULL DEFAULT 0
//);

@Entity
class Team(
    @Id var teamNumber: Int? = null,
    var averagePoints: Int? = null,
    var numMatches: Int? = null,
    var averageAuton: Int? = null,
    var averagePenalty: Int? = null
)
