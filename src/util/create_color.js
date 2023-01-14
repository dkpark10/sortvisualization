/**
 *
 * @param {number} divi -무지개색 나눌 수
 * @returns {string[]}
 */
export const createRainbowColors = (divi = 15) => {
  const MAX = 255;

  const convertHex = (num) => {
    const hex = num.toString(16);
    return hex.length > 1 ? hex : `0${hex}`;
  };

  /**
   * @description 빨강 -> 노랑
   */
  const cvtRedtoYellow = Array.from({ length: MAX / divi }, (v, i) => i * divi)
    .map((element) => {
      const hex = convertHex(element);
      return `#FF${hex}00`;
    });

  /**
   * @description 노랑 -> 초록
   */
  const cvtYellowtoGreen = Array.from({ length: MAX / divi }, (v, i) => (MAX / divi - i) * divi)
    .map((element) => {
      const hex = convertHex(element);
      return `#${hex}FF00`;
    });

  /**
   * @description 초록 -> 아쿠아
   */
  const cvtGreentoAqua = Array.from({ length: MAX / divi }, (v, i) => i * divi)
    .map((element) => {
      const hex = convertHex(element);
      return `#00FF${hex}`;
    });

  /**
   * @description 아쿠아 -> 파랑
   */
  const cvtAquatoBlue = Array.from({ length: MAX / divi }, (v, ㅑ) => (MAX / divi - ㅑ) * divi)
    .map((element) => {
      const hex = convertHex(element);
      return `#00${hex}FF`;
    });

  /**
   * @description 파랑 -> 보라
   */
  const cvtBluetoViolet = Array.from({ length: MAX / divi }, (v, i) => i * divi)
    .map((element) => {
      const hex = convertHex(element);
      return `#${hex}00FF`;
    });

  return [
    ...cvtRedtoYellow,
    ...cvtYellowtoGreen,
    ...cvtGreentoAqua,
    ...cvtAquatoBlue,
    ...cvtBluetoViolet,
  ];
};
