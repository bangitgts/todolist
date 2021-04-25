import React,{ Component } from "react";
import ContentEditable from 'react-contenteditable'
class ShowJob extends Component{
    constructor(props){
        super(props);
        this.state = {
            idChange : '-1',
            idLabel: '',
            idDel: '',
            idEdit: false
        }
        this.editText  = this.editText.bind(this);
        this.changeShow = this.changeShow.bind(this);
        this.SortLabel = this.SortLabel.bind(this);
        this.clickButton = this.clickButton.bind(this);
    }
  
    // filterItems(query) {
    //     return fruits.filter(function(el) {
    //         return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    //     }

    changeShow(event) {
        this.setState({
            idChange: event.target.value
        })
        
    }
    clickButton(index){
       this.props.onGetid(index);
     }
    SortLabel(event){
        this.setState({
            idLabel: event.target.value
        })
    }
    editText(event){
        if(event.target.value === '0'){
            console.log('abc');
            this.setState({
                idEdit: true
            })
        }else{
            console.log('xyz')
        }
        console.log(event.target.value)
    }
    render(){
      
        // const elementJob = this.props.onShow.map((job,index)=> {
        //     const classStatus = job.sltGender === '0' ? "label label-default" : "label label-primary";
        //     const text = job.sltGender === '0' ? "Ẩn":"Kích Hoạt";
        //     return (
        //         <tr>
        //         <td>{index++}</td>
        //                         <td>{job.nameJob}</td>
        //                         <td className="text-center">
        //                             <span className={classStatus}>
        //                                         {text}
        //                                     </span>
        //                         </td>
        //                         <td className="text-center">
        //                             <button type="button" className="btn btn-warning">
        //                                 <span className="fa fa-pencil mr-5"></span>Sửa
        //                             </button>
        //                             &nbsp;
        //                             <button type="button" className="btn btn-danger">
        //                                 <span className="fa fa-trash mr-5"></span>Xóa
        //                             </button>
        //                         </td>
        //         </tr>
        //     )
        // })
        
            // const searchJob  = this.props.onShow.map((searchCV)=>{
            //     if(searchCV.nameJob.search(this.state.idLabel) !==(-1)){
            //         console.log('dung');
            //     }
            //     else{
            //         console.log('sai')
            //     }
            // })

            // eslint-disable-next-line array-callback-return
            const elementJob = this.props.onShow.map((job,index) => {
                const classStatus = job.sltGender === '0' ? "label label-default" : "label label-primary";
                const text = job.sltGender === '0' ? "Ẩn":"Kích Hoạt";
                if(job.nameJob.search(this.state.idLabel) === (-1)){
                    console.log('abc');
                    return (
                    <tr>
                    </tr>
                    )}
                 if(this.state.idChange === '-1') {
                  let id = 0;
                  id = id++;
                  return (
                    <tr>
                                <td>{id}</td>
                                    <td contentEditable={this.state.idEdit}>{job.nameJob}</td>
                                    <td className="text-center">
                                        <span className={classStatus}>
                                                    {text}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button value={0} onClick={this.editText} type="button" className="btn btn-warning">
                                            <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button value={index} onClick={() => this.clickButton(index)}  type="button" className="btn btn-danger">
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                </td>
                    </tr>
                )
            } if (this.state.idChange ==='1' && job.sltGender ==='1') {
                let id = 0;
                id = id++;
                
                return (
                    <tr>
                    
                                <td>{id}</td>
                                    <td contentEditable={this.state.idEdit} >{job.nameJob}</td>
                                    <td className="text-center">
                                        <span className={classStatus}>
                                                    {text}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button  value={0} onClick={this.editText} type="button" className="btn btn-warning">
                                            <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button value={index} onClick={() => this.clickButton(index)}  type="button" className="btn btn-danger">
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                </td>
                    </tr>
                )
            } if (this.state.idChange ==='0' && job.sltGender ==='0') {
                let id = 0;
                id = id++;

                return (
                    <tr>
                                <td>{id}</td>
                                    <td contentEditable={this.state.idEdit} >{job.nameJob}</td>
                                    <td className="text-center">
                                        <span className={classStatus}>
                                                    {text}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button onClick={this.editText} type="button" className="btn btn-warning">
                                            <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button value={index} onClick={() => this.clickButton(index)} type="button" className="btn btn-danger">
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                </td>
                    </tr>
                )
            }
            // if (job.nameJob.search(this.state.idLabel) === -1) {
            //     console.log('abc');
            // }
        })

        return(
        <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input value={this.state.idLabel} onChange={this.SortLabel} onSubmit={this.SortLabel} type="text" className="form-control" />
                        </td>
                        <td>
                            <select onChange={this.changeShow} className="form-control">
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elementJob}
                   
                </tbody>
                </table>
            </div>
        </div>
        )
    }
}
export default ShowJob;