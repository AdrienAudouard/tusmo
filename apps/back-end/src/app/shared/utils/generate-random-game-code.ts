export function generateRandomGameCode(size = 6): string {
  const possibilities = '0123456789';
  return [...Array(size)]
    .map(() => {
      return possibilities.charAt(getRandomInt(possibilities.length));
    })
    .join('');
}

function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}
