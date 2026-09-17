# Radial Menu Project

A **React-based Radial Menu** component that appears on right-click. This project demonstrates how to create a custom radial menu with pie slices, dynamic text placement, and hover effects.

---

## Features

- **Radial Menu on Right-Click**: Displays a radial menu at the cursor position when right-clicking.
- **Customizable Pie Slices**: Each slice can have its own color, label, and click handler.
- **Dynamic Text Placement**: Text labels follow the arc of each slice and are dynamically spaced.
- **Hover Effects**: Slices pop out slightly on hover for better interactivity.
- **Responsive Design**: Works on any screen size.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mrjumpingjack/RadialMenu
   cd radial-menu-project
   Install dependencies:

2. **Install dependencies**
   ```bash
   npm install

3. **Run the project**
   ```bash
   npm run dev

## Usage
   ```js
   import RadialMenu from './RadialMenu/RadialMenu';

   import { useState } from 'react';
   import RadialMenu from './RadialMenu/RadialMenu';
   
   function App() {
     const [radialMenuVisibility, setRadialMenuVisibility] = useState    (false);
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
             style={{
               position: 'absolute',
               left: `${menuPosition.x}px`,
               top: `${menuPosition.y}px`,
               transform: 'translate(-50%, -50%)',
             }}
           >
             <RadialMenu />
           </div>
         )}
       </div>
     );
   }
   
   export default App;

 ```
## Customizing the Radial Menu

Customizing Slices
You can customize the slices in the RadialMenu component by passing an array of slice objects to the PieChart component. Each slice object can have the following properties:

  
    
      Property
      Type
      Description
    
      degree
      number
      The angle (in degrees) for the slice.
    
      color
      string
      The fill color of the slice (e.g., "blue", "#FF5733").
    
      label
      string
      The text label for the slice.
    
      onClick
      function
      A callback function triggered when the slice is clicked.
    
      labelColor
      string
      The color of the label text (default: "black").
    
      labelRadius
      number
      The radius (as a percentage of the slice radius) for label placement (default: 80).
    
  




