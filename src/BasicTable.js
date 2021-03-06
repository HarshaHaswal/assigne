import React, { Component } from 'react'
import "./Style.css";

class BasicTable extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      students: [{
        "Description": "freight",
        "Name": "fright",
        "Price": "USD 179",
        "Unit": "per container",
        "Tax": "-",
        "ExchangeRate": "100",
        "FinalPayment": "INR2000"
      },
      {
        "Description": "Free In",
        "Name": "Free In",
        "Price": "USD 180",
        "Unit": "per container",
        "Tax": "-",
        "ExchangeRate": "100",
        "FinalPayment": "INR2000"
      },
      {
        "Description": "BI Fee",
        "Name": "BI Fee",
        "Price": "Ti175",
        "Unit": "per BI",
        "Tax": "18%",
        "ExchangeRate": "100",
        "FinalPayment": "INR2000"
      },
      {
        "Description": "temporary",
        "Name": "temporary accept",
        "Price": "USD 540",
        "Unit": "per container",
        "Tax": "18%",
        "ExchangeRate": "70.79",
        "FinalPayment": "INR2000"
      }
      ]

    }
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { checkbox,Description, Name, Price, Unit, Tax, ExchangeRate, FinalPayment } = student //destructuring
      return (
        <tr key={checkbox}>
          <td><input type="checkbox"/></td>
          <td>{Description}</td>
          <td>{Name}</td>
          <td>{Price}</td>
          <td>{Unit}</td>
          <td>{Tax}</td>
          <td>{ExchangeRate}</td>
          <td>{FinalPayment}</td>
        </tr>
      )
    })
  }


  renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>React Dynamic Table</h1>

        <table id='students'>
          <tbody>
            <button>group</button>
            <button>ungroup</button>
            <tr><td></td>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default BasicTable;