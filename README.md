# nasa-epic-images-retrieval

Single-page application to retrieve images of Earth using NASA Epic API. The images are taken daily by the EPIC camera onboard the DSCOVR spacecraft.

[Visit Image Retriever website!](https://earth-images-retriever.netlify.app/)

React.js and “Create React App” were used to develop this single-page application.

Distances from satellite to Earth, satellite to Moon, satellite to Sun and Sun to Earth were calculated using formula for distance between two points in xyz-space and coordinates of satellite, Sun, Earth and Moon retrieved from NASA API.

Distance between two points P1 = (x1, y1, z1) and P2 = (x2, y2, z2) in xyz-space is:

d(P1,P2) = sqrt((x1 - x2)^2 + (y1 - y2)^2 + (z1 - z2)^2)

NASA provides more than one Earth image for most days, but this application only shows the first image per day. The page will eventually have an option to view all the available images for the selected day.

The API doesn’t provide data for some days.

NASA Epic API documentation can be accessed at https://epic.gsfc.nasa.gov/about/api
