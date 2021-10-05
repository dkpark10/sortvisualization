export const SETSHUFFLELIST = 'SETLISTSHUFFLE' as const;
export const SETSORTING = 'SETSORTING' as const;

export interface State {
  shuffleList: number[];
  isSorting: boolean;
};

interface Action {
  type: string;
  payload: number[];
  sorttoggle: boolean;
}

const initialState: State = {
  shuffleList: [0],
  isSorting: false
};

// action creator
export const setShuffleList = (diff: number[]) => ({
  type: SETSHUFFLELIST,
  payload: diff
});

export const setSorting = (diff: boolean) => ({
  type: SETSORTING,
  sorttoggle: diff
});

// 리듀서
export default function gameReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case SETSHUFFLELIST:
      return {
        ...state,
        shuffleList: action.payload
      }
    case SETSORTING:
      return {
        ...state,
        isSorting: action.sorttoggle
      }
    default:
      return state;
  }
}
