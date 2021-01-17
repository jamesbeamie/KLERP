import React from "react";

import { Table } from "react-bootstrap";

const Requests = () => {
  return (
    <React.Fragment>
      <Table
        striped
        bordered
        hover
        // eslint-disable-next-line
        responsive='sm'
        // eslint-disable-next-line
        responsive='md'
        // eslint-disable-next-line
        responsive='lg'
        // eslint-disable-next-line
        responsive='xl'
      >
        <thead>
          <tr>
            <th>date</th>
            <th> request</th>
            <th> nature</th>

            <th>department</th>
            <th>status</th>
            <th> field number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2/5/2020</td>
            <td>Fertilizer</td>
            <td>advance</td>
            <td>Agronomy</td>
            <td>done</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>Soil PH tester</td>
            <td>Urgent</td>
            <td>Agronomy</td>
            <td>done</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>Truck rescue</td>
            <td>urgent</td>
            <td>Transport</td>
            <td>Pending</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>Fertilizer</td>
            <td>advance</td>
            <td>Agronomy</td>
            <td>Pending</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>Soil PH tester</td>
            <td>Urgent</td>
            <td>Agronomy</td>
            <td>done</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>Truck rescue</td>
            <td>urgent</td>
            <td>Transport</td>
            <td>Pending</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>Fertilizer</td>
            <td>advance</td>
            <td>Agronomy</td>
            <td>done</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>Soil PH tester</td>
            <td>Urgent</td>
            <td>Agronomy</td>
            <td>Pending</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>Truck rescue</td>
            <td>urgent</td>
            <td>Transport</td>
            <td>Pending</td>
            <td>2</td>
          </tr>

          {/* <tr>
                <td>3</td>
                <td colSpan='2'>Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Requests;
