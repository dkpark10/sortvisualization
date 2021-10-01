export const SETSHUFFLELIST = 'SETLISTSHUFFLE' as const;

export interface State {
  shuffleList: number[];
};

interface Action {
  type: string;
  payload: number[];
}

const initialState: State = {
  shuffleList: [0]
};

// action creator
export const setShuffleList = (diff: number[]) => ({
  type: SETSHUFFLELIST,
  payload: diff
});

// 리듀서
export default function gameReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case SETSHUFFLELIST:
      return {
        ...state,
        shuffleList: action.payload
      }
    default:
      return state;
  }
}
