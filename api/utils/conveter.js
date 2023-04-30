import xml2js from 'xml2js';

const builder = new xml2js.Builder();
export const xmlc = (data) => {
    return builder.buildObject(data);
}