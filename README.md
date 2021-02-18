# Mr. Roboger's Neighborhood

#### A website that iterates through a numeral and returns silly phrases

#### By **Laurie Waller**

## Technologies Used

* CSS
* HTML
* JavaScript
* jQuery

## Description

This website prompts the user to input an arabic numeral. It then returns a range of numbers from 0 to the input numeral, with the words/sentence "Beep!," "Boop!," and "Won't you be my neighbor?" substituted for the numbers 1, 2, and 3 respectively. 

## Setup/Installation Requirements

  1. Go to the main page of the repository (https://github.com/laurie7/mr-roboger-cr3)
  2. In the top righthand corner of the list of files, click the Code dropdown menu.
  3. Click on the clipboard icon to copy the URL to the GitHub repo.
  4. On your computer, open Terminal and navigate to the parent folder where you plan to clone the repo folder.
  5. Type in `git clone` and then paste the URL you copied:
      `git clone https://github.com/laurie7/mr-roboger-cr3`. Press Enter.
  6. One great application to open your files in is Visual Studio Code. To download VS Code, go to https://code.visualstudio.com/ and click on Download in the top righthand corner. From there, choose the donwload type necessary from your computer and follow the prompts.
  7. After you have completed the download, return to Terminal. Once you've ensured you are in the portfolio folder, type `code .` and press Enter. This will open all files in VS Code for you.

## Tests

**Describe: beepBoop()**

Test: "It should return an array with a 0 if the number 0 is inputted."
Expect: (beepBoop(0).toEqual([0]);

Test: "It should return 'Beep!' for the digit 1."
Expect: (beepBoop(1).toEqual([0, "Beep!"]);

Test: "It should return 'Boop!' for the digit 2."
Expect: (beepBoop(2).toEqual([0, "Beep!", "Boop!"]);

Test: "It should return 'Won't you be my neighbor?' for the digit 3."
Expect: (beepBoop(3).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"]);

Test: "The rule for the digit 2 should override the rule for the digit 1."
Expect: (beepBoop(12).toEqual([0, 1, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, "Beep!", "Boop!"]);

Test: "The rule for the digit 3 should override the rule for the digits 1 and 2."
Expect: (beepBoop(23).toEqual([0, 1, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!," "Boop!", "Boop!", "Won't you be my neighbor?"]);

## Known Bugs

* No known bugs at this time.

## License

MIT

Copyright (c) 2021 by Laurie Waller

## Contact Information

_Laurie Waller (lauriewaller7@gmail.com)_