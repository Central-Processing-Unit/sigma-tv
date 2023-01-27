CREATE TABLE IF NOT EXISTS team
(
  team_number INT NOT NULL UNIQUE PRIMARY KEY,
  average_points INT NOT NULL DEFAULT 0,
  num_matches INT NOT NULL DEFAULT 0,
  average_auton INT NOT NULL DEFAULT 0,
  average_driver INT NOT NULL DEFAULT 0,
  average_penalty INT NOT NULL DEFAULT 0,
  wins INT NOT NULL DEFAULT 0,
  losses INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS match
(
    match_name VARCHAR(32) NOT NULL UNIQUE,
    blue_team_one INT REFERENCES team(team_number) ON DELETE SET NULL,
    blue_team_two INT REFERENCES team(team_number) ON DELETE SET NULL,
    red_team_one INT REFERENCES team(team_number) ON DELETE SET NULL,
    red_team_two INT REFERENCES team(team_number) ON DELETE SET NULL,
    blue_score INT NOT NULL,
    blue_autonomous INT NOT NULL,
    blue_driver INT NOT NULL,
    blue_end_game INT NOT NULL,
    blue_red_penalty INT NOT NULL,
    red_score INT NOT NULL,
    red_autonomous INT NOT NULL,
    red_driver INT NOT NULL,
    red_end_game INT NOT NULL,
    red_blue_penalty INT NOT NULL,
    created_at BIGINT NOT NULL
);
