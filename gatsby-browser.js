exports.shouldUpdateScroll = ({
  routerProps: { location },
}) => {
  if (location.pathname === '/devlogs') {
    return true;
  }

  return false;
};
