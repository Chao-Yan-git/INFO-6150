import React from 'react';
import { Table } from "react-bootstrap";
class Contact extends React.Component {
    render() {
        return (
            <div>
                <hi>Contact Us</hi>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Osaka</td>
                            <td>JP</td>
                            <td>cxy@11.jp</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Harbin</td>
                            <td>CN</td>
                            <td>cxy@11.cn</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Boston</td>
                            <td>US</td>
                            <td>cxy@11.us</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Contact;