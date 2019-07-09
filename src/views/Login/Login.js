import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox,Tooltip } from 'antd';
import './Login.scss';

export default class Login extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />,
            </div>
        )
    }
}

