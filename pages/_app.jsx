import React from 'react';

import Datastore from 'nedb';
const appDir = process.cwd();
const dbFile = (appDir.replace(/\\/g, '/')) + '/data/lab6db';
export const database = new Datastore({ filename: dbFile });
database.persistence.setAutocompactionInterval(5000);

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
