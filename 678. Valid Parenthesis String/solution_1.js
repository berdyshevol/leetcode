/**
 * @param {string} s
 * @return {boolean}
 * This is a solution using two stacks.
 * This is a brutal solution, but it works.
 * O(n) space complexity
 * O(n^2) time complexity. Because:
 * pop, push is O(1), but shift is O(n).
 * The way to improve it is take in consideration that these arrays are sorted,
 * and to use two pointers.
 */
var checkValidString = function(s) {
  let bracket = [];
  let wildcard = [];
  for (let i = 0; i < s.length; i+=1) {
      if (s[i] === '(') bracket.push(i);
      if (s[i] === '*') wildcard.push(i);
      if (s[i] === ')') {
          if (bracket.length > 0) {bracket.pop()}
          else {
              if (wildcard.length === 0) {
                  return false;
              }
              else {
                  bracket.pop();
                  wildcard.pop();
              }
          }
      }
  }

  while (bracket.length > 0 && wildcard.length > 0) {
      if (bracket[bracket.length -1] < wildcard[wildcard.length -1]) {
          bracket.pop();
          wildcard.pop();
      } else {
          return false;
      }
  }

  return bracket.length === 0;
  
}
