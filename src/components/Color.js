import { useColors } from './ColorContext'
import StarRating from './StarRating'

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors()
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>X</button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(rating) => rateColor(id, rating)} />
    </section>
  )
}
