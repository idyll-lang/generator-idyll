const React = require('react');

class CustomComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        This is a custom component
      </div>
    );
  }
}

module.exports = CustomComponent;
