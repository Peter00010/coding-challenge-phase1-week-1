# Student Grade Generator

## Overview

The Student Grade Generator is a simple JavaScript program designed to assess and categorize student performance based on input marks. This program offers a quick and straightforward way to determine the corresponding grade for a given set of marks.

## Usage

1. **Input Marks:** The user is prompted to input the student's marks. The input should be a numeric value between 0 and 100.

    ```javascript
    // Example: User input marks
    let marks = 45;
    ```

2. **Output Grades:**
   - Grade A: Marks greater than or equal to 80.
   - Grade B: Marks between 60 and 79.
   - Grade C: Marks between 49 and 59.
   - Grade D: Marks between 40 and 49.
   - Grade E: Marks less than 40.

    ```javascript
    // Example: Output grade based on input marks
    if (marks >= 80) {
      console.log("A");
    } else if (marks >= 60 && marks < 80) {
      console.log("B");
    } else if (marks >= 49 && marks < 60) {
      console.log("C");
    } else if (marks >= 40 && marks < 49) {
      console.log("D");
    } else {
      console.log("E");
    }
    ```

## License

Feel free to use, modify, and distribute this code for educational and non-commercial purposes.
