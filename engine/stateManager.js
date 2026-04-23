import { supabase } from "../api/supabaseClient"

export const saveGameState = async (state) => {
  await supabase
    .from("game_state")
    .update({
      turn: state.turn + 1
    })
    .eq("id", 1)
}
