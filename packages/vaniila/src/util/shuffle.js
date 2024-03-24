/* eslint-disable no-param-reassign */
export const shuffle = (list) => list
  .map((element, curidx, self) => {
    const random = Math.floor(Math.random() * self.length);
    self[curidx] = self[random];
    self[random] = element;
    return self;
  })[0];
