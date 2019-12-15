import React, { Component } from 'react';
import './App.scss';
import {VirtualizedListWithoutRenderItemProps as getItem} from "react-native";
// import { throwStatement, thisExpression } from '@babel/types';
// function App() {
//     return ( 
//     <div className = "App" > Learn React </div>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props)
        this.handChange = this.handChange.bind(this)
        this.state = {
            inputValue: '',
            list: ['study react']
        }
    }

    handChange(e) {
        // not this.state.inputValue = e.target.value
        // 想改变state中的数据-必须使用setState改变
        // setState传函数是异步的
        this.setState({
                inputValue: e.target.value
            })
            // e.target === this.input ====>ref
    }

    clickHandle() {
            if (!this.state.inputValue) return
                // 改变数据只能通过setState方法   react中的immutable =>修改数据-通过拷贝
                // this.setState({
                //     list: [...this.state.list, this.state.inputValue],
                //     inputValue: ''
                // })
            this.setState((prevState) => ({
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }), () => {
                // 提供了回调函数
            })
        }
        // bind会做一层参数的传递
    delItem(index) {
        // const list = [...this.state.list]
        // list.splice(index, 1)
        // this.setState({
        //     list: list
        // })
        // 新版语法
        this.setState((prev) => {
            const list = [...prev.list]
            list.splice(index, 1)
            return { list }
        })

        const action = {
            type: "change_input_value",
            value: '111'
        }
        store.dispatch(action)
    }

// getItem() {
//     return this.state.list.map((item, index) => {
//         return ( < li key = { index }
//             onClick = { this.delItem.bind(this, index) } > { item } < /li>
//         )
//     })
//    }

render() {
    return (
        <div>
        <div>
            {
            /*
            父组件向自组件传参数 -- 也可以传方法-要把this传过下去  要利用解构
            */
            // 但行注释要把{}单独和// 分开
        }
        < input ref = {
            (input) => this.input = input
        }
        value = { this.state.inputValue }
        onChange = { this.handChange.bind(this) }
        />
        <button onClick = { this.clickHandle.bind(this) } > 提交 </button >
        </div>
        <div >
        <ul> {
               this.getItem()
            }
        </ul>
        </div>
        </div>
    )
}

            }


export default App;