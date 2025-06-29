import { useState } from 'react'
import Card from './card'
import UserCard from './UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Card/>
     <UserCard
        name="Alice Johnson"
        age={32}
        bio="Alice is a passionate UI/UX designer who has worked with major tech companies around the globe, building interfaces that delight users."
      />
    </div>
    </>
  )
}

export default App
