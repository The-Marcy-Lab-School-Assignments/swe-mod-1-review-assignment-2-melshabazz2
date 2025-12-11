const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20
};

const team2 = { ...team1 };
team2.wins = 50;
team2.losses = 15;
console.log(team1, team2)

/* 
Part A: What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment below:

- Prediction: the wins and losses for team1 will update to team2's wins and losses

Part B: Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
Part C: Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)
*/