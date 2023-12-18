# Speed Detector

## Overview

The Speed Detector is a JavaScript program designed to monitor vehicle speeds and provide real-time feedback to drivers. This program takes the speed of a car as input and assesses whether the driver is within the speed limit or if demerit points should be assigned.

## Usage

1. **Input Speed:** Prompt the user to input the speed of the car. The input should be a numeric value representing the speed in km/h.

    ```javascript
    // Example: User input speed
    let speed = 80;
    ```

2. **Output Results:**
   - If the speed is less than 70 km/h, it displays "Ok," indicating the driver is within the speed limit.
   - For speeds exceeding 70 km/h, the program calculates demerit points: one point for every 5 km/h over the limit.
   - The total demerit points are then displayed as "Points: X."

    ```javascript
    // Example: Output demerit points based on input speed
    if (speed < 70) {
      alert("Ok");
    } else {
      let demeritPoints = Math.floor((speed - 70) / 5);
      alert("Points: " + demeritPoints);
      
      if (demeritPoints > 12) {
        alert("License suspended");
      }
    }
    ```

## Author and License

Authored by Peter Mwongela.
All rights reserved.
