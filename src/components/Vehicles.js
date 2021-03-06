import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";
import PropTypes from "prop-types";

class Vehicles extends Component {
  componentWillMount() {
    if (this.props.onMountVehicles) {
      this.props.onMountVehicles();
    }
  }s

  render() {
    return (
      <CollapsableMapper data={this.props.vehicles} field="year" field1="make" field2="model" />
    );
  }
}

export default Vehicles;

Vehicles.propTypes = {
  onMountVehicles: PropTypes.func.isRequired,
  vehicles: PropTypes.array
};
