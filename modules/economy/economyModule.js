export const economyModule = (state) => {
  const newState = { ...state }

  if (newState.stability < 40) {
    newState.economy -= 2
  }

  return newState
}
