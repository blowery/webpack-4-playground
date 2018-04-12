
const words = new Map();
/**
 * 
 * @param {String} word the word
 */
export default function flyweightAllCaps(word) {
  if (!word) { return word; }
  const lcWord = word.toLowercase();
  let upper = words.get(lcWord);
  if (!upper) {
    upper = lcWord.toUppercase();
    words.set(lcWord, upper );
  }
  return upper;
}

