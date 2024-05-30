이젠아카데미<br>
과제 기간 : 0520 ~ 0530 <br>
preview : https://kkyoung635.github.io/ezen_homework/burger_cart/dist<br>

<hr />
<h2>메뉴 리스트, 주문현황, 장바구니, 팝업 기능 구현</h2>
<p>컨셉 : 햄버거 메뉴 </p>
<ul>
  <ol>redux 진도 이후 과제진헹</ol>
  <ol>1. 상태관리 구조설계</ol>
  <ol>2. 메뉴리스트 출력 </ol>
  <ol>3. 주문 시 주문표 노출, 입력값 장바구니로 전달</ol>
  <ol>4. 장바구니 데이터 유무에 따라 화면 노출</ol>
  <ol>5. 장바구니에서 수량 직접 변경 + 주문표에서 수량 추가 건도 적용</ol>
  <ol>6. 메뉴추가, 수량수정, 주문완료 각각 팝업 띄우기</ol>
  
</ul>

<h3>컴포넌트 구조</h3>
<pre>
  
├── public
│   └── images
└── src
    ├── assets
    │   ├── api
    │   │    └── cartData.jsx
    │   └── css
    │        └── board.scss
    ├── components
    │   ├── Cart.jsx
    │   ├── menuList
    │   │    ├── Menu.jsx
    │   │    └── MenuList.jsx
    │   ├── orderList
    │   │    └── OrderList.jsx
    │   ├── cartSheet
    │   │    ├── CartSheet.jsx
    │   │    └── CartItem.jsx
    │   └── message
    │        └── Message.jsx
    ├── store
    │   ├── modules.jsx
    │   │    ├── getThunks.js
    │   │    ├── menuSlice.js
    │   └── index.jsx
    ├── styled
    │   ├── GlobalStyle.js
    │   └── style.scss
    └── App.jsx
</pre>
