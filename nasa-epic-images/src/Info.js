import React from "react";

function Info() {
  return (
    <div className="info-section">
      <div className="info-section-content">
        <h2 className="whitesmoke">What does this website do?</h2>
        <p>
          This page shows daily and historic imagery of the Earth captured by
          the The Deep Space Climate Observatory (DSCOVR)'s Earth Polychromatic
          Imaging Camera (EPIC) instrument.
        </p>
        <p>
          Select a day from the dropdown menu shown above to see a natural image
          of the earth from the satellite's vantage point.
        </p>
        <p style={{ paddingTop: "30px", paddingBottom: "30px" }}>
          <div>
            <a
              style={{ display: "flex", flexDirection: "column" }}
              href="https://www.nesdis.noaa.gov/sites/default/files/assets/images/point_of_lagrange1_big.jpg"
            >
              <img
                src="https://www.nesdis.noaa.gov/sites/default/files/assets/images/point_of_lagrange1_big.jpg"
                alt="DSCOVR position in space. Credit: NOAA"
                title="DSCOVR position in space. Credit: NOAA"
                style={{ marginRight: "auto", marginLeft: "auto" }}
              />
              <figcaption>
                DSCOVR position in space.
                <a
                  className="link"
                  href="https://www.nesdis.noaa.gov/content/dscovr-deep-space-climate-observatory"
                >
                  Credit: NOAA
                </a>
              </figcaption>
            </a>
          </div>
        </p>
        <p>
          The{" "}
          <a
            className="link"
            href="https://en.wikipedia.org/wiki/Deep_Space_Climate_Observatory"
          >
            DSCOVR satellite{" "}
          </a>
          was launched by SpaceX on a Falcon 9 launch vehicle on February 11,
          2015, from Cape Canaveral. It maintains the real-time solar wind
          monitoring capabilities, which are critical to the accuracy and lead
          time of space weather alerts and forecasts. Without timely and
          accurate warnings, space weather events—like geomagnetic storms—have
          the potential to disrupt nearly every major public infrastructure
          system on Earth, including power grids, telecommunications, aviation
          and GPS.
        </p>
        <p>
          The device is positioned at the{" "}
          <a
            className="link"
            href="https://en.wikipedia.org/wiki/Lagrange_point"
          >
            Sun-Earth L1 Lagrangian point
          </a>
          , which is the neutral gravity point between the Earth and Sun,
          approximately 1,609,344 km from Earth. L1 is a good position from
          which to monitor the Sun, because the constant stream of particles
          from the Sun (the solar wind) reaches L1 up to an hour before reaching
          Earth. From this position, DSCOVR can typically provide 15- to
          60-minute advanced warning before a storm of particles and magnetic
          field, known as a coronal mass ejection (or CME), reaches Earth.
          DSCOVR data also helps improve predictions of geomagnetic storm impact
          locations.
        </p>
      </div>
    </div>
  );
}

export default Info;
