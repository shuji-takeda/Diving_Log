import style from "../../Static/Style";
import React, {Component} from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {style}
        <footer id="footer01" class="footer outer-block">
          <div class="logo">
            <p>{this.props.footer}</p>
            <p>{this.props.account}</p>
          </div>
        </footer>
        {/* <div className="footer">
          <p className="copy">{this.props.footer}</p>
          <div>{this.props.account}</div>
        </div> */}
      </div>
    );
  }
}

export default Footer;
