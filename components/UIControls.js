import React from 'react';
import { useUI } from '../contexts/UIContext';

const UIControls = () => {
  const { darkMode, setDarkMode, largeText, setLargeText } = useUI();

  return (
    <div className="ui-controls">
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
        Dark Mode
      </label>
      <label>
        <input
          type="checkbox"
          checked={largeText}
          onChange={(e) => setLargeText(e.target.checked)}
        />
        Large Text
      </label>
    </div>
  );
};

export default UIControls;