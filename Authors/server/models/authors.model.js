const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
	name:{
		type:String,
		required:[true,"name is required"],
		minlength:[3,"name must be at least 3 characters long"]
	}
	
},
{ timestamps:true}
);

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;