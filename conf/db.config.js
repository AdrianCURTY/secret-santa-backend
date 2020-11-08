var path = require('path');
/**
 * CONFIG
 */
// Relative path to db folder from the project root directory 
const dbFolder="db";
const port = 66666;
const userCollectionName="user";
const secretSantaCollectionName="association";




function computedbFolderPath(db){
    var root = path.dirname(require.main.filename);
    // build absolute path to db folder
    return path.join(root,db)
}
module.exports={
    dbFolder:computedbFolderPath(dbFolder),
    port:66666,
    collectionName:{
        user:userCollectionName,
        secretSanta:secretSantaCollectionName
    }
}