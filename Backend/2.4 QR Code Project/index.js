/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import * as fs from 'node:fs';
import qr from "qr-image";

import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "what website do you want a qr code for?",
        name: "userInfo"
    }
  ])
  .then((answers) => {
    const url = answers.userInfo;
    // Use user feedback for... whatever!!
    fs.writeFile("userInput.txt", url, (err)=>
    {
        if(err) throw err;
    });

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });