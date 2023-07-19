const fs = require('fs');
const xml2js = require('xml2js');


fs.readFile('./sma_gentext.xml', 'utf-8', (err, data) => {
  if (err) {
    console.error("An error occurred:", err);
    return;
  }

  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error("An error occurred:", err);
      return;
    }
    
    const body = result.root.file[0].body[0];
    const transUnit = body['trans-unit'];

    transUnit.forEach(element => {
      if(element['$'].id === '42007'){
        fs.writeFile('output.txt', element.target[0], (err) => {
          if (err) throw err;
         });
      }
    });
  });
});