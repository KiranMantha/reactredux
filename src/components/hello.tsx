import * as React from "react";

interface HelloProps {
  name: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>Hello, {this.props.name} Joe</div>
    );
  }
}
