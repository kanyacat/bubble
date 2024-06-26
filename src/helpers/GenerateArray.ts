/**
 * Генерация случайного массива
 * @param {number} length - длина массива
 */
const generateArray = (length: number) =>
  [...new Array(length)].map(() => Math.round(Math.random() * 15));

export default generateArray;
