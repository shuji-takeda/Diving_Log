import React, {Component} from 'react';
import style from '../../Static/Style';
import PopUp from './PopUp';
import Link from 'next/link';



class Header extends Component{

    render(){
        return(<div>
            {style}
            <div className="header">
                <div className = "header-inner">
                    <h1 className = "logo">
                        <Link href="/">
                            <a className="logo">
                        {this.props.header}
                            </a>
                        </Link>
                    </h1>
                    <div className ="navi">
                         <div className="header-right">
                           <ul className ="menu">
                               <li className="menu-list">
                               <PopUp />
                               </li>
                              <li className="menu-list">
                                  <Link href ="/Search">
                               <a className = "menu-button">Search</a>
                               </Link>
                                </li>
                                 <li className="menu-list">
                                 <Link href ="/Add">
                              <a className = "menu-button">Add</a>
                               </Link>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
            </div>
                <hr />           
            </div>
            )
        }
}

export default Header;