import css from 'styled-jsx/css';

export default <style>{`
body {
  font-family: @font-family-base;
  font-size: @font-size-base;
  line-height: @line-height-base;
  color: @text-color;
  background-color: @body-bg;
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
    position: fixed;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 60px;
    background-color: #f5f5f5;
    }
    body > .container {
    padding: 60px 15px 0;
    }
    .container .text-muted {
    margin: 20px 0;
    }
     
    .footer > .container {
    padding-right: 15px;
    padding-left: 15px;
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