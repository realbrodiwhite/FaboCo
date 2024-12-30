import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  HeadingProps,
  ParagraphProps,
  BlockquoteProps,
  ListProps,
  ListItemProps,
  CodeBlockProps,
  TableProps,
  TableCellProps,
  MarkdownComponents
} from './types';
import styles from './DocumentContent.module.css';

interface DocumentContentProps {
  content: string;
  isDarkMode: boolean;
  zoom: number;
}

export const DocumentContent: React.FC<DocumentContentProps> = React.memo(({ 
  content, 
  isDarkMode, 
  zoom 
}) => {
  // Markdown components configuration
  const markdownComponents = useMemo<MarkdownComponents>(() => ({
    h1: ({ children, ...props }: HeadingProps) => {
      const id = `heading-${props.key || Math.random().toString(36).substr(2, 9)}`;
      return (
        <h1 
          id={id}
          className={styles.heading1}
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: HeadingProps) => {
      const id = `heading-${props.key || Math.random().toString(36).substr(2, 9)}`;
      return (
        <h2 
          id={id}
          className={styles.heading2}
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: HeadingProps) => {
      const id = `heading-${props.key || Math.random().toString(36).substr(2, 9)}`;
      return (
        <h3 
          id={id}
          className={styles.heading3}
          {...props}
        >
          {children}
        </h3>
      );
    },
    p: ({ children }: ParagraphProps) => (
      <p className={styles.paragraph}>
        {children}
      </p>
    ),
    ul: ({ children }: ListProps) => (
      <ul className={`${styles.list} list-disc`}>
        {children}
      </ul>
    ),
    ol: ({ children }: ListProps) => (
      <ol className={`${styles.list} list-decimal`}>
        {children}
      </ol>
    ),
    li: ({ children }: ListItemProps) => (
      <li className={styles.listItem}>
        {children}
      </li>
    ),
    blockquote: ({ children }: BlockquoteProps) => (
      <blockquote className={styles.blockquote}>
        {children}
      </blockquote>
    ),
    code: ({ node, className, children, ...props }: CodeBlockProps) => {
      const match = /language-(\w+)/.exec(className || '');
      const isInline = !match;
      return !isInline ? (
        <div className={styles.codeBlock}>
          <SyntaxHighlighter
            language={match[1]}
            style={tomorrow as any}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
          <button
            onClick={() => navigator.clipboard.writeText(String(children))}
            className={styles.copyButton}
          >
            Copy
          </button>
        </div>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    table: ({ children }: TableProps) => (
      <div className={styles.table}>
        <table>
          {children}
        </table>
      </div>
    ),
    th: ({ children }: TableCellProps) => (
      <th className={styles.tableHeader}>
        {children}
      </th>
    ),
    td: ({ children }: TableCellProps) => (
      <td className={styles.tableCell}>
        {children}
      </td>
    ),
  }), []);

  const scaleStyle = useMemo(() => ({
    transform: `scale(${zoom / 100})`
  }), [zoom]);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className={styles.scaleContainer} style={scaleStyle}>
        <ReactMarkdown
          components={markdownComponents}
          className="prose max-w-none"
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
});

DocumentContent.displayName = 'DocumentContent';
