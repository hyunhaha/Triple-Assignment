import { useEffect, useState } from 'react'

const useAppear = () => {
  const [opacity, setOpacity] = useState(0)
  const [transY, setTransY] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
      setTransY(1)
    }, 0)
  }, [])
  return [opacity, transY]
}
export default useAppear
