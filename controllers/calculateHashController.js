import express from 'express';
import { HashData } from '../mongoosConfig';
import SHA256 from 'crypto-js/sha256';



export default {
    post : _post
}

function _post(req, res) {
    const data = req.body;
    const difficulty = Number(req.body.difficulty);
    let nounce = 0, hash;
    console.log(data);

    while(true) {
        nounce += 1;
        hash = SHA256(data.name + data.rollno + nounce).toString();
        if(hash.substring(0, difficulty) === Array(difficulty+1).join("0")){
            break;
        }
    }
    const output = {hash, nounce};
    var hash_data = new HashData({...data,...output})
    console.log(hash_data);
    hash_data.save((err) => {
        if(err)
            console.log('mongodb err::::'+ err);
    })
    res.send(output);
}

 