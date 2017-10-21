const React = require('react');
const Scroll = require('react-scroll');
const scroller = Scroll.scroller;

class ScrollComponent extends React.Component {
  render() {
    const { hasError, updateProps, ...props } = this.props;
    return (
      <div {...this.props}>
        This is a custom component
      </div>
    );
  }
}

module.exports = ScrollComponent;
