import React from 'react'
import useCountUp from '../hooks/useCountUp'
import AppearAnimation from './AppearAnimation'

const AppIntroduce = (props) => {
  const count = useCountUp(700)
  const count1 = useCountUp(100)
  const count2 = useCountUp(670)

  return (
    <div>
      <AppearAnimation duration={700} delay={100}>
        2021년 12월 기준
      </AppearAnimation>
      <AppearAnimation duration={700} delay={200}>
        <div>{count}만 명의 여행자</div>
        <div>{count1}만 개의 여행 리뷰</div>
        <div>{count2}만 개의 여행 일정</div>
      </AppearAnimation>
      <AppearAnimation duration={700} delay={300}>
        <div>
          <div> 2018 구글 플레이 스토어</div>
          <div>올해의 앱 최우수상 수상</div>
        </div>
        <div>
          <div>2018 애플 앱스토어</div>
          <div>오늘의 여행앱 선정</div>
        </div>
      </AppearAnimation>
    </div>
  )
}
export default AppIntroduce
