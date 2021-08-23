// ? Task:Создай функцию scrollingText, которая принимает строку как параметр, последовательно переставляет все символы в строке с нулевого индекса на последний и возвращает массив с полученными комбинациями в этой строке в верхнем регистре.

// Пример

// scrollingText("robot")

// Возвращает:
// [ "ROBOT",
//   "OBOTR",
//   "BOTRO",
//   "OTROB",
//   "TROBO" ]






// Solution 1
function scrollingText(word) {
  const scrollTextArr = [];
  const arrWord = word.toUpperCase().split("");

  scrollTextArr.push(arrWord.join(""));

  for (let i = 1; i < word.length; i++) {
    const e = arrWord.shift();

    arrWord.push(e);

    const elem = arrWord.join("");

    scrollTextArr.push(elem);
  }

  return scrollTextArr;
}
console.log(scrollingText("robot"));


// ! Explanation: shift push join split for 
