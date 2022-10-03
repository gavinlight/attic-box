/* eslint-disable no-use-before-define */
import * as React from 'react';

export const PostBodyComponents = [
  <div id="modal" key="modal" />,
];

const renderModalRoot = ({ setPostBodyComponents }) => {
  setPostBodyComponents(PostBodyComponents);
};

export default renderModalRoot;
