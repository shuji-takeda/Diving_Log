import React, {Component} from 'react';
import firebase, { database } from 'firebase';
import firebaseInit from '../../store';

let db = firebaseInit.firestore();

class Search_Form extends Component{
    constructor(props){
        super(props);
        this.exeSearch = this.exeSearch.bind(this);
        this.state = {
            Prefectures:[],
            Url:'',
            dataset:{}
        }
    }

    setinitUrl = (url) =>{
        this.setState({Url:url});
    }


    intiDataset = (dataset) =>{
        this.setState({dataset:dataset});
    }

    initPrefctureset = (Prefectures) =>{
        this.setState({Prefectures:Prefectures});
    }

    componentDidMount(){
        (async() =>{
            const dataset = this.state.dataset
            var latestId = ''
            var count = 0
            await db.collection('log').get().then(snapshots =>{
                snapshots.forEach(doc =>{
                    const id = doc.id
                    latestId = id
                    const data = doc.data()
                    dataset[id] = data
                    count++
                })
            })
            if(count !== 0){
            this.intiDataset(dataset);
            this.setinitUrl(dataset[latestId].url);
            var Prefectures = Object.keys(this.state.dataset)
            this.initPrefctureset(Prefectures);
            }
        })()
    }

    getPulldown(){
        var result = [];
        if(this.state.Prefectures == null || this.state.Prefectures == ''){
            return [<p>データがありません</p>]
        }
        for (var i in this.state.Prefectures){
            result.push(
                <option value={this.state.Prefectures[i]}>{this.state.Prefectures[i]}</option>
            )
        }
        return result;
    }

    exeSearch(){

    }

    render(){
       
        return(
            <div>

                <p>
                    検索条件を指定してください。
                </p>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <td>
                             <select name = "Prefecture">
                               {this.getPulldown()}
                             </select>   
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                <button onClick={this.exeSearch}>
                                    &lt;&lt;Search&gt;&gt;
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                    <hr />
                <div className = "FileImage">
                 <div className = "p-grid_list-images">
                    <img src ={this.state.Url || "http://via.placeholder.com/300"} alt ="firebase-image" className="img"/>
                 </div>
                </div>
                </div>
        )
    };
}

export default Search_Form;