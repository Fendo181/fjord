#!/usr/bin/env node

const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];


// 対象の文字をすべて小文字にする
function toLowerCase(str) {
  return str.toLowerCase();
}

const toLowerCaseResult = cats.map(toLowerCase);
for (const cat of toLowerCaseResult) {
  console.log(cat);
}
