import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_actions/user_actions';


function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let body = {
      email: values.email,
      password: values.password
    }
    // loginUser(body)
    dispatch(loginUser(body)).then(result => {
     const resultData = result.payload;
      if (resultData.success === false) {
        form.setFieldsValue({
          email: '',
          password: ''
        })
        message.error(resultData.massage);
      }
    });
    // axios.post('/api/users/login',body).then(result => {
    //   let data = result.data
    //   if(data.success === false) {
    //     form.setFieldsValue({
    //       email : '',
    //       password : ''
    //     })
    //     message.error(data.massage);
    //   } else {
    //     navigate('/')
    //   }
    // })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login-body'>
      <Form
        form={form}
        className='login-form'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password autoComplete='on' />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage