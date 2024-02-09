import path from 'path'; //for excel
import xlsx  from 'xlsx'; // we need to install xlsx library using this command 'npm i xlsx --save'
import paths from '../paths';

//======================read excel file====================
function readExcel (fileName:string) {
    try {
        const excelFilePath = path.join(paths.testData, fileName);
        const workbook = xlsx.readFile(excelFilePath);
        let data = [];
        const sheets = workbook.SheetNames;
            const sheetName = workbook.SheetNames[0]; //get first sheet name
            const sheet = workbook.Sheets[sheetName];
            data = xlsx.utils.sheet_to_json(sheet);
        // console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export default readExcel;