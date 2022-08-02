import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Lead.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Select from "./Select";
import Searchbar from "./Searchbar";

const Leads = () => {
  return (
    <div>
      <div className="container h-200">
        <div className="Searchbar">
          <Searchbar />
        </div>
        <div className="SelectRow">
          <Select />
          <div className="space"></div>
          <Select />
        </div>
        <Table striped bordered hover className="Table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>One</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
        <Card className="Card">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Leads;
