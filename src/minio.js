var Minio = require('minio')
import Config from '../config.json'
const buket = 'kano-bucket'
var minioClient = new Minio.Client({
    endPoint: Config.EndPoint,
    port: 9000,
    useSSL: false,
    accessKey: Config.accessKey,
    secretKey: Config.secretKey
});

export function getBktList() {
    var stream = minioClient.extensions.listObjectsV2WithMetadata(buket,'', true,'')
    var data = []
    stream.on('data', function(obj) {
        data.push({
            url:    Config.MinIOURL+"/"+buket+"/"+obj.name,
            size:   obj.size,
            source: obj.metadata['X-Amz-Meta-Source'],
            author: atob(obj.metadata['X-Amz-Meta-Author'])
        })
    })
        stream.on('error', function(err) {
    console.log(err) 
    })
    return data
}