const sanakirju = require('sanakirju');

async function getDict() {
    const dictionary = await sanakirju.fromXML()
    await console.log(dictionary.length())

}


getDict()