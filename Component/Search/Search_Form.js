import React, {Component} from 'react';
import firebase from 'firebase';

class Search_Form extends Component{
    constructor(props){
        super(props);
        this.exeSearch = this.exeSearch.bind(this);
        this.changePrefectures = this.changePrefectures.bind(this);
        this.changePlace_Name = this.changePlace_Name.bind(this);
        this.changeShop_Name = this.changeShop_Name.bind(this);
        this.state = {
            Prefectures:'',
            Place_Name:'',
            Shop_Name:'',
            result:[]
        }
    }
    changePrefectures(e){
        this.setState({Prefectures:e.target.value});
    }

    changePlace_Name(e){
        this.setState({Place_Name:e.target.value});
    }

    changeShop_Name(e){
        this.setState({Shop_Name:e.target.value});
    }

    exeSearch(){
        let conditions ={
            Prefectures:this.state.Prefectures,
            Place_Name:this.state.Place_Name,
            Shop_Name:this.state.Shop_Name
        }


        let db = firebase.database();
        let ref = db.ref('diving-point-map');
        let self = this;
        ref.orderByKey()
        .equalTo(conditions.Prefectures)
        .on('value', (snapshot)=>{
            self.setState({
                result:snapshot.val()
            });
        });        
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
                            <th>Prefectures(都道府県) : </th>
                            <td>
                                <input type="text" size="30" value={this.state.Prefectures}
                                onChange={this.changePrefectures} />
                            </td>
                        </tr>
                        <tr>
                            <th>Place＿Name(ポイント名) : </th>
                            <td>
                                <input type="text" size="30" value={this.state.Place_Name}
                                onChange={this.changePlace_Name} />
                            </td>
                        </tr>
                        <tr>
                            <th>Shop_Name(ご利用ショップ名) : </th>
                            <td>
                                <input type="text" size="30" value={this.state.Shop_Name}
                                onChange={this.changeShop_Name} />
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

                {this.state.result[0] == null
                ?
                <div className = "no-result">
                <p>NO DATA.</p>
                <p>条件に該当するログが投稿されておりません。</p>
                </div>
                :
                    <div>
                        <p>データあり</p>
                    </div>
                }
            </div>
        )
    }
}


export default Search_Form;