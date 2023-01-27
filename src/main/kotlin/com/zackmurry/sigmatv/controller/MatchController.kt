package com.zackmurry.sigmatv.controller;

import com.zackmurry.sigmatv.exception.NotFoundException
import com.zackmurry.sigmatv.model.MatchCreateRequest
import com.zackmurry.sigmatv.service.MatchService
import com.zackmurry.sigmatv.service.TeamService
import org.springframework.web.bind.annotation.*

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
        teamService.updateTeamScores(req.teams.blueTeamOne)
        teamService.updateTeamScores(req.teams.blueTeamTwo)
        teamService.updateTeamScores(req.teams.redTeamOne)
        teamService.updateTeamScores(req.teams.redTeamTwo)
    }

    @GetMapping("")
    fun getMatches() = matchService.getAllMatches()

    @DeleteMapping("/name/{name}")
    fun deleteMatch(@PathVariable name: String) {
        val matchOpt = matchService.getMatch(name)
        if (matchOpt.isEmpty) {
            throw NotFoundException()
        }
        matchService.deleteMatch(name)
        val match = matchOpt.get()
        teamService.updateTeamScores(match.blueTeamOne!!)
        teamService.updateTeamScores(match.blueTeamTwo!!)
        teamService.updateTeamScores(match.redTeamOne!!)
        teamService.updateTeamScores(match.redTeamTwo!!)
    }

}
