import React, { useMemo } from 'react';
import styles from './TableOfContents.module.css';

interface TableOfContentsProps {
  content: string;
  isDarkMode: boolean;
  onHeadingClick: (id: string) => void;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  content,
  isDarkMode,
  onHeadingClick
}) => {
  const headings = useMemo(() => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches = Array.from(content.matchAll(headingRegex));
    
    return matches.map((match): Heading => {
      const level = match[1].length;
      const text = match[2];
      const id = `heading-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      
      return {
        id,
        text,
        level
      };
    });
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={`${styles.container} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <h2 className={styles.heading}>Table of Contents</h2>
      <ul className={styles.list}>
        {headings.map((heading, index) => (
          <li 
            key={`${heading.id}-${index}`}
            className={`${styles.item} ${styles[`level${heading.level}`]}`}
            onClick={() => onHeadingClick(heading.id)}
          >
            {heading.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
