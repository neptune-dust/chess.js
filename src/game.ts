import { initializeChess960Board } from './chess960';
import * as Chess from './chess'; // Import all of chess.ts to access any required functions

export function initializeBoard(mode: 'traditional' | 'chess960' = 'traditional'): string[][] {
    if (mode === 'chess960') {
        return initializeChess960Board();
    } else {
        // Use chess.ts's default setup for traditional chess
        const board: string[][] = Array(8).fill(null).map(() => Array(8).fill(null));

        // Traditional setup
        board[0] = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
        board[1] = Array(8).fill('P'); // White pawns
        board[6] = Array(8).fill('p'); // Black pawns
        board[7] = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];

        return board;
    }
}

export function startGame(mode: 'traditional' | 'chess960' = 'traditional') {
    const board = initializeBoard(mode);

    // Initialize game state
    
    return {
        board,
        mode,
        // Additional game state properties
    };
}
