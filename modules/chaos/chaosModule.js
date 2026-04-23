export const chaosModule = (state) => {
  const newState = { ...state }

  if (newState.corruption > 70) {
    newState.unrest = (newState.unrest || 0) + 5
  }

  if (newState.unrest > 60) {
    newState.stability -= 3
  }

  return newState
}
