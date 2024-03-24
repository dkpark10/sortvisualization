let rootElement = null;

export const setRoot = (target) => {
  if (rootElement) {
    throw new Error("루트가 이미 할당되어 있습니다.");
  }
  if (!target) {
    throw new Error("루트 엘리먼트가 없습니다 .");
  }
  rootElement = target;
};
