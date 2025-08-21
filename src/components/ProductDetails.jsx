import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Button, Spin, Row, Col, Rate } from 'antd';
import axios from 'axios';

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        try {
            const response = await axios.get(` https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

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

    return (
        <>
            <Row justify="center" style={{ paddingBottom: "12.5px" }}>
                <Col span={4}>
                    <h1>Product Details</h1>
                    <Button type='link' href='/ProductList' style={{ paddingLeft: "50px" }}>Product List</Button>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <div style={{ paddingLeft: "100px", paddingBottom: "25px", display: "flex", flexDirection: "column", gap: "12.5px" }}>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Title:
                            </span>
                            {product.title}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Price:
                            </span>
                            {product.price}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px"}}>
                                Description:
                            </span>
                            {product.description}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Category:
                            </span>
                            {product.category}
                        </div>
                        <img src={product.image} style={{ width: "400px", height: "auto", paddingLeft: "162.5px" }} />
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Rating:
                            </span>
                            <Rate disabled defaultValue={product.rating?.rate} />
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Rating count:
                            </span>
                            {product.rating?.count}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}