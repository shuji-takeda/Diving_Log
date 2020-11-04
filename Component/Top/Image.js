import React, {Component} from "react";
import firebase, {database} from "firebase";
import firebaseInit from "../../store";
import Lib from '../../lib/Common';
import {connect} from 'react-redux';

import Images from 'react-image-resizer';

import 'bootstrap/dist/css/bootstrap.min.css';

let db = firebaseInit.firestore();

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};

class Image extends Component {

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
      dataset: {},
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

  //全件データ取得
    //初期表示
    componentDidMount() {
      (async () => {
        const dataset = this.state.dataset;
        var latestId = "";
        var pulldown = [];
        var count = 0;
        await db
          .collection("log")
          .get()
          .then((snapshots) => {
            snapshots.forEach((doc) => {
              const id = doc.id;
              latestId = id;
              const data = doc.data();
              dataset[id] = data;
              pulldown.push(data.Prefectures);
              count++;
            });
          });
          let d = Lib.deepcopy(dataset);
          this.props.dispatch({
            type:'UPDATE_USER',
            value:{
              AD:d,
            }
          });
      })();
    }

  render() {
    return (
      <div className="ImgSlide">
          {/* <img class="img-thumbnail" src={this.state.Img}></img> */}
          <Images
            src={this.state.Img}
            height={ 300 }
            width={ 300 }
            style={style.image}
            />

      </div>
    );
  }
}

Image = connect((state)=>state)(Image);
export default Image;
