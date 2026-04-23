import { economyModule } from "../modules/economy/economyModule"
import { chaosModule } from "../modules/chaos/chaosModule"
import { advisorModule } from "../modules/advisors/advisorModule"
import { mediaModule } from "../modules/media/mediaModule"
import { analyticsModule } from "../modules/analytics/analyticsModule"

const modules = [
  economyModule,
  chaosModule,
  advisorModule,
  mediaModule,
  analyticsModule
]

export const runModules = (state, card) => {
  let updatedState = { ...state }

  modules.forEach(mod => {
    updatedState = mod(updatedState, card)
  })

  return updatedState
}
