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
    width: 100%;
    height: 130px;
    text-align: left;
    border-top: 3px solid rgba(44,137,51,1.00);
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: rgba(255, 255, 255, 0.5) -1px 1px 1px inset, rgba(255, 255, 255, 0.8) -1px 1px 0;
    -moz-box-shadow: rgba(255, 255, 255, 0.5) -1px 1px 1px inset, rgba(255, 255, 255, 0.8) -1px 1px 0;
    box-shadow: rgba(255, 255, 255, 0.5) -1px 1px 1px inset, rgba(255, 255, 255, 0.8) -1px 1px 0;
    background:rgba(233,232,232,0.6);
    background-image: linear-gradient(rgba(233,232,232,0.2), rgba(200,200,200,.4));
    padding: 0 20px;
    overflow: hidden;
  }
  .navi{
    margin: 4px -20px 12px;
    height: 20px;
    width: 100%;
  }
  .header-inner{
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    position: relative;
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
.menu{
  display: block;
  height: auto;
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu-list{
  float: left;
  width: 14.285%;
  text-align: center;
  position: relative;
  z-index: 10;
}
.menu-button{
padding: 0 20px 10px;
border-top: none;
border-right: none;
background: none;
color: #555555;
display: inline-block;
margin: auto;
text-shadow: -1px 1px rgba(255, 255, 255, 0.5);
font-family: 'Maven Pro', sans-serif;
font-size: 16px;
}
  ul{
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
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
    height: 200px;
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

`}</style>;