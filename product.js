module.exports = {
    name :{
        type : String,
    },
    price :{
        type : Number,
    },
    created_date: { 
        type : Date,
        default : Date.now
    }
}