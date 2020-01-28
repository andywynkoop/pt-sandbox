import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

class CodeBlock extends PureComponent {
	static defaultProps = {
		language: null,
	};
	render() {
    const { language, value } = this.props;
		return (
			<Prism language={language} style={atomDark}>
				{value}
			</Prism>
		);
	}
}

export default ({ src }) =>
  <ReactMarkdown 
    source={src}
    renderers={{ pre: CodeBlock, code: CodeBlock }}
  />;