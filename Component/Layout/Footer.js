import style from "../../Static/Style";
import React, {Component} from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        {style}
        <div class="container">
          <p class="text-muted">COPYRIGHT @takeshshuhu 2020</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
