export const applyDecision = (state, card, swipe) => {
  let effects = {}

  if (swipe === "right") {
    effects = card.right_choice?.effects || {}
  }

  if (swipe === "left") {
    effects = card.left_choice?.effects || {}
  }

  const newState = { ...state }

  Object.keys(effects).forEach(key => {
    newState[key] = (newState[key] || 0) + effects[key]
  })

  return newState
}
