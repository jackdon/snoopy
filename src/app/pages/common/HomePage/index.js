import React, { Component } from "react";
import { Container } from "./elements";
import { inject, observer } from "mobx-react";
import Navigation from "./Navigation";
import { withRouter } from "react-router-dom";
import Footer from "../../Footer/index";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.signals.loadHomePage();
  }

  render() {
    return (
      <Container>
        <Navigation {...this.props} />
      </Container>
    );
  }
}

export default withRouter(inject("store", "signals")(observer(HomePage)));
