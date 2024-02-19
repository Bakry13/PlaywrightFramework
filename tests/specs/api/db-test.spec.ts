import { test, expect } from '@playwright/test';
import runQuery from '../../utilities/db-actions';

//==========exclude test file from global setup cookies==========
test.use({storageState:{cookies:[],origins:[]}});
//========================print query result======================
test.describe('Database test',() =>{
    test('test select query in mysql server', async () => {
        let p = runQuery("SELECT Host from user;");
        p.then((data)=>{ // promise and callback function
            console.log('data :', data); // result
            console.log("END");
        });
    });
}
);