# Triple Assignment

## 배포링크

[https://hyunhaha.github.io/Triple-Assignment/](배포링크)

## 프로젝트 실행 방법

1. npm install
2. npm start
3. http://localhost:3000 에서 실행

## 사용한 기술과 선택한 이유

- styled-components : 컴포넌트 단위로 스타일을 지정해 줄 수 있어 리액트와 잘 어울리는 css 처리 방법이라 생각되어 사용하였습니다.
- styled-reset : 태그의 기본적으로 적용되어 있는 스타일을 초기화하기 위해 사용하였습니다.

## 주요 코드 설명

### 폴더 구조

```
├── public
│   └── images
└── src
    ├── App.js
    ├── App.test.js
    ├── Components
    │   ├── AppIntroduce
    │   │   ├── AppIntroduce.js
    │   │   ├── AwardSection
    │   │   │   ├── AwardSection.js
    │   │   │   └── Store.js
    │   │   ├── CountingSection
    │   │   │   ├── CountingLine
    │   │   │   │   ├── CountUp.js //숫자가 올라가는 애니메이션 컴포넌트
    │   │   │   │   └── CountingLine.js
    │   │   │   └── CountingSection.js
    │   │   └── LogoSection.js
    │   └── Section.js
    ├── hooks
    │   └── useAppear.js //등장 애니메이션 훅
    ├── index.js
    ├── logo.svg
    ├── styles
    │   ├── commons
    │   │   └── AppearAnimationStyle.js
    │   └── globalStyle.js
    └── util
        ├── lines.js
        └── utilFun.js

```

### 영역별 등장 애니메이션

- 커스텀 훅을 통해 컴포넌트가 마운트 되었을 때 투명도와 위치가 변화할 수 있도록 값을 받아왔습니다.
- 커스텀 훅을 통해 여러번 재사용이 가능하게 하였습니다.

### 숫자가 올라가는 애니메이션

- 처음 구현시 setInterval을 사용하여 1초에 60번 숫자가 변경되게 구현하였습니다. 하지만 시간 측정시 주어진 2초가 넘어가는 2.5초 정도가 나왔습니다. 더 정확한 애니메이션 구현을 위해 web API를 찾아 보면서 requestAnimationFrame 이라는 메소드를 사용하게 되었습니다. 이를 사용하여 브라우저의 다음 리페인트 전에 콜백함수를 실행하여 애니메이션을 업데이트 할 수 있습니다. 이렇게 구현하였을 때 2초에 거의 근접한 애니메이션을 볼 수 있었습니다.

- 또한, Easing 함수를 사용하여 시간에 따른 비율값을 점차 크게 받아 숫자 증가 속도가 느려지는 효과를 구현할 수 있었습니다.

- 이 애니메이션을 컴포넌트화 하여 여러번 재사용 할 수 있도록 하였습니다.

### 문구 분리

- 정규식을 이용하여 주어진 문구를 동적으로 분할 할 수 있도록 하였습니다.

### 컴포넌트

- 컴포넌트를 효과적으로 분리하여 최대한 재사용이 가능하도록 만들었습니다.
