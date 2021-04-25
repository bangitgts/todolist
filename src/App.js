import './App.css';
import React,{ Component } from 'react';
import AddJob from './component/AddJob'
import ShowJob from './component/ShowJob';
import SortJob from './component/SortJob';
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
          product:[
            {nameJob: 'abc',
            sltGender: '1'},
            {nameJob: 'hai',
            sltGender: '0'}
          ]
        }
   }
  onReceivenamejob =  (prams) => {
    const products = this.state.product;
    products.push(prams);
    this.setState(products);
  }
  getId = (prams) =>{
    let a = this.state.product;
    let removed = a.splice(prams,1);
    this.setState(a);
  }
  render(){
    return(
      <div className="container">
         <div className="row">
          <AddJob onGetdata={this.onReceivenamejob} />
          <SortJob/>
          <ShowJob onGetid={this.getId} onShow={this.state.product}/>
         </div>
      </div>
      )
  }

}
export default App;
