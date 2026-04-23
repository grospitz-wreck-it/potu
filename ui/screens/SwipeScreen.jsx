import { useGame } from "../hooks/useGame"
import { Card } from "../components/Card"
import { SwipeHandler } from "../components/SwipeHandler"

export default function SwipeScreen() {
  const { currentCard, swipe, t, lang, setLang, state } = useGame()

  return (
    <div style={{
      padding: 20,
      maxWidth: 400,
      margin: "0 auto",
      fontFamily: "sans-serif"
    }}>

      {/* Language Switch */}
      <select value={lang} onChange={(e)=>setLang(e.target.value)}>
        <option value="de">DE</option>
        <option value="en">EN</option>
      </select>

      {/* Stats */}
      <div style={{ margin: "10px 0", fontSize: 12 }}>
        Econ: {state.economy} | Stab: {state.stability} | Corr: {state.corruption}
      </div>

      {/* Card */}
      <SwipeHandler onSwipe={swipe}>
        <Card card={currentCard} t={t} />
      </SwipeHandler>

      {/* Buttons fallback */}
      <div style={{ display: "flex", marginTop: 10 }}>
        <button onClick={()=>swipe("left")}>👈</button>
        <button onClick={()=>swipe("right")}>👉</button>
      </div>

    </div>
  )
}
