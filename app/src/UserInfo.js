import React, { Component } from 'react'
import { getToken, getOrderList, getYzOrderList, lockOrder } from './scan';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: "duihuan015",
            passWord: "www572168",
            code: "666666",
            token: "",
            orderList: [],
            yzCode: "",
            count: 0
         }
    }
    handleCode = (e) => {
        this.setState({
            code: e.target.value
        })
    }
    handlePassWord = (e) => {
        this.setState({
            passWord: e.target.value
        })
    }
    handleUserName = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
    handleyzCode = (e) => {
        this.setState({
            yzCode: e.target.value
        })
    }
    startYzCode = () => {
        getYzOrderList(this.state.token, this.state.yzCode).then(res => {
            this.setState({
                orderList: res
            })
        })
        let count = 0;
        let inter = {};
            inter = setInterval(() => {
                getOrderList(this.state.token).then(res => {
                    count++;
                    this.setState({
                        orderList: res,
                        count
                    })

                    // if(res.code === 200 && res.msg && res.msg.totalCount >0){
                    //     res.msg.data.forEach(d => {
                    //         lockOrder(d.oid, d.status, this.state.token);
                    //     })
                        
                    // }
                    if(res.captcha){
                        clearInterval(inter);
                    }
                })
            }, 1000)
    }
    startScan = () => {
        const {userName, passWord, code, count } = this.state;
        getToken(userName, passWord, code)
        .then(res => {
            this.setState({
            token: res
            })
            console.log(res);
            let inter = {};
            let count = 0;
            inter = setInterval(() => {
                getOrderList(res).then(res => {
                    count++;
                    this.setState({
                        orderList: res,
                        count
                    })
                    if(res.captcha){
                        clearInterval(inter);
                    }
                })
            }, 1000)
        }) 
    }
    showhtml = (htmlString) => {
        var html = {__html:htmlString};
        return   <div dangerouslySetInnerHTML={html}></div> ;
    }
    showOrderList = (orderList) => {
        orderList.msg.data.map(d => {
            return <p>d.toString()</p>
        })
    }
    render() { 
        return (
            <div>
            <h1>登录</h1>
                <p>用户名: <input type="text" 
                value={this.state.userName}
               onChange={(e) => this.handleUserName(e)}></input></p>
                <p>密码: <input type="text"
                value={this.state.passWord}
               onChange={(e) => this.handlePassWord(e)}
                ></input></p>
                <p>验证码:<input type="text"
                value={this.state.code}
               onChange={(e) => this.handleCode(e)}
                ></input> </p>
                <div>
                <button onClick={() => {this.startScan()}}>确认</button>
                <button>取消</button>
                </div>
                <div>
                <h1>{this.state.count}</h1>
                {this.state.orderList.captcha?null: JSON.stringify(this.state.orderList)}
                {this.showhtml(this.state.orderList.captcha)}
                
                <input type="text" value={this.state.yzCode} onChange={(e) => this.handleyzCode(e)}></input>
                <button onClick={() => {this.startYzCode()}}>确认验证码</button>
                </div>
            </div>
        );
    }
}
 
export default UserInfo;