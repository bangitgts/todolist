import React,{ Component } from "react";
import ShowJob from './ShowJob'
class HienAn extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: ''
        }
        this.test  = this.test.bind(this);
    }
    test(event){
       this.setState({
        id: event.target.value});
        console.log(this.state.id)
        
    }
    render(){
        return(
            <td>
                <select onChange={this.test} className="form-control">
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                </select>
             </td>
        )
    }
}
export default HienAn