package com.zackmurry.sigmatv.model

class MatchCreateRequest(
    val name: String,
    val teams: MatchTeams,
    val blueScore: MatchTeamScores,
    val redScore: MatchTeamScores
)
