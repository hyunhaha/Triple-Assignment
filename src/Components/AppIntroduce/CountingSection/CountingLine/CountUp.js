import React, { useEffect, useState } from 'react'

const slowDown = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
const frameDuration = 1000 / 60

const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const totalFrames = Math.round(duration / frameDuration)
    let current = 0
    const countUpTimer = setInterval(() => {
      current += 1
      const percent = slowDown(current / totalFrames)
      setCount(target * percent)
      if (current === totalFrames) {
        clearInterval(countUpTimer)
      }
    }, frameDuration)
  }, [duration, target])

  return <span>{Math.floor(count)}</span>
}

export default CountUp
