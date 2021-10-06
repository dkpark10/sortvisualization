const createRainbowColor = (): string[] => {

  const max: number = 255;
  const divi: number = 3;

  const convertHex = (num: number): string => {
    const hex: string = num.toString(16);
    return hex.length > 1 ? hex : `0${hex}`;
  }

  // 빨강 -> 노랑
  const cvtRedtoYellow: string[] = Array.from({ length: max / divi },
    (v: number, index: number) => index * divi)
    .map((element: number, index: number) => {
      const hex = convertHex(element);
      return `#FF${hex}00`;
    });

  // 노랑 -> 초록
  const cvtYellowtoGreen: string[] = Array.from({ length: max / divi },
    (v: number, index: number) => ((max / divi) - index) * divi)
    .map((element: number, index: number) => {
      const hex = convertHex(element);
      return `#${hex}FF00`;
    });

  // 초록 -> 아쿠아
  const cvtGreentoAqua: string[] = Array.from({ length: max / divi },
    (v: number, index: number) => index * divi)
    .map((element: number, index: number) => {
      const hex = convertHex(element);
      return `#00FF${hex}`;
    });

  // 아쿠아 -> 파랑
  const cvtAquatoBlue: string[] = Array.from({ length: max / divi },
    (v: number, index: number) => ((max / divi) - index) * divi)
    .map((element: number, index: number) => {
      const hex = convertHex(element);
      return `#00${hex}FF`;
    });

  // 파랑 -> 보라
  const cvtBluetoViolet: string[] = Array.from({ length: max / divi },
    (v: number, index: number) => index * divi)
    .map((element: number, index: number) => {
      const hex = convertHex(element);
      return `#${hex}00FF`;
    });

  return [
    ...cvtRedtoYellow
    , ...cvtYellowtoGreen
    , ...cvtGreentoAqua
    , ...cvtAquatoBlue
    , ...cvtBluetoViolet
  ];
}

export default createRainbowColor();
