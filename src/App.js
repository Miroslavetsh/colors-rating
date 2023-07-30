import React, { useState } from 'react'
import { v4 } from 'uuid'

import colorData from './data/colors.json'
import ColorList from './components/ColorList'
import AddColorForm from './components/AddColorForm'

export default function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ]
          setColors(newColors)
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id)
          setColors(newColors)
        }}
      />
    </>
  )
}
