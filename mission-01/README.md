# mission-01

![이미지](https://github.com/Bambiru/home-work/assets/116716953/d43909d1-d975-4b8d-b999-5df24336eaee)

## Markup

- main.container
  - article.card \* 3
    - h2.card-logo
      - img
    - p.card-title
    - img.product-img
    - button.purchase-btn
      - span

![레이아웃](https://github.com/Bambiru/home-work/assets/116716953/de3674c4-b70b-48e4-b76f-c713a290adda)

###

- fontello가 적용이 안되어서 한참을 애먹었다

  - 네트워크를 살펴보니, 아예 font파일을 받아오지 못하고 있었다.
    경로때문이라는 것을 알게되었다.
    그냥 가져온 파일일지라도 한 번 들여다보는 습관을 가져야 할 것 같다.

- 처음에 class="card-link-normal" 부분의 article들을
  section으로 묶었다가 같은 구조를 사용하고 싶어
  구조를 수정하였다.
  매번 flex-wrap을 nowrap으로만 사용했었는데, wrap을 이용하여,
  구조를 무의미하게 묶지않고 css로 처리 할 수 있었다.

  - card-link-wide에서의 로고와 이미지 부분에서도 마찬가지였다.

  > HTML

  ```html
  <article class="card card-link-wide">
    <h2 class="card-logo">
      <img src="./images/logo01.png" alt="오뚜기" />
    </h2>
    <p class="card-title">따뜻한 차 향기</p>
    <img class="product-img" src="./images/product01.png" alt="꿀 생강차" />
    <button class="purchase-btn" aria-label="꿀 생강차 구매하기">
      <span class="icon-angle-right"></span>
    </button>
  </article>
  ```

  > CSS

  ```css
  .card-link-wide {
    width: 502px;
    height: 310px;
    font-size: 24px;
    display: flex;
    flex-flow: column wrap;

    justify-content: center;
    padding: 20px 28px;
    margin-bottom: 16px;
  }
  ```
