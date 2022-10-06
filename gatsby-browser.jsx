const React = require('react');
const Homepage = require('./src/pages/index').default;

exports.shouldUpdateScroll = ({
  routerProps: { location },
}) => {
  const isModal = Boolean(location.state?.modal || false);

  return !isModal;
};

exports.wrapPageElement = ({ element, props }) => {
  const { uri, pageContext } = props;

  if (uri === '/' || pageContext?.memberId || pageContext?.galleryItemId) {
    return (
      <Homepage {...props}>
        {element}
      </Homepage>
    );
  }

  return element;
};
