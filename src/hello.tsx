// Remember to rename your file to Hello.tsx and
// place it within your src/ directory
import * as React from "react";

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hello, {this.props.name} Joe</div>;
  }
}

export default Hello;