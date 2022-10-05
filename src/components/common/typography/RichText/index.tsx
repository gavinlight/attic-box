import * as i from 'types';
import * as React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { Options } from '@contentful/rich-text-react-renderer';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Text } from '../Text';

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Text size={18} shrinkText>{children}</Text>
    ),
  },
};

export const RichText: React.FC<RichTextProps> = ({
  data,
}) => {
  return (
    <>
      {renderRichText(
        { ...data, references: [] },
        richTextOptions,
      )}
    </>
  );
};

type RichTextProps = {
  data: i.RichText;
};