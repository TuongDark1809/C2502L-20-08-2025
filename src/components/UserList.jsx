import { useState, useEffect } from 'react'
import { Button, Table, Row, Col, Spin } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function UserList() {
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchUserData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUserList(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    console.log(userList)
    const deleteUser = (id) => {
        setUserList(userList.filter((user) => user.id !== id))
    }

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}>
                <Spin />
            </div>
        )
    }

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (val, record) => <Link to={`/UserDetails/${record.id}`}>{val}</Link>
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Website",
            dataIndex: "website",
            key: "website",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => <Button type='primary' onClick={() => deleteUser(record.id)}>Delete</Button>
        }
    ]

    return (
        <>
            <Row justify="center">
                <Col span={3}>
                    <h1 style={{ paddingLeft: "25px" }}>User List</h1>
                    <div style={{ paddingBottom: "12.5px" }}>
                        <Button type='link' href='/'>Login</Button>
                        <Button type='link' href='/ProductList'>Product List</Button>
                    </div>
                </Col>
            </Row>
            <Table rowKey={'id'} columns={columns} dataSource={userList} />
        </>
    )
}