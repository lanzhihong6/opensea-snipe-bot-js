/*  Copyright (c) 2022 Duc-Binh Nguyen
 */

'use strict';

async function hotfix() {
    const {copyFile} = require('fs');

    console.log('\nRun hotfix...');

    /*  Additional gas fee option for fullfillOrder().
     */
    console.log('* Customized opensea-js fulfillOrder() for custom gas setting');
    await copyFile(
        './hotfix/opensea-lib-seaport.js',
        './node_modules/opensea-js/lib/seaport.js',
        (err) => {
            if (err) {
                console.log(err);
            }
        });
}

hotfix().then(() => {
    console.log('Hotfix done.\n');
});
