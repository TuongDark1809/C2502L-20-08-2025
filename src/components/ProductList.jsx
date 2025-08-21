import { useState, useEffect } from 'react'
import { Button, Table,Row, Col, Spin } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function ProductList() {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchProductData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProductList(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProductData();
    }, [])
    console.log(productList)
    const deleteProduct = (id) => {
        setProductList(productList.filter((product) => product.id !== id))
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
            title: "id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "image",
            dataIndex: "image",
            key: "image",
            render: (url) => (
                <img
                    src={url}
                    alt="product"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
            )

        },
        {
            title: "title",
            dataIndex: "title",
            key: "title",
            render: (val, record) => <Link to={`/ProductDetails/${record.id}`}>{val}</Link>
        },
        {
            title: "price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "action",
            key: "action",
            render: (_, record) => <Button type='primary' onClick={() => deleteProduct(record.id)}>Delete</Button>
        }
    ]
    return (
        <>
            <Row justify="center">
                <Col span={3}>
                    <h1 style={{ paddingLeft: "25px" }}>Product List</h1>
                    <div style={{ paddingBottom: "12.5px", paddingLeft: "25px" }}>
                        <Button type='link' href='/'>Login</Button>
                        <Button type='link' href='/UserList'>User List</Button>
                    </div>
                </Col>
            </Row>
            <Table rowKey={'id'} columns={columns} dataSource={productList} />
        </>
    )
}