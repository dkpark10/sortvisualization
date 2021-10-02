'use strict'

export function createRainbowColor(): string[] {
  
  let rainbowColor: string[] = new Array();
  const max: number = 255;
  const divi: number = 3;

  function convertHex(num: number): string {
    const hex: string = num.toString(16);
    return hex.length > 1 ? hex : `0${hex}`;
  }

  // 빨강 -> 노랑
  (function () {
    const cvtRedtoYellow: string[] = Array.from({ length: max / divi }, 
      (v: number, index: number) => index * divi)
      .map((element: number, index: number) => {
        const hex = convertHex(element);
        return `#FF${hex}00`;
      });
    rainbowColor = rainbowColor.concat(cvtRedtoYellow);
  })();

  // 노랑 -> 초록
  (function () {
    const cvtYellowtoGreen: string[] = Array.from({ length: max / divi }, 
      (v: number, index: number) => ((max / divi) - index) * divi)
      .map((element: number, index: number) => {
        const hex = convertHex(element);
        return `#${hex}FF00`;
      });
    rainbowColor = rainbowColor.concat(cvtYellowtoGreen);
  })();

  // 초록 -> 아쿠아
  (function () {
    const cvtGreentoAqua: string[] = Array.from({ length: max / divi }, 
      (v: number, index: number) => index * divi)
      .map((element: number, index: number) => {
        const hex = convertHex(element);
        return `#00FF${hex}`;
      });
    rainbowColor = rainbowColor.concat(cvtGreentoAqua);
  })();

  // 아쿠아 -> 파랑
  (function () {
    const cvtAquatoBlue: string[] = Array.from({ length: max / divi }, 
      (v: number, index: number) => ((max / divi) - index) * divi)
      .map((element: number, index: number) => {
        const hex = convertHex(element);
        return `#00${hex}FF`;
      });
    rainbowColor = rainbowColor.concat(cvtAquatoBlue);
  })();

  // 파랑 -> 보라
  (function () {
    const cvtBluetoViolet: string[] = Array.from({ length: max / divi }, 
      (v: number, index: number) => index * divi)
      .map((element: number, index: number) => {
        const hex = convertHex(element);
        return `#${hex}00FF`;
      });
    rainbowColor = rainbowColor.concat(cvtBluetoViolet);
  })();

  return rainbowColor;
}

console.log('.....');
