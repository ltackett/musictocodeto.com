import {
  ADD_LINE,
  ADD_LINES,
  CLEAR_SCREEN,

  ADD_TO_CMD_HISTORY,
  SET_CMD_HISTORY_INDEX,
  INCREMENT_CMD_HISTORY_INDEX,
  DECREMENT_CMD_HISTORY_INDEX,

  SET_BOOTING,
  SET_BOOTED,
  SET_PATH,
  START_CMD,
  STOP_CMD,
} from './constants'

const click = () => new Audio('/click2.mp3').play()

// ============================================================================

export default (dispatch) => {

  const setBooting = (isBooting) => dispatch({ type: SET_BOOTING, isBooting })
  const setBooted = (isBooted) => dispatch({ type: SET_BOOTED, isBooted })
  const setPath = (path) => dispatch({ type: SET_PATH, path })
  const startCmd = () => dispatch({ type: START_CMD })
  const stopCmd = () => dispatch({ type: STOP_CMD })

  // ============================================================================

  const stdout = (data) => {
    if (Array.isArray(data)) {
      click()
      setTimeout(() => { click() }, 50);
      setTimeout(() => { click() }, 100);

      dispatch({
        type: ADD_LINES,
        lines: data
      })
    } else {
      click()
      dispatch({
        type: ADD_LINE,
        line: data
      })
    }
  }

  const clearScreen = () => dispatch({ type: CLEAR_SCREEN })

  // ============================================================================

  const incrementCmdHistoryIndex = () => dispatch({ type: INCREMENT_CMD_HISTORY_INDEX })
  const decrementCmdHistoryIndex = () => dispatch({ type: DECREMENT_CMD_HISTORY_INDEX })
  const setCmdHistoryIndex = (index) => dispatch({ type: SET_CMD_HISTORY_INDEX, index })
  const addToCmdHistory = (cmdObject) => dispatch({
    type: ADD_TO_CMD_HISTORY,
    cmdObject
  })

  // ============================================================================

  return {
    clearScreen,
    setBooting,
    setBooted,
    setPath,
    startCmd,
    stopCmd,
    stdout,
    incrementCmdHistoryIndex,
    decrementCmdHistoryIndex,
    setCmdHistoryIndex,
    addToCmdHistory,
  }
}
