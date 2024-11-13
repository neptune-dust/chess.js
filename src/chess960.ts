export function generateChess960BackRank(): string[] {
    const backRank = Array(8).fill(null);
    const pieces = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];

    let isValid = false;
    while (!isValid) {
        const shuffled = [...pieces].sort(() => Math.random() - 0.5);
        const kingIndex = shuffled.indexOf('K');
        const rookIndices = [shuffled.indexOf('R'), shuffled.lastIndexOf('R')];
        const bishopIndices = shuffled
            .map((piece, idx) => (piece === 'B' ? idx : -1))
            .filter(idx => idx !== -1);

        if (
            rookIndices[0] < kingIndex &&
            kingIndex < rookIndices[1] &&
            bishopIndices.some(idx => idx % 2 === 0) &&
            bishopIndices.some(idx => idx % 2 === 1)
        ) {
            backRank.splice(0, 8, ...shuffled);
            isValid = true;
        }
    }
    return backRank;
}

export function initializeChess960Board(): string[][] {
    const board: string[][] = Array(8).fill(null).map(() => Array(8).fill(null));

    const whiteBackRank = generateChess960BackRank();
    const blackBackRank = whiteBackRank.map(piece => piece.toLowerCase());

    board[0] = whiteBackRank;
    board[1] = Array(8).fill('P'); // White pawns
    board[6] = Array(8).fill('p'); // Black pawns
    board[7] = blackBackRank;

    return board;
}
