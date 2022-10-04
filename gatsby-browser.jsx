const React = require('react');
const Homepage = require('./src/pages/index').default;

exports.shouldUpdateScroll = ({
  routerProps: { location },
}) => {
  const isModal = Boolean(location.state?.modal || false);

  return !isModal;
};

exports.wrapPageElement = ({ element, props }) => {
  return (
    <Homepage {...props}>
      {element}
    </Homepage>
  );
};
