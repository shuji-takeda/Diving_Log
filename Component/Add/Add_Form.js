import React, {Component} from "react";
import firebase from "firebase";
import firebaseInit from "../../store";
import Link from "next/link";
//import friebaseCommon from '../../Static/firebaseCommon';

let isFileFlg = false;
let completeUploadFlg = false;
const db = firebaseInit.firestore();
var lastId;

class Add_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastId: "",
      Prefectures: "",
      Place_Name: "",
      DAY: "",
      Shop_Name: "",
      Weather: "",
      SuitType: "",
      Marine_life: "",
      Memo: "",
      image: null,
      url: "",
      progress: 0,
      cautionMsg: [],
      dataset: {},
    };

    this.onChangePrefectures = this.onChangePrefectures.bind(this);
    this.onChangePlace_Name = this.onChangePlace_Name.bind(this);
    this.onChangeDAY = this.onChangeDAY.bind(this);
    this.onChangeShop_Name = this.onChangeShop_Name.bind(this);
    this.onChangeWeather = this.onChangeWeather.bind(this);
    this.onChangeSuitType = this.onChangeSuitType.bind(this);
    this.onChangeMarine_life = this.onChangeMarine_life.bind(this);
    this.onChangeMemo = this.onChangeMemo.bind(this);
    this.exeAdd = this.exeAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  closeModal() {
    openModalFlg = false;
  }

  handleChange(e) {
    if (e.target.files[0]) {
      this.setState({image: e.target.files[0]});
      isFileFlg = true;
    }
  }

  handleUpload() {
    var firebaseStorage = firebase.storage();
    var Path = firebaseStorage.ref().child(`images/${this.state.image.name}`);
    const uploadTask = Path.put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressnew = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({progress: progressnew});
        this.setState({url: this.state.url});
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebaseStorage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({url: url});
          });
      }
    );
    console.log("image: ", this.state.image);
  }

  onChangePrefectures(e) {
    this.setState({Prefectures: e.target.value});
  }

  onChangePlace_Name(e) {
    this.setState({Place_Name: e.target.value});
  }

  onChangeDAY(e) {
    this.setState({DAY: e.target.value});
  }

  onChangeShop_Name(e) {
    this.setState({Shop_Name: e.target.value});
  }

  onChangeWeather(e) {
    this.setState({Weather: e.target.value});
  }

  onChangeSuitType(e) {
    this.setState({SuitType: e.target.value});
  }

  onChangeMarine_life(e) {
    this.setState({Marine_life: e.target.value});
  }

  onChangeMemo(e) {
    this.setState({Memo: e.target.value});
  }

  intiDataset = (dataset) => {
    this.setState({dataset: dataset});
  };

  //     getLastId(){
  //     let db = firebaseInit.database();
  //     let ref = db.ref('diving-point-map/');
  //     let self = this;
  //     ref.orderByKey()
  //     .limitToFirst(10)
  //     // .equalTo("20201003")
  //     .on('value', (snapshot)=>{
  //         let res = snapshot.val();
  //         for(let i in res){
  //             self.setState({
  //                 lastId:i
  //             });
  //             return;
  //         }
  //     });
  // }

  setLastId = (lastId) => {
    this.setState({lastId: lastId});
  };

  componentDidMount() {
    (async () => {
      const dataset = this.state.dataset;
      var count = 0;
      await db
        .collection("log")
        .get()
        .then((snapshots) => {
          snapshots.forEach((doc) => {
            const id = doc.id;
            const data = doc.data();
            dataset[id] = data;
            count++;
          });
        });
      this.intiDataset(dataset);
      lastId = count;
      this.setLastId(lastId);
    })();
  }

  //データ登録
  exeAdd(e) {
    const id = this.state.lastId + 1;
    const nextId = "'" + id + "'";
    // this.getLastId();
    const answer = window.confirm("登録内容にお間違いはありませんか？？");
    if (answer) {
      let data = {
        Prefectures: this.state.Prefectures,
        Place_Name: this.state.Place_Name,
        DAY: this.state.DAY,
        Shop_Name: this.state.Shop_Name,
        Weather: this.state.Weather,
        SuitType: this.state.SuitType,
        Marine_life: this.state.Marine_life,
        Memo: this.state.Memo,
        url: this.state.url,
      };
      if ((data.Prefectures = "" || null)) {
        this.setState({cautionMsg: "Prefecturesを入力してください。"});
      }
      if ((data.Place_Name = "" || null)) {
        this.setState({cautionMsg: "Place_Nameを入力してください。"});
      }
      if ((data.DAY = "" || null)) {
        this.setState({cautionMsg: "DAYを入力してください。"});
      }
      if ((data.Shop_Name = "" || null)) {
        this.setState({cautionMsg: "Shop_Nameを入力してください。"});
      }

      if (this.state.cautionMsg.length == 0) {
        db.collection("log").doc(nextId).set({
          Prefectures: this.state.Prefectures,
          Place_Name: this.state.Place_Name,
          DAY: this.state.DAY,
          Shop_Name: this.state.Shop_Name,
          Weather: this.state.Weather,
          SuitType: this.state.SuitType,
          Marine_life: this.state.Marine_life,
          Memo: this.state.Memo,
          url: this.state.url,
        });
        // let id = this.state.lastId * 1 + 1;
        // let db = firebaseInit.database();
        // // let ref = db.ref('diving-point-map/' + lastid);
        // let ref = db.ref('diving-point-map/' + id);
        // console.log(ref);
        // ref.set({
        //     ID:id,
        //     Prefectures:data.Prefectures,
        //     Place_Name:data.Place_Name,
        //     DAY:data.DAY,
        //     Weather:data.Weather,
        //     Shop_Name:data.Shop_Name,
        //     SuitType:data.SuitType,
        //     Marine_life:data.Marine_life,
        //     Memo:data.Memo,
        //     URL:data.url
        // });
        this.setState({
          Prefectures: "",
          Place_Name: "",
          DAY: "",
          Shop_Name: "",
          Weather: "",
          SuitType: "",
          Marine_life: "",
          Memo: "",
          url: "",
          progress: 0,
          image:null
        });
        isFileFlg = false;
        completeUploadFlg = true

      } else {
        window.alert(this.cautionMsg);
      }
    }
  }

  render() {
    return (
      <div>
        {completeUploadFlg ? (
          <div class="logo">
          <p>ご協力ありがとうございます！</p>
          <Link href="/">
            <a className="logo">Upload Success</a>
          </Link>
        </div>
        ) : (
          <div>
            <div class="cp_iptxt">
              <label>Prefectures（都道府県）</label>
              <input
                class="ef"
                type="text"
                maxLength="7"
                placeholder=""
                value={this.state.Prefectures}
                onChange={this.onChangePrefectures}
              />
              <span class="focus_line">
                <i></i>
              </span>
            </div>
            <div class="cp_iptxt">
              <label>Place_Name（ポイント名）</label>
              <input
                class="ef"
                type="text"
                maxLength="15"
                placeholder=""
                value={this.state.Place_Name}
                onChange={this.onChangePlace_Name}
              />
              <span class="focus_line">
                <i></i>
              </span>
            </div>
            <div class="cp_iptxt">
              <label>DAY</label>
              <input
                class="ef"
                type="text"
                maxLength="15"
                placeholder="yyyymmdd"
                value={this.state.DAY}
                onChange={this.onChangeDAY}
              />
              <span class="focus_line">
                <i></i>
              </span>
            </div>
            <div class="cp_iptxt">
              <label>Weather</label>
              <input
                class="ef"
                type="text"
                maxLength="10"
                placeholder=""
                value={this.state.Weather}
                onChange={this.onChangeWeather}
              />
              <span class="focus_line">
                <i></i>
              </span>
            </div>
            <div class="cp_iptxt">
              <label>Shop_Name</label>
              <input
                class="ef"
                type="text"
                maxLength="20"
                placeholder=""
                value={this.state.Shop_Name}
                onChange={this.onChangeShop_Name}
              />
              <span class="focus_line">
                <i></i>
              </span>
            </div>
            <div class="cp_iptxt">
              <label>SuitType</label>
              <input
                class="ef"
                type="text"
                maxLength="20"
                placeholder=""
                value={this.state.SuitType}
                onChange={this.onChangeSuitType}
              />
              <span class="focus_line">
                <i></i>
              </span>
            </div>
            <div class="cp_iptxt">
              <label>Marine life</label>
              <input
                class="ef"
                type="text"
                maxLength="20"
                placeholder=""
                value={this.state.Marine_life}
                onChange={this.onChangeMarine_life}
              />
              <span class="focus_line">
                <i></i>
              </span>
            </div>
            <div class="cp_iptxt">
              <label>Memo</label>
              <input
                class="ef"
                type="text"
                maxLength="100"
                placeholder=""
                value={this.state.Memo}
                onChange={this.onChangeMemo}
              />
              <span class="focus_line">
                <i></i>
              </span>
            </div>

            <br />
            <p>あなたのベストショットを共有しませんか????</p>
            <div className="FileImage">
              <progress value={this.state.progress} max="100" />
              <br />
              <br />
              <input type="file" onChange={this.handleChange} />
              {isFileFlg ? (
                <button onClick={this.handleUpload}>Upload</button>
              ) : null}
              <br />
              {this.state.url}
              <br />
              <div className="p-grid_list-images">
                <img
                  src={this.state.url || "http://via.placeholder.com/300"}
                  alt="firebase-image"
                  className="img"
                />
              </div>
            </div>
            <button onClick={this.exeAdd}>Add</button>
          </div>
        )}
        {/* <div class="cp_iptxt">
          <label>Prefectures（都道府県）</label>
          <input
            class="ef"
            type="text"
            maxLength="7"
            placeholder=""
            value={this.state.Prefectures}
            onChange={this.onChangePrefectures}
          />
          <span class="focus_line">
            <i></i>
          </span>
        </div>
        <div class="cp_iptxt">
          <label>Place_Name（ポイント名）</label>
          <input
            class="ef"
            type="text"
            maxLength="15"
            placeholder=""
            value={this.state.Place_Name}
            onChange={this.onChangePlace_Name}
          />
          <span class="focus_line">
            <i></i>
          </span>
        </div>
        <div class="cp_iptxt">
          <label>DAY</label>
          <input
            class="ef"
            type="text"
            maxLength="15"
            placeholder="yyyymmdd"
            value={this.state.DAY}
            onChange={this.onChangeDAY}
          />
          <span class="focus_line">
            <i></i>
          </span>
        </div>
        <div class="cp_iptxt">
          <label>Weather</label>
          <input
            class="ef"
            type="text"
            maxLength="10"
            placeholder=""
            value={this.state.Weather}
            onChange={this.onChangeWeather}
          />
          <span class="focus_line">
            <i></i>
          </span>
        </div>
        <div class="cp_iptxt">
          <label>Shop_Name</label>
          <input
            class="ef"
            type="text"
            maxLength="20"
            placeholder=""
            value={this.state.Shop_Name}
            onChange={this.onChangeShop_Name}
          />
          <span class="focus_line">
            <i></i>
          </span>
        </div>
        <div class="cp_iptxt">
          <label>SuitType</label>
          <input
            class="ef"
            type="text"
            maxLength="20"
            placeholder=""
            value={this.state.SuitType}
            onChange={this.onChangeSuitType}
          />
          <span class="focus_line">
            <i></i>
          </span>
        </div>
        <div class="cp_iptxt">
          <label>Marine life</label>
          <input
            class="ef"
            type="text"
            maxLength="20"
            placeholder=""
            value={this.state.Marine_life}
            onChange={this.onChangeMarine_life}
          />
          <span class="focus_line">
            <i></i>
          </span>
        </div>
        <div class="cp_iptxt">
          <label>Memo</label>
          <input
            class="ef"
            type="text"
            maxLength="100"
            placeholder=""
            value={this.state.Memo}
            onChange={this.onChangeMemo}
          />
          <span class="focus_line">
            <i></i>
          </span>
        </div>

        <br />
        <p>あなたのベストショットを共有しませんか????</p>
        <div className="FileImage">
          <progress value={this.state.progress} max="100" />
          <br />
          <br />
          <input type="file" onChange={this.handleChange} />
          {isFileFlg ? (
            <button onClick={this.handleUpload}>Upload</button>
          ) : null}
          <br />
          {this.state.url}
          <br />
          <div className="p-grid_list-images">
            <img
              src={this.state.url || "http://via.placeholder.com/300"}
              alt="firebase-image"
              className="img"
            />
          </div>
        </div>
        <button onClick={this.exeAdd}>Add</button> */}
      </div>
    );
  }
}

export default Add_Form;
