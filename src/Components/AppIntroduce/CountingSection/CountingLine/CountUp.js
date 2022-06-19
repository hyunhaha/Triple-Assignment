import React, { useEffect, useState } from 'react'
import { slowDown } from '../../../../util/utilFun'

const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = new Date()
    let current = 0

    const interval = () => {
      current = new Date() - start
      const percent = slowDown(current / duration)
      setCount(Math.ceil(target * percent))
      if (current < duration) {
        window.requestAnimationFrame(interval)
      } else {
        console.log(new Date() - start)
      }
    }
    window.requestAnimationFrame(interval)
  }, [duration, target])

  return <span>{count}</span>
}

export default CountUp
