import style from '../../Static/Style';
import React, {Component} from 'react';


class Footer extends Component {

    render(){
        return (<div>
            {style}
            <div className="footer">
            <p className="copy">{this.props.footer}</p>
            <div>{this.props.account}</div>
            </div>
        </div>
        )}
}

export default Footer;