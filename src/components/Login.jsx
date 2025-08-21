import { Button, Form, Input, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const nav = useNavigate()
    const onFinish = (values) => {
        if (String(values.email) === "user@gmail.com" && String(values.password) === "password123") {
            nav("/UserList")
        } else {
            onFinishFailed("Wrong password!")
        }
    }

    const onFinishFailed = errorInfo => {
        console.error('Failed:', errorInfo);
    }


    return (
        <>
            <Row justify="center" style={{ paddingTop: "100px" }}>
                <h1 style={{ fontFamily: "sans-serif", fontSize: "2.5rem" }} span={12}>Login</h1>
            </Row>
            <Row justify="center">
                <Col span={12}>
                    <Form
                        name="login__form"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label={null} style={{ paddingLeft: "137.5px" }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}