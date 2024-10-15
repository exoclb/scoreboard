function updateScore(team, points) {
    const scoreElement = document.getElementById(`score${team}`);
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += points;
    scoreElement.textContent = currentScore;
}

function resetScores() {
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
}