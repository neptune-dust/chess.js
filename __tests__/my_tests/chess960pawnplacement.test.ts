import { initializeChess960Board } from '../../src/chess960';

test('should place pawns in correct rows for both sides', () => {
    const board = initializeChess960Board();
    
    // White pawns should be placed on the second row
    expect(board[1]).toEqual(Array(8).fill('P'));
    
    // Black pawns should be placed on the second-to-last row
    expect(board[6]).toEqual(Array(8).fill('p'));
});
