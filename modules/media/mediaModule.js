export const mediaModule = (state, card) => {
  const newState = { ...state }

  // einfacher Effekt
  if (card.type === "ad") {
    newState.happiness += 1
  }

  return newState
}
