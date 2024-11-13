import { generateChess960BackRank } from '../../src/chess960';

test('should generate different back ranks on successive calls', () => {
    const backRank1 = generateChess960BackRank();
    const backRank2 = generateChess960BackRank();
    
    // Ensure that two successive calls generate different back ranks
    expect(backRank1).not.toEqual(backRank2);
});
