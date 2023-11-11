# 이디야

## 폴더 구성

- mission-02
  - assets
    - favicon
    - images
  - css
    - base.css
    - mission-02.css
    - reset.css
    - style.css
    - theme.css
  - js
    - mission-02.js
  - misstion-02.html

## 데스크톱 로그인 페이지 구현

### 구조 마크업

- main
  - div.main-inner
    - div.login-headline
      - h1
      - p \* 2
    - form.login-form
      - fieldset
      - legend
      - div.user-form.user-email
        - input[type="email"]
        - label
        - span
        - em
      - div.user-form.user-password
        - input[type="password"]
        - label
        - span
        - em
      - div.email-save-checkbox
        - input[type="checkbox"]
        - label
    - div.buttons
      - button
      - a

### 구현 조건

이디야 시안에 `**로그인 페이지**`를 아래 조건에 맞게 반응형으로 구현한다.

모바일 - `max-width : 600px`

태블릿, 데스크탑 등 - `min-width : 600px`

  <details>
       <summary>상태 별 css 코드</summary>

```css
.user-form input:valid ~ span::after,
.user-form input:invalid:not(:placeholder-shown) ~ span::after {
  position: absolute;
  bottom: 8px;
  right: 8px;
  content: "";
  width: 16px;
  height: 16px;
}
<!--valid-- > 
.user-email input:valid ~ span::after {
  background: url(../assets/images/check.png) no-repeat;
  background-size: contain;
}

<!--invalid-- > 
.user-form input:invalid:not(:placeholder-shown) ~ span::after {
  background: url(../assets/images/warning.png) no-repeat;
  background-size: contain;
}
<!--password-- > 
  <!--hidden-- > 
.user-password input:valid ~ .hidden::after {
  background: url(../assets/images/hidden.png) no-repeat;
  background-size: contain;
}
  <!--visible-- > 
.user-password input:valid ~ .visible::after {
  background: url(../assets/images/visible.png) no-repeat;
  background-size: contain;
}
```

  </details>

1.  이메일, 패스워드 입력 서식이 normal 상태일 경우

    <img src="https://github.com/Bambiru/home-work/assets/116716953/ae7b6de2-3406-462b-9575-b91c12b380da" width="200"/>
    <img src="https://github.com/Bambiru/home-work/assets/116716953/5f8081fe-e818-4619-8fec-6f3a55cb0e59" width="480"/>

2.  이메일, 패스워드 입력 서식이 valid 상태일 경우

    <img src="https://github.com/Bambiru/home-work/assets/116716953/ac68083b-2576-4c93-97ea-e6ed3d1fd5df" width="200"/>
    <img src="https://github.com/Bambiru/home-work/assets/116716953/5eda8424-08a0-4ef3-8abe-e2ae41f73b42" width="480"/>

3.  이메일, 패스워드 입력 서식이 invalid 상태일 경우

    <img src="https://github.com/Bambiru/home-work/assets/116716953/0ee6ec5c-b145-4337-994d-6a858bae6a09" width="200"/>
    <img src="https://github.com/Bambiru/home-work/assets/116716953/86b3ece9-4104-4bd4-ba54-7d4c323943cd" width="480"/>

4.  패스워드 입력 값이 visible 상태일 경우

    <details>
          <summary>js코드</summary>

      ```js
      const statusIcon = document.querySelector("#status-icon");
      const userPassword = document.querySelector("#userPassword");

      console.log(userPassword.type);

      statusIcon.addEventListener("click", () => {
        if (statusIcon.className === "hidden") {
          statusIcon.className = "visible";
          userPassword.type = "text";
        } else if (statusIcon.className === "visible") {
          statusIcon.className = "hidden";
          userPassword.type = "password";
        }
      });
      ```

    </details>


    <img src="https://github.com/Bambiru/home-work/assets/116716953/b8ca48f2-308c-44c1-b209-d9c4eec6d400" width="200"/>
    <img src="https://github.com/Bambiru/home-work/assets/116716953/3716f121-39a8-4628-a9e6-c021c02cb00f" width="480"/>

1.  입력 서식이 focus 상태일 경우

    <img src="https://github.com/Bambiru/home-work/assets/116716953/b275b63b-8da1-4eea-ad46-f554a7f4fade" width="200"/>
    <img src="https://github.com/Bambiru/home-work/assets/116716953/c89d4e08-4e92-4030-ac36-daa804b7a8f3" width="480"/>
