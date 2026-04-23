export const Card = ({ card, t }) => {
  if (!card) return <div>Loading...</div>

  return (
    <div style={{
      background: "#111",
      color: "white",
      padding: 20,
      borderRadius: 20,
      minHeight: 300,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div>
        <h2>{t(card.title_key)}</h2>
        <p>{t(card.body_key)}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>👈 {t(card.left_choice?.text_key)}</span>
        <span>{t(card.right_choice?.text_key)} 👉</span>
      </div>
    </div>
  )
}
