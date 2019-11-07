import React, { useEffect } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';
import { getProjectRoleByEmail } from '../../../actions/projectActions';
import DashboardContent from "./DashboardContent";

const DashboardHome = props => {
  console.log(props);
  useEffect(() => {
    const email = localStorage.getItem("email");
    email && props.getProjectRoleByEmail(email);
  }, []);

  return (
    <div className="admin-dashboard-container">
      <ProjectList products={props.productStore.products} />
      <DashboardContent />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productStore: state.productStore,
    projectStore: state.projectStore
  };
};

export default connect(mapStateToProps, {getProjectRoleByEmail})(DashboardHome);

