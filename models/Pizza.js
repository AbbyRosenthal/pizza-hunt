//ony imports the parts of mongoose we need
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
        type: String,
        default: 'Large'
    },
    //could specify "array" instead of brackets... same result
    toppings: [],

    comments: [
        {
            //telling mongoose the comment comes from the comment model
            type: Schema.Types.ObjectId,
            //tells the pizza model which document to search
            ref: 'Comment'
        }
    ]
},
{
    //telling the schema it can use virtuals
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

//get total count of comments and replies on retrieval ... this is a virtual
PizzaSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

//create teh PIzza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;