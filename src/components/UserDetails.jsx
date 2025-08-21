import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Button, Spin, Row, Col } from 'antd';
import axios from 'axios';

export default function UserDetails() {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
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
            <Row justify="center" style={{paddingBottom: "12.5px"}}>
                <Col span={3}>
                    <h1>User Details</h1>
                    <Button type='link' href='/UserList' style={{paddingLeft: "50px"}}>User List</Button>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <div style={{ paddingLeft: "100px", display: "flex", flexDirection: "column", gap: "12.5px" }}>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Name:
                            </span>
                            {user.name}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Username:
                            </span>
                            {user.username}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Email:
                            </span>
                            {user.email}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Phone:
                            </span>
                            {user.phone}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Website:
                            </span>
                            {user.website}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Street:
                            </span>
                            {user.address?.street}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Suite:
                            </span>
                            {user.address?.suite}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                City:
                            </span>
                            {user.address?.city}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Zipcode:
                            </span>
                            {user.address?.zipcode}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Latitude:
                            </span>
                            {user.address?.geo?.lat}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Longitude:
                            </span>
                            {user.address?.geo?.lng}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Company name:
                            </span>
                            {user.company?.name}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Company catchphrase:
                            </span>
                            {user.company?.catchPhrase}
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "1.125rem", paddingRight: "12.5px" }}>
                                Company services:
                            </span>
                            {user.company?.bs}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}