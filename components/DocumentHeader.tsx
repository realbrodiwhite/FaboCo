import React from 'react';
import styles from './DocumentationViewer.module.css';

interface DocumentHeaderProps {
  title: string;
  zoom: number;
  isDarkMode: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export const DocumentHeader: React.FC<DocumentHeaderProps> = React.memo(({
  title,
  zoom,
  isDarkMode,
  onZoomIn,
  onZoomOut
}) => {
  return (
    <div className={`p-4 border-b flex items-center justify-between ${
      isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
    }`}>
      <h1 className={`text-xl font-bold truncate ${
        isDarkMode ? 'text-gray-100' : 'text-gray-900'
      }`}>
        {title}
      </h1>
      <div className={styles.zoomControls}>
        <button
          onClick={onZoomOut}
          className={styles.zoomButton}
          aria-label="Zoom out"
        >
          -
        </button>
        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
          {zoom}%
        </span>
        <button
          onClick={onZoomIn}
          className={styles.zoomButton}
          aria-label="Zoom in"
        >
          +
        </button>
      </div>
    </div>
  );
});

DocumentHeader.displayName = 'DocumentHeader';
