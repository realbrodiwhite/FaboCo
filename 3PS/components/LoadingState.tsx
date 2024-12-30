import React from 'react';
import styles from './DocumentationViewer.module.css';

interface LoadingStateProps {
  isDarkMode?: boolean;
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  isDarkMode = false, 
  message = 'Loading...' 
}) => {
  return (
    <div className={`p-6 ${styles.skeleton}`}>
      <div className={`h-8 rounded w-3/4 mb-4 ${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
      }`}></div>
      <div className="space-y-3">
        <div className={`h-4 rounded w-full ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}></div>
        <div className={`h-4 rounded w-5/6 ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}></div>
        <div className={`h-4 rounded w-4/6 ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}></div>
      </div>
      {message && (
        <div className={`text-center mt-4 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
};

export const LoadingOverlay: React.FC<LoadingStateProps> = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <LoadingState {...props} />
      </div>
    </div>
  );
};

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  loadingProps?: LoadingStateProps
) => {
  return function WithLoading({ isLoading, ...props }: P & { isLoading: boolean }) {
    if (isLoading) {
      return <LoadingState {...loadingProps} />;
    }
    return <WrappedComponent {...props as P} />;
  };
};
