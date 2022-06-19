export const pasingToWord = (s) => {
  const [s1, s2] = s.split('의')
  const last = '의 ' + s2

  const regex1 = /[^0-9]/g
  const regex2 = /[0-9]/g
  const count = parseInt(s1.replace(regex1, ''))
  const unit = s1.replace(regex2, '')

  return [count, unit, last]
}

export const slowDown = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
