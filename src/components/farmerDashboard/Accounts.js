import React from "react";

import { Table } from "react-bootstrap";

const Accounts = () => {
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
            {/* <th colSpan='2'>Debit</th> */}
            <th colSpan='3'>Debit</th>
            <th colSpan='3'> Deductions</th>
          </tr>
          <tr>
            <th>date</th>
            <th> transaction</th>
            <th> amount(ksh)</th>

            <th>date</th>
            <th> deduction</th>
            <th> amount(ksh)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2/5/2020</td>
            <td>payment</td>
            <th>80000.00</th>
            <td>2/5/2020</td>
            <td>fertilizer</td>
            <th>7, 000.00</th>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>payment</td>
            <th>75000.00</th>
            <td>2/5/2020</td>
            <td>fertilizer</td>
            <th>20, 000.00</th>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>payment</td>
            <th>75000.00</th>
            <td>2/5/2020</td>
            <td>pesticide</td>
            <th>20, 000.00</th>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>payment</td>
            <th>75000.00</th>
            <td>2/5/2020</td>
            <td>pesticide</td>
            <th>20, 000.00</th>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>payment</td>
            <th>80000.00</th>
            <td>2/5/2020</td>
            <td>fertilizer</td>
            <th>7, 000.00</th>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>payment</td>
            <th>75000.00</th>
            <td>2/5/2020</td>
            <td>pesticide</td>
            <th>20, 000.00</th>
          </tr>
          <tr>
            <td>2/5/2020</td>
            <td>payment</td>
            <th>75000.00</th>
            <td>2/5/2020</td>
            <td>pesticide</td>
            <th>20, 000.00</th>
          </tr>

          <tr>
            <td colSpan='2'>Debit total(ksh)</td>
            <th>2,000,000.00</th>
            <td colSpan='2'>Deductions total(ksh)</td>
            <th>430,000.00</th>
          </tr>
          <tr>
            <td colSpan='3'>acount balance (2,000,000.00 - 430,000 ksh)</td>
            <th colSpan='3'>1,570,000</th>
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Accounts;
