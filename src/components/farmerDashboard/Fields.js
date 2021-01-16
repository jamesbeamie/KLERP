import React from "react";
import { Table } from "react-bootstrap";

const Fields = () => {
  return (
    <React.Fragment>
      <Table
        striped
        bordered
        hover
        responsive='sm'
        responsive='md'
        responsive='lg'
        responsive='xl'
      >
        <thead>
          <tr>
            <th>Field ID</th>
            <th>Location</th>
            <th>Size in acres</th>
            <th>Field agent</th>
            <th>Cane phase</th>
            <th>planting cycle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kamukuywa</td>
            <td>7</td>
            <td>Katasi</td>
            <td>Harvesting</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bungoma</td>
            <td>10</td>
            <td>Naliaka</td>
            <td>thining</td>
            <td>4</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sikhendu</td>
            <td>5</td>
            <td>Mulati</td>
            <td>weeding</td>
            <td>2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Bungoma</td>
            <td>10</td>
            <td>Naliaka</td>
            <td>thining</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Kamukuywa</td>
            <td>7</td>
            <td>Katasi</td>
            <td>Harvesting</td>
            <td>1</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Bungoma</td>
            <td>10</td>
            <td>Naliaka</td>
            <td>thining</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Kamukuywa</td>
            <td>7</td>
            <td>Katasi</td>
            <td>Harvesting</td>
            <td>1</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Bungoma</td>
            <td>10</td>
            <td>Naliaka</td>
            <td>thining</td>
            <td>4</td>
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Fields;
