// import React, {Component} from 'react';
// import firebase from 'firebase';
// import firebaseInit from '../../store';
// import { Suspense } from 'react';

// let db = firebaseInit.storage();

// const record = ()=>{db.collection("log").get().then(function(querySnapshot) {
//     console.log("非同期内");
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.data());
//         value.push(doc.data());
//     });
// });
// }

// class Search_result extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             record:[]
//         }
//         const record = ()=>{db.collection("log").get().then(function(querySnapshot) {
//             console.log("非同期内");
//             querySnapshot.forEach(function(doc) {
//                 // doc.data() is never undefined for query doc snapshots
//                 console.log(doc.data());
//                 value.push(doc.data());
//             });
//         });
//         }
//         return(
//         <p>{record}</p>
//         )
//     }

//     render(){
//         return(
//             <Suspense fallback = {
//                 <div className = "FileImage">
//                     <p>Loading........</p>
//                 <div className = "p-grid_list-images">
//                    <img src ={this.state.result.values.URL || "http://via.placeholder.com/300"} alt ="firebase-image" className="img"/>
//                 </div>
//                </div>}>
//                 <record />
//             </Suspense>

//         )
//     }
// }

// export default Search_result;