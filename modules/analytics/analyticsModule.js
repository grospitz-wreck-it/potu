export const analyticsModule = (state) => {
  const newState = { ...state }

  newState.lastUpdated = Date.now()

  return newState
}
