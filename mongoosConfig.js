import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/hashcalculator", function(err) {
    if(err) 
        console.log("error in connection mongodb::::"+ err);
});

const HashDataSchema = mongoose.Schema({
    name: { type:String, required: true},
    rollno: { type:Number, required: true},
    hash: { type:String },
    nounce: { type: Number },
    time: { type: String }
});

export const HashData = mongoose.model("Data", HashDataSchema, "datas");