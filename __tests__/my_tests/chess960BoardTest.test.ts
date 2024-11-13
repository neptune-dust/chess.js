import { generateChess960BackRank, initializeChess960Board } from '../../src/chess960';

describe('Chess960 Back Rank Generation', () => {
  it('Should have the king between the two rooks', () => {
    const backRank = generateChess960BackRank();
    const kingIndex = backRank.indexOf('K');
    const rookIndices = backRank
      .map((piece, index) => (piece === 'R' ? index : -1))
      .filter(index => index !== -1);

    expect(rookIndices.length).toBe(2);
    expect(rookIndices[0] < kingIndex && kingIndex < rookIndices[1]).toBe(true);
  });

  it('Should have bishops on opposite-colored squares', () => {
    const backRank = generateChess960BackRank();
    const bishopIndices = backRank
      .map((piece, index) => (piece === 'B' ? index : -1))
      .filter(index => index !== -1);

    expect(bishopIndices.length).toBe(2);
    expect(bishopIndices[0] % 2).not.toEqual(bishopIndices[1] % 2);
  });
});
