import React from 'react';

import { TranspiledCodeView } from '../components/TranspiledCodeView';
import { SandpackLayout } from '../components/SandpackLayout';
import { SandpackProvider } from '../contexts/sandpack-context';
import { CodeEditor } from './CodeEditor';

export default {
  title: 'components/Transpiled Code View',
};

export const Component = () => (
  <SandpackProvider
    customSetup={{
      entry: '/index.js',
      files: {
        '/index.js': {
          code: `const text = 'Hello World!'
const str = \`<div>\${text}</div>\`
`,
        },
      },
      dependencies: { '@babel/runtime': 'latest' },
    }}
  >
    <SandpackLayout>
      <CodeEditor />
      <TranspiledCodeView />
    </SandpackLayout>
  </SandpackProvider>
);
