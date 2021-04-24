import React,{ Component } from "react";
class ShowJob extends Component{
    constructor(props){
        super(props);
        this.state = {
            idChange : '-1',
            idLabel: 0
        }
        this.changeShow = this.changeShow.bind(this);
        this.SortLabel = this.SortLabel.bind(this);
    }
      // filterItems(query) {
    //     return fruits.filter(function(el) {
    //         return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    //     }
    changeShow(event) {
        this.setState({
            idChange: event.target.value
        })
        console.log(this.state.idChange)       
    }
    SortLabel(event){
        this.setState({
            idLabel: event.target.value
        })
        // console.log(this.state.idLabel)
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
        

            for(let kiemtra of this.props.onShow)
            {
                //   let testKey = kiemtra.search(flag);
                //   console.log(testKey);
                console.log(kiemtra.nameJob);   
                let flag = kiemtra.nameJob.search(this.state.idLabel);
                console.log(flag)
            }
        const elementJob = this.props.onShow.map((job,index)=> {
            const classStatus = job.sltGender === '0' ? "label label-default" : "label label-primary";
            const text = job.sltGender === '0' ? "Ẩn":"Kích Hoạt";
            var id = 0;
            if(this.state.idChange ==='-1') {
                return (
                    <tr>
                                <td>{++id}</td>
                                    <td>{job.nameJob}</td>
                                    <td className="text-center">
                                        <span className={classStatus}>
                                                    {text}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning">
                                            <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger">
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                </td>
                    </tr>
                )
            } if (this.state.idChange ==='1' && job.sltGender ==='1') {
                return (
                    <tr>
                                <td>{++id}</td>
                                    <td>{job.nameJob}</td>
                                    <td className="text-center">
                                        <span className={classStatus}>
                                                    {text}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning">
                                            <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger">
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                </td>
                    </tr>
                )
            } if (this.state.idChange ==='0' && job.sltGender ==='0') {
                return (
                    <tr>
                                <td>{++id}</td>
                                    <td>{job.nameJob}</td>
                                    <td className="text-center">
                                        <span className={classStatus}>
                                                    {text}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning">
                                            <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger">
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                </td>
                    </tr>
                )
            }
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
                            <input onChange={this.SortLabel} type="text" className="form-control" />
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