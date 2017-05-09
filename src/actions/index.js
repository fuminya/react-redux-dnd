
// actionTodoというatcionCreatorを作成する
// actionCreatorは純粋な関数であり、actionを発行するのみ
// actionはactionTypeとデータで構成されるオブジェクト

// actionType
// * DRAG_START
// * DRAG_END
// * DRAG_OVER
// * DROP

export const dragStart = (target) => {
  return {
    type: 'DRAG_START',
    className: "drag-start",
    target
  }
}

// export const dragEnd = () => {
//   return {
//     type: 'DRAG_END',
//     className: "drag-end"
//   }
// }

// export const dragOver = () => {
//   return {
//     type: 'DRAG_OVER',
//     className: "drag-over"
//   }
// }

// export const drop = () => {
//   return {
//     type: 'DROP',
//     className: "drop"
//   }
// }
