let gameStats = {
  gamesPlayed: 0,
  energy: 100,
  tasksCompleted: 0,
  moneyEarned: 0,
  gameOver: false,
};

// Function to update game stats
export function updateGameStats(updates) {
  gameStats = {
    ...gameStats,
    ...updates,
  };

  // You can now access the updated game stats anywhere in your Next.js app
  // For example:
  // console.log(gameStats.gamesPlayed, gameStats.energy, gameStats.tasksCompleted, gameStats.moneyEarned, gameStats.gameOver);
}

// Function to reset game stats
export function resetGameStats() {
  gameStats = {
    gamesPlayed: 0,
    energy: 100,
    tasksCompleted: 0,
    moneyEarned: 0,
    gameOver: false,
  };
}

export function getGameStats() {
  return { ...gameStats };
}
