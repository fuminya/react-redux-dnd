
// reducerは単なる関数
// 現在のstateとactionを受け取り、新しいstateを返す

const dnd = (state, action) => {
  switch (action.type) {
    case 'DRAG_START':
      return {
          className: action.className,
          target: action.target
      }
    default:
      return state
  }
};

export default dnd;