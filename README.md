# nasa-epic-images-retrieval

Web page to retrieve and show images of Earth from the EPIC camera onboard the DSCOVR spacecraft.

[Visit Image Retriever website!](https://earth-images-retriever.netlify.app/)

React.js and “Create React App” were used to develop this single-page application.

Distances from satellite to earth, satellite to moon, satellite to sun and sun to earth were calculated using formula for distance between two points in xyz-space and coordinates of satellite, sun, earth and moon retrieved from NASA API.

Distance between two points P1 = (x1, y1, z1) and P2 = (x2, y2, z2) in xyz-space is:

d(P1,P2) = sqrt((x1 - x2)^2 + (y1 - y2)^2 + (z1 - z2)^2)

NASA Epic API documentation can be accessed at https://epic.gsfc.nasa.gov/about/api

NASA provides more than one earth image for most days, but this application only shows the first image per day. The page will eventually have an option to view all the available images for the selected day.s

The API doesn’t provide data for some days.
