import StarRating from './components/StarRating'

import './App.css'

export default function App() {
  return (
    <StarRating
      style={{ backgroundColor: 'lightblue' }}
      onDoubleClick={(e) => alert('double click')}
    />
  )
}
