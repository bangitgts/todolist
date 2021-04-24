import './App.css';
import { Component } from 'react';
import AddJob from './component/AddJob'
import ShowJob from './component/ShowJob';
import SortJob from './component/SortJob';
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
          product:[
            {nameJob: 'abc',
            sltGender: 1}
          ]
        }
   // this.onReceivenamejob = this.onReceivenamejob.bind(this);
   }
 
  onReceivenamejob =  (prams) => {
    console.log(prams)
    const products = this.state.product;
    products.push(prams)
    this.setState(products);
    console.log(this.state);
  }
  render(){
    return(
      <div className="container">
         <div className="row">
          <AddJob onGetdata={this.onReceivenamejob} />
          <SortJob/>
          <ShowJob onShow={this.state.product}/>
         </div>
      </div>
      )
  }

}
export default App;
