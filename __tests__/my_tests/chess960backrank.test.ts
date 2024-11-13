import { generateChess960BackRank } from '../../src/chess960';

test('should generate a valid Chess960 back rank', () => {
    const backRank = generateChess960BackRank();
    
    // Check that the back rank has exactly 8 pieces
    expect(backRank.length).toBe(8);
    
    const kingIndex = backRank.indexOf('K');
    const rookIndices = [backRank.indexOf('R'), backRank.lastIndexOf('R')];
    const bishopIndices = backRank
        .map((piece, idx) => (piece === 'B' ? idx : -1))
        .filter(idx => idx !== -1);

    // The King must be between the two rooks
    expect(rookIndices[0]).toBeLessThan(kingIndex);
    expect(kingIndex).toBeLessThan(rookIndices[1]);

    // Bishops must be on opposite-colored squares
    expect(bishopIndices.some(idx => idx % 2 === 0)).toBe(true);
    expect(bishopIndices.some(idx => idx % 2 === 1)).toBe(true);
});
