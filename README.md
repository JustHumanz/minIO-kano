# OSS-Leak

##### Description
Web gallery image

##### Level
Medium

##### Policy
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation",
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::*"
            ]
        }
    ]
}
```

##### Deploy
- Running minIO sebagai oss server
- buat bucket dengan nama `kano-bucket`
- buat access&secret di minIO
- Apply access&secret policy 
- Isi access&secret key di `config.json`
- build image dengan docker `docker build . -t oss-leak`
- run image

##### Workflow
Peserta harus mencari file config di client side dan mencoba masuk ke oss via console

##### Flag
IFEST2021{1n5ecur3_ru1es}