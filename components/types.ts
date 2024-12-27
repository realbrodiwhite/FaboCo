import { ReactNode } from 'react';
import { Components, ExtraProps } from 'react-markdown';
import { HTMLProps } from 'react';
import { SyntaxHighlighterProps } from 'react-syntax-highlighter';

export interface Document {
  name: string;
  content: string;
  kbRefs: string[];
  version: string;
  lastUpdated: string;
  category: string;
  matches?: {
    title: boolean;
    content: boolean;
  };
}

export interface DocumentDetails extends Document {
  [key: string]: any;
}

// Base props that extend React-Markdown's ExtraProps
interface BaseMarkdownProps extends ExtraProps {
  children?: ReactNode;
  node?: any;
  [key: string]: any;
}

// Component-specific props that extend the base props
export interface HeadingProps extends BaseMarkdownProps {
  level?: number;
}

export interface ParagraphProps extends BaseMarkdownProps {}

export interface BlockquoteProps extends BaseMarkdownProps {}

export interface ListProps extends BaseMarkdownProps {}

export interface ListItemProps extends BaseMarkdownProps {}

export interface TableProps extends BaseMarkdownProps {}

export interface TableCellProps extends BaseMarkdownProps {
  style?: React.CSSProperties;
  isHeader?: boolean;
}

export interface CodeBlockProps extends BaseMarkdownProps {
  inline?: boolean;
  className?: string;
}

export interface SyntaxHighlighterCustomProps extends Omit<SyntaxHighlighterProps, 'children'> {
  children: string;
  style: { [key: string]: any };
  PreTag: keyof JSX.IntrinsicElements;
}

// The final type for our markdown components
export type MarkdownComponents = Components;
