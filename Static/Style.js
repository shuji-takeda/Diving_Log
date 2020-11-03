import css from 'styled-jsx/css';

export default <style>{`
body {
  font-family: @font-family-base;
  font-size: @font-size-base;
  line-height: @line-height-base;
  color: @text-color;
  background-color: @body-bg;
}
.header {
    border-top: 3px solid rgba(44,137,51,1.00);
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: rgba(255, 255, 255, 0.5) -1px 1px 1px inset, rgba(255, 255, 255, 0.8) -1px 1px 0;
    -moz-box-shadow: rgba(255, 255, 255, 0.5) -1px 1px 1px inset, rgba(255, 255, 255, 0.8) -1px 1px 0;
    box-shadow: rgba(255, 255, 255, 0.5) -1px 1px 1px inset, rgba(255, 255, 255, 0.8) -1px 1px 0;
    padding: 0 20px;
    overflow: hidden;
  }
  .logo{
    font-family: 'Amatic SC', cursive;
    position: relative;
    top: auto;
    left: auto;
    padding: 0px 0px 20px 0px;
    color: #666;
    text-shadow: -1px 1px rgba(255, 255, 255, .5);
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
}
element.style {
  position: relative;
  top: 0px;
  background: none;
}
  ul{
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    list-style: none;
  }
  li{
    padding-top: 0px;
  }
  .modal{
    display: none;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .footer {
    clear: both;
    margin: 80px 0 0;
    text-align : center;
    width: 100%;
    height: 100%;
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #cccccc), color-stop(100%, #d6d6d6));
    background-image: -webkit-linear-gradient(#bbbbbb 0%, #d6d6d6 100%);
    background-image: -moz-linear-gradient(#bbbbbb 0%, #d6d6d6 100%);
    background-image: -o-linear-gradient(#bbbbbb 0%, #d6d6d6 100%);
    background-image: linear-gradient(#bbbbbb 0%, #d6d6d6 100%);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: rgba(255, 255, 255, 1) 0 1px 0;
    -moz-box-shadow: rgba(255, 255, 255, 1) 0 1px 0;
    box-shadow: rgba(255, 255, 255, 1) 0 1px 0;
    font-family: 'Caveat', cursive;

  @media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
    clear: both;
    margin: 80px 0 0;
    text-align : center;
    width: 100%;
    height: 100%;
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #cccccc), color-stop(100%, #d6d6d6));
    background-image: -webkit-linear-gradient(#bbbbbb 0%, #d6d6d6 100%);
    background-image: -moz-linear-gradient(#bbbbbb 0%, #d6d6d6 100%);
    background-image: -o-linear-gradient(#bbbbbb 0%, #d6d6d6 100%);
    background-image: linear-gradient(#bbbbbb 0%, #d6d6d6 100%);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: rgba(255, 255, 255, 1) 0 1px 0;
    -moz-box-shadow: rgba(255, 255, 255, 1) 0 1px 0;
    box-shadow: rgba(255, 255, 255, 1) 0 1px 0;
    font-family: 'Caveat', cursive;
    }
  }
  .copy{
    clear: both;
    padding-top: 30px;
    text-shadow: -1px 1px rgba(255, 255, 255, .1);
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
  hr {
    margin:25px 0px;
  }
  tr {
    margin:0px;
  }
  th {
    font-size:14pt;
    font-weight:plain;
    text-align:left;
    padding:0px 20px;
    margin:0px;
    border-bottom:1px solid gray;
  }
  td {
    font-size:14pt;
    font-weight:plain;
    text-align:right;
    padding:0px 20px;
    margin:0px;
    border-bottom:1px solid gray;
  }
  .img{
    width:300px;
  }
  .p-media_thumb{
    position:relative;
    overflow:hidden;
    width:100%
  }
  .p-media_thumb::before{
    content:";
    display:block;
    padding-top:100%;
  }
  .p-media_thumb > img {
    position:absolute;
    object-fit:cover;
    object-position:center;
    top:0;
    left:0;
    width:100%;
    height:auto;
  }
  .map{
    width: 100%;
    height: 400px;
    background-color: grey;
  }

  //Header
  .brand {
    font-weight: bold;
    font-size: 20px; }
   
  .site-header {
    position: relative;
    background-color: #def7ff; }
   
  .site-header__wrapper {
    padding-top: 1rem;
    padding-bottom: 1rem; }
    @media (min-width: 600px) {
      .site-header__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0;
        padding-bottom: 0; } }
  @media (min-width: 600px) {
    .nav__wrapper {
      display: flex; } }
   
  @media (max-width: 599px) {
    .nav__wrapper {
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      z-index: -1;
      background-color: #d9f0f7;
      visibility: hidden;
      opacity: 0;
      transform: translateY(-100%);
      transition: transform 0.3s ease-out, opacity 0.3s ease-out; }
      .nav__wrapper.active {
        visibility: visible;
        opacity: 1;
        transform: translateY(0); } }
   
  .nav__item a {
    display: block;
    padding: 1.5rem 1rem; }
   
  .nav__toggle {
    display: none; }
    @media (max-width: 599px) {
      .nav__toggle {
        display: block;
        position: absolute;
        right: 1rem;
        top: 1rem; } }

  //Add Form
  .cp_iptxt {
    position: relative;
    width: 80%;
    margin: 40px 3%;
  }
  .cp_iptxt input[type='text'] {
    font: 15px/24px sans-serif;
    box-sizing: border-box;
    width: 100%;
    letter-spacing: 1px;
    padding-left: 4em;
  }
  .cp_iptxt input[type='text']:focus {
    outline: none;
  }
  .ef {
    padding: 7px 14px;
    transition: 0.4s;
    border: 1px solid #1b2538;
    background: transparent;
  }
  .ef ~ .focus_line:before,
  .ef ~ .focus_line:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    content: '';
    transition: 0.3s;
    background-color: #da3c41;
  }
  .ef ~ .focus_line:after {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
  .ef ~ .focus_line i:before,
  .ef ~ .focus_line i:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    content: '';
    transition: 0.4s;
    background-color: #da3c41;
  }
  .ef ~ .focus_line i:after {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
  .ef:focus ~ .focus_line:before,
  .ef:focus ~ .focus_line:after,
  .cp_iptxt.ef ~ .focus_line:before,
  .cp_iptxt.ef ~ .focus_line:after {
    width: 100%;
    transition: 0.3s;
  }
  .ef:focus ~ .focus_line i:before,
  .ef:focus ~ .focus_line i:after,
  .cp_iptxt.ef ~ .focus_line i:before,
  .cp_iptxt.ef ~ .focus_line i:after {
    height: 100%;
    transition: 0.4s;
  }
  .ef ~ label {
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 14px;
    width: 100%;
    transition: 0.3s;
    letter-spacing: 0.5px;
    color: #aaaaaa;
  }
  .ef:focus ~ label,
  .cp_iptxt.ef ~ label {
    font-size: 12px;
    top: -18px;
    left: 0;
    transition: 0.3s;
    color: #da3c41;
  }



  .cp_iptxt {
    position: relative;
    width: 80%;
    margin: 40px 3%;
  }
  .cp_iptxt input[type='text'] {
    font: 15px/24px sans-serif;
    box-sizing: border-box;
    width: 100%;
    letter-spacing: 1px;
    padding-left: 4em;
  }
  .cp_iptxt input[type='text']:focus {
    outline: none;
  }
  .ef {
    padding: 7px 14px;
    transition: 0.4s;
    border: 1px solid #1b2538;
    background: transparent;
  }
  .ef ~ .focus_line:before,
  .ef ~ .focus_line:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    content: '';
    transition: 0.3s;
    background-color: #da3c41;
  }
  .ef ~ .focus_line:after {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
  .ef ~ .focus_line i:before,
  .ef ~ .focus_line i:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    content: '';
    transition: 0.4s;
    background-color: #da3c41;
  }
  .ef ~ .focus_line i:after {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
  .ef:focus ~ .focus_line:before,
  .ef:focus ~ .focus_line:after,
  .cp_iptxt.ef ~ .focus_line:before,
  .cp_iptxt.ef ~ .focus_line:after {
    width: 100%;
    transition: 0.3s;
  }
  .ef:focus ~ .focus_line i:before,
  .ef:focus ~ .focus_line i:after,
  .cp_iptxt.ef ~ .focus_line i:before,
  .cp_iptxt.ef ~ .focus_line i:after {
    height: 100%;
    transition: 0.4s;
  }
  .ef ~ label {
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 14px;
    width: 100%;
    transition: 0.3s;
    letter-spacing: 0.5px;
    color: #aaaaaa;
  }
  .ef:focus ~ label,
  .cp_iptxt.ef ~ label {
    font-size: 12px;
    top: -18px;
    left: 0;
    transition: 0.3s;
    color: #da3c41;
  }



`}</style>;