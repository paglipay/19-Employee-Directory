import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class EmployeeSearch extends Component {
  state = {
    search: "",
    breeds: [],
    employees: [],
    results: [],
    isAsc: true,
    currentActiveObj: {},
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {

    API.getDogsOfBreed('corgi')
      .then(res => {
        console.log(res.data.message)
        this.setState({ breeds: res.data.message })

        API.getEmployeesOfId(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data);
            }
            res.data.map(e => e.image = this.state.breeds[Math.floor(Math.random() * 50)])
            this.setState({ results: res.data, error: "" });
          })
          .catch(err => this.setState({ error: err }));

      })
      .catch(err => console.log(err));

    API.getBaseEmployeesList()
      .then(res => this.setState({ employees: res.data.message }))
      .catch(err => console.log(err));
  }

  toggleSort = (event) => {
    event.preventDefault();
    let tempArry = this.state.results
    if (this.state.isAsc) {
      tempArry.sort((a, b) => (a.id < b.id) ? 1 : -1)
    } else {
      tempArry.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
    this.setState({ results: tempArry });
    this.setState({ isAsc: !this.state.isAsc });
  };

  setCurrentActiveObj = async (obj) => {
    console.log('setCurrentActiveObj:')
    await this.setState({ currentActiveObj: obj });
    console.log(this.state.currentActiveObj)
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployeesOfId(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data);
        }
        res.data.map(e => e.image = this.state.breeds[Math.floor(Math.random() * 10)])
        this.setState({ results: res.data, error: "" });
      })
      .catch(err => this.setState({ error: err }));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search for Employee</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            toggleSort={this.toggleSort}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <SearchResults results={this.state.results} setCurrentActiveObj={this.setCurrentActiveObj} currentActiveObj={this.state.currentActiveObj} />
        </Container>
      </div>
    );
  }
}

export default EmployeeSearch;
