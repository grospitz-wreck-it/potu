import { useEffect, useState } from "react"
import { runTurn } from "../../engine/gameLoop"
import { fetchContent, fetchTranslations } from "../../modules/content/contentFetcher"
import { createI18n } from "../../modules/i18n/i18nEngine"

export const useGame = () => {
  const [state, setState] = useState({
    economy: 60,
    stability: 60,
    happiness: 60,
    corruption: 10,
    unrest: 5,
    control: 20,
    turn: 1
  })

  const [content, setContent] = useState([])
  const [translations, setTranslations] = useState([])
  const [currentCard, setCurrentCard] = useState(null)
  const [lang, setLang] = useState("de")

  useEffect(() => {
    const init = async () => {
      const c = await fetchContent()
      const t = await fetchTranslations()

      setContent(c)
      setTranslations(t)
    }

    init()
  }, [])

  const t = createI18n(translations, lang)

  const swipe = async (direction) => {
    const result = await runTurn(state, direction)

    setState(result.state)
    setCurrentCard(result.card)
  }

  return {
    state,
    currentCard,
    swipe,
    t,
    lang,
    setLang
  }
}
