# InTandem Map Application

A React-based map application with a draggable marker using `react-leaflet`, which allows users to add remarks at specific locations. The app also includes a sidebar that stores and displays a history of remarks, enabling users to revisit previously saved locations.

## Features

- **Interactive Map**: 
  - Displays a map using OpenStreetMap tiles via `react-leaflet`.
  - Allows users to drag a marker to different locations.
- **Add Remarks**: 
  - Users can add remarks to a location by dragging the marker and inputting the remark in the popup.
  - Remarks include the location's address, custom note, and timestamp.
- **Remark History**: 
  - Stores all added remarks in `localStorage` for persistence.
  - Displays a list of remarks in a sidebar.
  - Clicking on a remark in the sidebar moves the marker to the saved location.
- **Responsive Design**: 
  - Sidebar toggles visibility for smaller screens.
  - Uses Tailwind CSS for styling.

## Tech Stack

- **React**: Frontend framework.
- **React Leaflet**: For map rendering and interaction.
- **Tailwind CSS**: For styling.
- **React Icons**: For icons in the UI.
- **LocalStorage**: For storing and retrieving remark history.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/intandem-map-app.git
   cd intandem-map-app
