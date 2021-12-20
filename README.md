# 오징어게임 심리테스트 
![notion_header](https://user-images.githubusercontent.com/85085844/146677929-d30f3272-68a4-4afe-bb3f-288affe52c76.png)

<br>

## 🦑 전세계는 지금 오징어게임 열풍!

넷플릭스 드라마 "오징어 게임"에 과몰입한 사람들은 주목!!

실제 드라마의 장면들로 구성된 심리테스트를 진행하면서 
내가 어떤 캐릭터와 비슷한지 분석해봐요 ! ㅇㅅㅁ

<br>

## 🙆‍♀️ 사용자
- 넷플릭스 드라마 "오징어 게임"을 재밌게 본 사람
- 긴박한 상황의 심리테스트를 해보고 싶은 사람

<br>

## 🖥 사이트
https://squid-games.site

<br>

## ⏱ 개발 기간
- 2021.11~ 2021.12
- 사용자의 피드백을 받아 개선할 예정

<br>

## ⚙️ 기술 스택
- Front
  - Vue.JS
  - Nuxt.JS

<br>

## 🛠 프로젝트 구조
```bash
├── assets
│   ├── css
│   │   ├── Final_MBTI.css
│   │   ├── reset.css
│   │   └── styles.css
│   ├── image
│       ├── easterEgg
│       └── final
├── components
│   ├── EventPage.vue
│   ├── ImgLoading.vue
│   ├── LinkShare.vue
│   ├── TestLoading.vue
│   ├── TimeOut.vue
│   └── testpopup.vue
├── layouts
│   └── error.vue
├── nuxt.config.js
├── pages
│   ├── index.vue
│   ├── ko
│   │   ├── index.vue
│   │   ├── questions.vue
│   │   ├── result
│   │   │   ├── ENFJ.vue
│   │   │   ├── ENFP.vue
│   │   │   ├── ENTJ.vue
│   │   │   ├── ENTP.vue
│   │   │   ├── ESFJ.vue
│   │   │   ├── ESFP.vue
│   │   │   ├── ESTJ.vue
│   │   │   ├── ESTP.vue
│   │   │   ├── Final_Modal.vue
│   │   │   ├── INFJ.vue
│   │   │   ├── INFP.vue
│   │   │   ├── INTJ.vue
│   │   │   ├── INTP.vue
│   │   │   ├── ISFJ.vue
│   │   │   ├── ISFP.vue
│   │   │   ├── ISTJ.vue
│   │   │   └── ISTP.vue
│   │   └── tutorial.vue
│   ├── questions.vue
│   ├── result
│   │   ├── ENFJ.vue
│   │   ├── ENFP.vue
│   │   ├── ENTJ.vue
│   │   ├── ENTP.vue
│   │   ├── ESFJ.vue
│   │   ├── ESFP.vue
│   │   ├── ESTJ.vue
│   │   ├── ESTP.vue
│   │   ├── Final_Modal.vue
│   │   ├── INFJ.vue
│   │   ├── INFP.vue
│   │   ├── INTJ.vue
│   │   ├── INTP.vue
│   │   ├── ISFJ.vue
│   │   ├── ISFP.vue
│   │   ├── ISTJ.vue
│   │   └── ISTP.vue
│   └── tutorial.vue
├── static
│   └── image
│       └── meta
└── store
```
<br>

## 📑 기획 및 설계 
* [스프린트](https://www.notion.so/ddusi/Sprint-Board-43ccbde594cc41c0b54a82d446ef44db)
* 페이지 상세 설명
  1. 메인 페이지
  
  ![Main](https://user-images.githubusercontent.com/85085844/146678339-6e60bc07-22ba-48b6-9f0c-98bafc3afe8d.png)
  
  - 테스트하기를 누르면 라우터 링크를 통해 튜토리얼 페이지로 이동한다.
  - SNS 공유하기는 등록된 메타태그를 통해 이미지와 함께 현재 링크가 공유된다. 
  
  <br>
  
  2. 튜토리얼
  
  ![Tutorial](https://user-images.githubusercontent.com/85085844/146678406-5cdf6d88-ed7b-47c7-897a-3632b38281e1.png)
  
  - 자동 클릭되는 메소드를 이용하여 15초가 지나면 버튼이 자동으로 클릭되어 라우터로 연결된 질문지로 이동한다.
  
  <br>
  
  3. 질문지
  
  ![Q1](https://user-images.githubusercontent.com/85085844/146678506-8d4897e1-f422-4325-bfe1-05ec963c2e7a.png)
  
  - 튜토리얼과 마찬가지로 자동 클릭 메소드가 존재하여 시간이 지나면 랜덤으로 선택하게 된다.
  - 해당 버튼에 키 값을 부여하여 선택할 때마다 값이 쌓이도록 구현하여 값이 일정 갯수 이상일 때 결과문자(mbti)로 생성한다.
  - 마지막 질문지까지 선택하면 결과 문자가 생성되는데 이 문자를 라우터 path로 사용하여 해당하는 결과 페이지로 이동하게 된다. 

  4. 결과
  
  ![결과 - 궁합 - 좋음](https://user-images.githubusercontent.com/85085844/146704652-de40f622-cdde-40f7-8b77-81556feb2763.png)
  
  - SNS에 공유해야만 나머지 결과를 볼 수 있다. 
  - 유형별 궁합을 클릭하면 해당 결과를 볼 수 있다.
  - 전체 결과보기를 클릭하면 모든 유형의 결과를 볼 수 있다.

<br>

## 🔖 역할 분담
- 팀장 : 조원상
- FE :  김수진
- FE,BE : 조원상
- 디자인 : 진승희
- 기획 : 노준서
