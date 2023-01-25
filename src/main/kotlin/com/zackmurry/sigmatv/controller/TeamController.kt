package com.zackmurry.sigmatv.controller

import com.zackmurry.sigmatv.entity.Team
import com.zackmurry.sigmatv.service.TeamService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RequestMapping("/api/v1/teams")
@RestController
class TeamController(val teamService: TeamService) {

    @GetMapping("/leaderboard")
    fun getLeaderboard(): List<Team> = teamService.getLeaderboard()

}