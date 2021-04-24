import React,{ Component } from "react";

class AddJob extends Component{
    
    constructor(props){
        super(props);
        this.state={
            nameJob: '',
            sltGender: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value});
    }
    handleSubmit(event){
        this.props.onGetdata(this.state);
        event.preventDefault();
    }
    render(){
        return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control"  name="nameJob" onChange={this.handleChange} />
                            </div>
                            <label>Trạng Thái :</label>
                            <select value={this.state.sltGender} name='sltGender' onChange={this.handleChange}  className="form-control" required="required">
                                <option value={'1'} selected={this.state === '1'}>Kích Hoạt</option>
                                <option value={'0'} selected={this.state === '0'}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button onChange={this.handleChange} type="submit" value="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="reset" className="btn btn-danger">Làm lại </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddJob;