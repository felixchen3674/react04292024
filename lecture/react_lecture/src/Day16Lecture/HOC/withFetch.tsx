import React, { Component } from "react";

export default function withFetch(
  InnerComponent: React.ComponentType<any>,
  apiUrl: string
) {
  return class OuterComponent extends Component {
    state = {
      data: [],
      isLoading: false,
    };

    componentDidMount(): void {
      this.setState({ isLoading: true });
      fetch(apiUrl)
        .then((Res) => Res.json())
        .then((data) => {
          this.setState({ data });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }

    render() {
      return (
        <InnerComponent
          data={this.state.data}
          isLoading={this.state.isLoading}
          {...this.props}
        />
      );
    }
  };
}

