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

// filterを使ってJから始まる文字だけを表示する
function lStartCat(cat) {
  return cat.startsWith('J');
}
const catsFilter = cats.filter(lStartCat);
console.log(catsFilter);
