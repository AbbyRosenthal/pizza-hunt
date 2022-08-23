//ony imports the parts of mongoose we need
const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createAt: {
        type: Date, 
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    //could specify "array" instead of brackets... same result
    toppings: []
});

//create teh PIzza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;