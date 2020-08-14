import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getEmployeesOfId: function(breed) {
    // return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    return axios.get("http://localhost:3001/employees");
  },
  getBaseEmployeesList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
