import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from 'unique-names-generator';

export function generateRandomPseudo(): string {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: '',
    style: 'capital',
  }); // big_red_donkey
}
