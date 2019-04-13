import React, { Component } from 'react';

import BootcamperList from "../containers/bootcamper-list"
import BootcamperDetail from "../containers/bootcamper-detail"


class App extends Component {
  render() {
    return (
      <div>
      <BootcamperList />
      <BootcamperDetail />
      </div>
    );
  }
}

export default App;
