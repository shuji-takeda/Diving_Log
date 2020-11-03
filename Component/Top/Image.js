import React, {Component} from "react";

class Image extends Component {
  ImgStyle = {
    width: "50%",
    padding: "20px 350px",
  };

  constructor(props) {
    super(props);
    this.fnameList = [
      "/image/IMG_1506.JPG",
      "/image/DSCN0341.JPG",
      "/image/IMG_4432.JPG",
      "/image/IMG_4573.JPG",
      "/image/IMG_4427.JPG",
      "/image/IMG_4404.JPG",
      "/image/IMG_4397.JPG",
      "/image/IMG_4146.JPG",
      "/image/IMG_1498.JPG",
      "/image/IMG_4731.JPG",
      "/image/IMG_1498.JPG",
    ];
    this.state = {
      Img: this.fnameList[0],
      index: 0,
    };

    let timer = setInterval(() => {
      if (this.state.index === this.fnameList.length + 1) {
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
          {/* <Image
            src={this.state.Img}
            alt="Picture of a triangle"
            width={500}
            height={500}
          /> */}
        </section>
      </div>
    );
  }
}

export default Image;
