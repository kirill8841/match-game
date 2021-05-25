/**
 * Make the optimal decision about the amout of matches the AI should take.
 * @property {number} aiMatches - the amount of matches the AI 
 * (the decision algorithm) has.
 * @property {number} totalMatches - the total amout of matches that can be taken
 */
function pickMatch(aiMatches, totalMatches) {

  /**
   * Row index - number of matches remaining
   * Columns:
   * Column 0 - you have an even number of matches and it's your turn
   * Column 1 - you have an even number of matches and it's the player's turn
   * Column 2 - you have and odd number of matches and it's your turn
   * Colums 3 - you have and odd number of matches and it's the player's turn
   * 
   * The boolean value at given indices [n, m] means that if there are n matches
   * left and you are at m position (column) according to the turn and the parity
   * of the matches. The true value means it's a winning position, and false
   * means that if the other player does everything right, you'll lose.
   * 
   * This is the pattern only for a game where users pick either 1, 2, or 3 matches.
   * The number of matches overall is only restricted to being odd to avoid
   * ties. The given pattern repeats every eight matches.
   */
  const gameWinningTable = [
    [true, true, false, false],
    [false, true, true, false],
    [true, false, true, false],
    [true, false, true, false],
    [false, false, true, true],
    [true, false, false, true],
    [true, false, true, false],
    [true, false, true, false]
  ]

  // Choosing one match is the default strategy in case the current 
  // position is losing
  let optimalChoice = 1;

  if (aiMatches % 2 === 0) {

    // Check if choosing 1 match results to be the winning stategy
    if (totalMatches >= 1 && gameWinningTable[(totalMatches - 1) % 8][3]) {
      optimalChoice = 1;

    // Check if choosing 2 matches results to be the winning stategy
    } else if (totalMatches >= 2 && gameWinningTable[(totalMatches - 2) % 8][1]) {
      optimalChoice = 2;

    // Check if choosing 3 matches results to be the winning stategy
    } else if (totalMatches >= 3 && gameWinningTable[(totalMatches - 3) % 8][3]) {
      optimalChoice = 3;
    }

  } else {

    // Check if choosing 1 match results to be the winning stategy
    if (totalMatches >= 1 && gameWinningTable[(totalMatches - 1) % 8][1]) {
      optimalChoice = 1;

    // Check if choosing 2 matches results to be the winning stategy
    } else if (totalMatches >= 2 && gameWinningTable[(totalMatches - 2) % 8][3]) {
      optimalChoice = 2;

    // Check if choosing 3 matches results to be the winning stategy
    } else if (totalMatches >= 3 && gameWinningTable[(totalMatches - 3) % 8][1]) {
      optimalChoice = 3;
    }
  }

  return optimalChoice;
}


export default pickMatch;