import { Component } from 'react';
import Modal from 'react-modal'; 
import style from '../../Static/Style';

class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen : false
        };

        this.opneModal = this.opneModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    opneModal(){
        this.setState({modalIsOpen:true});
    }

    closeModal(){
        this.setState({modalIsOpen:false});
    }

    render(){
        return(
            <div>
                {style}
                <a onClick = {this.opneModal} 
                className = "menu-button">Open</a>
                <Modal 
                          isOpen={this.state.modalIsOpen}
                          onAfterOpen={this.afterOpenModal}
                          onRequestClose={this.closeModal}
                          contentLabel="Example Modal">
                              <section className="modalArea">
                              <div id="modalBg" class="modalBg"></div>
                              <div className="modalWrapper">
                                  <div className="modalContents">
                              <p>作成中...........</p>
                              </div>
                              <div id="closeModal" class="closeModal">
                              <button onClick={this.closeModal}>×</button>
                              </div>
                              </div>
                              </section>
                          </Modal>
            </div>
        )
    }

};

export default PopUp;