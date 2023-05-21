import * as i from 'types';
import * as React from 'react';
import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Text } from '../Text';
import { RichTextContainer } from './styled';

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Text size={18} shrinkText>
        {children}
      </Text>
    ),
  },
};

export const RichText: React.FC<RichTextProps> = ({ data }) => {
  return (
    <RichTextContainer>
      {renderRichText({ ...data, references: [] }, richTextOptions)}
    </RichTextContainer>
  );
};

type RichTextProps = {
  data: i.RichText;
};
