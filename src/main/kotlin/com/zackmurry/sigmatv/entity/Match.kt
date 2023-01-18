package com.zackmurry.sigmatv.entity

import javax.persistence.Entity
import javax.persistence.Id

//CREATE TABLE IF NOT EXISTS match
//(
//match_name VARCHAR(32) NOT NULL UNIQUE,
//blue_team_one INT REFERENCES team(team_number) ON DELETE SET NULL,
//blue_team_two INT REFERENCES team(team_number) ON DELETE SET NULL,
//red_team_one INT REFERENCES team(team_number) ON DELETE SET NULL,
//red_team_two INT REFERENCES team(team_number) ON DELETE SET NULL,
//blue_score INT NOT NULL,
//blue_autonomous INT NOT NULL,
//blue_driver INT NOT NULL,
//blue_end_game INT NOT NULL,
//blue_red_penalty INT NOT NULL,
//red_score INT NOT NULL,
//red_autonomous INT NOT NULL,
//red_driver INT NOT NULL,
//red_end_game INT NOT NULL,
//red_blue_penalty INT NOT NULL
//);
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
    var redRedPenalty: Int? = null,
)
