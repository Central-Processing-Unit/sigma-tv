package com.zackmurry.sigmatv.controller;

import com.zackmurry.sigmatv.model.MatchCreateRequest
import com.zackmurry.sigmatv.service.MatchService
import com.zackmurry.sigmatv.service.TeamService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RequestMapping("/api/v1/matches")
@RestController
class MatchController(val matchService: MatchService, val teamService: TeamService) {

    @PostMapping("")
    fun createMatch(@RequestBody req: MatchCreateRequest) {
        teamService.createTeamIfNotExists(req.teams.blueTeamOne)
        teamService.createTeamIfNotExists(req.teams.blueTeamTwo)
        teamService.createTeamIfNotExists(req.teams.redTeamOne)
        teamService.createTeamIfNotExists(req.teams.redTeamTwo)
        matchService.createMatch(req)
    }

}
