// Выберите любую реализованную функцию из тренажера JavaScript, раздел «Функции».

// Задание №3 из тренажера: Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения. 
// Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.

export function repeatWord(word, count) {
    let result ='';
    if (isNaN(count)) {
      result = 'error: not a numeric value'
    }
    if (count < 0) {
      result = 'error: negative number entered'
    }
    for (let i = 1; i <= count; i = i + 1) {
        if (i < count) {
            result += word + i + ', ';
          } else {
            result += word + i;
          }
    }

    return result
}

repeatWord('word', 3);