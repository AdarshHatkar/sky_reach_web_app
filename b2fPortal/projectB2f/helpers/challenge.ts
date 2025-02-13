export function calculateChallengePrizeAmount(entryPerPlayer: number) {
    if (entryPerPlayer < 10 || entryPerPlayer % 10 !== 0) {
        throw new Error("entryPerPlayer must be at least 10 and a multiple of 10.");
    }

    const prizeAmount = 2 * entryPerPlayer - 2 * entryPerPlayer * 0.1;
    return prizeAmount;
}
