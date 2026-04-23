import { fetchContent } from "../modules/content/contentFetcher"
import { selectContent } from "./contentEngine"
import { applyDecision } from "./decisionEngine"
import { runModules } from "./moduleRunner"
import { saveGameState } from "./stateManager"

export const runTurn = async (state, swipeDirection) => {
  // 1. Lade Content
  const content = await fetchContent()

  // 2. Wähle nächste Karte
  const card = selectContent(content, state)

  if (!card) return { state, card: null }

  // 3. Entscheidung anwenden
  const updatedState = applyDecision(state, card, swipeDirection)

  // 4. Module reagieren lassen
  const finalState = runModules(updatedState, card)

  // 5. State speichern
  await saveGameState(finalState)

  return {
    state: finalState,
    card
  }
}
