import { parse } from 'csv-parse/sync'; //need to be installed by command "npm install csv"
import fs from 'fs'; //for csv
import path from 'path'; //for csv
import paths from '../paths';

//======================read csv file====================
function readCsv(fileName:string) {
    const csvFilePath = path.join(paths.testData, fileName);
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    const records = parse(fileContent, {
        delimiter: ',',
        columns: true,
        skip_empty_lines: true
        });
    // console.log(records[0].username, records[0].password);
    return records;
}

export default readCsv;