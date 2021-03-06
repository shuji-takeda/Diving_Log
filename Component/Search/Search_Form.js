import React, {Component} from "react";
import firebase, {database} from "firebase";
import firebaseInit from "../../store";
//React bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from 'react-image-resizer';

let db = firebaseInit.firestore();

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};

class Search_Form extends Component {

  constructor(props) {
    super(props);
    this.exeSearch = this.exeSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      pulldown: [],
      Url: "",
      dataset: {},
      prefecture:''
    };
  }

  onChange(e){
    this.setState({prefecture: e.target.value})
  }

  setinitUrl = (url) => {
    this.setState({Url: url});
  };

  intiDataset = (dataset) => {
    this.setState({dataset: dataset});
  };

  initPrefctureset = (pulldown) => {
    this.setState({pulldown: pulldown});
  };

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
      if (count !== 0) {
        this.intiDataset(dataset);
        this.setinitUrl(dataset[latestId].url);

        var Prefectures = Object.keys(this.state.dataset);
        this.initPrefctureset(pulldown);
      }
    })();
  }

  // //選択都道府県
  // setPrefecture(prefecture){
  //   this.setState({prefecture:event.target.value})
  // }

  getPulldown() {
    var result = [];
    if (this.state.pulldown == null || this.state.pulldown == "") {
      return [<p>データがありません</p>];
    }
    for (var i in this.state.pulldown) {
      result.push(
        <option value={this.state.pulldown[i]}>{this.state.pulldown[i]}</option>
      );
    }
    return result;
  }

  exeSearch() {}

  render() {
    return (
      <div>
        <p>検索条件を指定してください。</p>
        <table>
          <tbody>
            <tr>
              <th></th>
              <td>
                <select name="Prefecture" onChange={this.onChange}>{this.getPulldown()}</select>
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <button onClick={this.exeSearch}>&lt;&lt;Search&gt;&gt;</button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="FileImage">
          <div className="p-grid_list-images">
          <Images
            src={this.state.Url}
            height={ 300 }
            width={ 300 }
            style={style.image}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search_Form;
