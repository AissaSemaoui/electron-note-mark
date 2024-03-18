import { useState } from 'react';

import {
  EditorRoot,
  EditorContent,
  JSONContent,
  defaultEditorProps,
  EditorCommand,
  EditorCommandEmpty,
  EditorBubble,
} from 'novel';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { useDebouncedCallback } from 'use-debounce';
import { SuggestionsCommand, slashCommand } from './slash-commands';
import { defaultExtensions } from './extensions';
import { NodeSelector } from './selectors/node-selector';
import { LinkSelector } from './selectors/link-selector';
import { TextButtons } from './selectors/text-buttons';
import { ColorSelector } from './selectors/color-selector';

import './prosemirror.css';
import { defaultEditorContent } from '@/lib/content';

interface EditorProps {
  content: string | null;
  setContent: (content: string) => void;
}

const Editor = ({ content, setContent }: EditorProps) => {
  console.log('content from inside : ', content);
  const [openNode, setOpenNode] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openColor, setOpenColor] = useState(false);

  const getParsedContent = (): JSONContent | null => {
    try {
      if (!content) return defaultEditorContent;

      return JSON.parse(content);
    } catch (e) {
      return defaultEditorContent;
    }
  };

  const [initialContent, setInitialContent] = useState<null | JSONContent>(getParsedContent());

  const debouncedUpdates = useDebouncedCallback(async (editor) => {
    const json = editor.getJSON();

    setInitialContent(json);
  }, 500);

  useUpdateEffect(() => {
    setContent(JSON.stringify(initialContent));
  }, [initialContent]);

  if (!initialContent) return null;

  return (
    <EditorRoot>
      <EditorContent
        extensions={[...defaultExtensions, slashCommand]}
        initialContent={initialContent}
        editorProps={{
          ...defaultEditorProps,
          attributes: {
            class: `max-w-full h-full w-full prose-lg prose-stone dark:prose-invert prose-headings:font-title font-default focus:outline-none`,
          },
        }}
        className="relative w-full h-full border-none mb-2 max-w-screen border-muted bg-background sm:rounded-lg sm:border sm:shadow-lg [&>div:first-child]:h-full"
        onUpdate={({ editor }) => {
          debouncedUpdates(editor);
        }}
      >
        <EditorCommand className="z-50 h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
          <EditorCommandEmpty className="px-2 text-muted-foreground">No results</EditorCommandEmpty>
          <SuggestionsCommand />
        </EditorCommand>
        <EditorBubble
          tippyOptions={{
            placement: 'top',
          }}
          className="flex w-fit max-w-[90vw] overflow-hidden rounded border border-muted bg-background shadow-xl"
        >
          <NodeSelector open={openNode} onOpenChange={setOpenNode} />
          <LinkSelector open={openLink} onOpenChange={setOpenLink} />
          <TextButtons />
          <ColorSelector open={openColor} onOpenChange={setOpenColor} />
        </EditorBubble>
      </EditorContent>
    </EditorRoot>
  );
};

export default Editor;
