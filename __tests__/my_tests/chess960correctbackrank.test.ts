import { initializeChess960Board } from '../../src/chess960';

test('should initialize the back ranks for both sides correctly', () => {
    const board = initializeChess960Board();
    
    const whiteBackRank = board[0];
    const blackBackRank = board[7];
    
    // The white back rank must be a valid Chess960 back rank
    expect(whiteBackRank.length).toBe(8);
    expect(whiteBackRank.some(piece => piece === 'K')).toBe(true); // Check for the King
    expect(whiteBackRank.some(piece => piece === 'R')).toBe(true); // Check for the Rooks
    expect(whiteBackRank.some(piece => piece === 'B')).toBe(true); // Check for the Bishops
    expect(whiteBackRank.some(piece => piece === 'Q')).toBe(true); // Check for the Queen
    
    // The black back rank should be the lowercase version of the white back rank
    expect(blackBackRank).toEqual(whiteBackRank.map(piece => piece.toLowerCase()));
});
