import { useState } from 'react';
import './App.css';
import RadialMenu from './RadialMenu/RadialMenu';

function App() {
  const [radialMenuVisibility, setRadialMenuVisibility] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setRadialMenuVisibility(true);
  };

  const handleCloseMenu = () => {
    setRadialMenuVisibility(false);
  };

  return (
    <div
      style={{ width: '100vw', height: '100vh' }}
      onContextMenu={handleContextMenu}
      onClick={handleCloseMenu}
    >
      {radialMenuVisibility && (
        <div
          id="radial-menu-container"
          style={{
            position: 'absolute',
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`,
            transform: 'translate(-50%, -50%)', // Center the menu on the cursor
          }}
        >
          <RadialMenu />
        </div>
      )}
    </div>
  );
}

export default App;