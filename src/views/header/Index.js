import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import './Index.scss'

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            current: 'home',
            title: {
                home: '首页',
                trem: '团队介绍',
                us: '加入我们'
            }
        };
    }

    handleClick(e) {
        console.log('click ', e);
        const current = e.key
        this.setState((prevState) => {
            const state = prevState
            state.current = current
            return { state }
        })
    };

    render() {
        const { home, trem, us} = this.state.title
        return (
           <div className={`header-height`}>
              <div>
                  1111
              </div>
              <div>
                   <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                       <Menu.Item key="home">
                           {home}
                       </Menu.Item>
                       <Menu.Item key="term">
                           { trem }
                       </Menu.Item>
                       <Menu.Item key="us">
                           { us }
                       </Menu.Item>
                   </Menu>
               </div>
           </div>

        )
    }
}
