export const advisorModule = (state, card) => {
  const newState = { ...state }

  // Beispiel: korrupte Umgebung verstärkt Korruption
  if (newState.corruption > 50) {
    newState.corruption += 1
  }

  return newState
}
