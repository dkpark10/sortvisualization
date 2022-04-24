import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Toggle from './componenets/atoms/toggle';

describe("<Counter />", () => {
  it("increase", () => {
    const utils = render(<Toggle onChange={() => { }} />);
    console.log(utils);
    const number = utils.getByText("0");
    const plusButton = utils.getByText("inc");

    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent("2"); // jest-dom 의 확장 matcher 사용
    expect(number.textContent).toBe("2"); // textContent 를 직접 비교
  });
});