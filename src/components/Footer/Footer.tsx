import React from "react";
import "./Footer.scss";
import { Table } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'

  export default class list extends React.Component {
 
    render() {
      
      let ratesData: any = localStorage.getItem('rate');
      ratesData = JSON.parse(ratesData);
      let elements: any = []
      for (let key in ratesData.rates) {
        let value = ratesData.rates[key];
        elements.push({key: key, value: value})
       
      }      
      return (
        <div>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Price</th>
          </tr>
        </thead>
        {elements.map((value:any, index:any) => {
            return <tbody>
            <tr>
              <td>{value.key}</td>
              <td>{value.value}</td>
            </tr>
          </tbody>
          })}
        
      </Table>
      <Pagination/>
      </div>
      )
    }
  
  }