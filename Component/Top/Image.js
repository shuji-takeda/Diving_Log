import React, {Component} from "react";

class Image extends Component {
  ImgStyle = {
    width: "50%",
    padding: "20px 350px",
  };

  constructor(props) {
    super(props);
    this.fnameList = [
      "../../Static/image/IMG_1506.JPG",
      "../../Static/image/DSCN0341.JPG",
      "../../Static/image/IMG_4432.JPG",
      "../../Static/image/IMG_4573.JPG",
      "../../Static/image/IMG_4427.JPG",
      "../../Static/image/IMG_4404.JPG",
      "../../Static/image/IMG_4397.JPG",
      "../../Static/image/IMG_4146.JPG",
      "../../Static/image/IMG_1498.JPG",
      "../../Static/image/IMG_4731.JPG",
    ];
    this.state = {
      Img: this.fnameList[0],
      index: 0,
    };

    let timer = setInterval(() => {
      if (this.state.index === this.fnameList.length+1) {
        this.setState({index: 0});
      }
      this.setState((state) => ({
        index: state.index + 1,
        Img: this.fnameList[this.state.index],
      }));
    }, 2000);
  }

  render() {
    return (
      <div className="ImgSlide">
        <section>
          <img style={this.ImgStyle} src={this.state.Img}></img>
        </section>
      </div>
    );
  }
}

export default Image;
