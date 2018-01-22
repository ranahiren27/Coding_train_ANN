//activation Function!!
function sigmoi(x) {
	return (1/1-Math.exp(-x));
}

class Neural_Network{
	constructor(no_input_layer, no_hidden_layer, no_output_layer){
		//inti no hidden nodes, input nodes and output nodes
		this.no_output_layer = no_output_layer;
		this.no_input_layer = no_input_layer;
		this.no_hidden_layer = no_hidden_layer;

		//init randomize weigths 
	    this.input_hidden_weigths = new Matrix(this.no_input_layer, this.no_hidden_layer);
		this.hidden_output_weigths = new Matrix(this.no_hidden_layer, this.no_output_layer)
		
		this.input_hidden_weigths.randomize();
		this.hidden_output_weigths.randomize();	
	}


	feedforward(inputs){
		//converting inputs ARRAY--->Matrix object
		let inputs = Matrix.toArr(inputs);

		// output = sigmoi(input*weigth)
		input_to_hidden = inputs.multiply(this.input_hidden_weigths);
		hidden_output = Matrix.apply(sigmoi, input_to_hidden);

		hidden_to_output = hidden_output.multiply(this.hidden_output_weigths);
		output = Matrix.apply(sigmoi, hidden_to_output);
		//converting inputs Matrix--->ARRAY object
		ans = Matrix.fromArr(output);

		//returning guess!!!
		return ans
	}

	train(){
		// BackPropogation will come here!!
	}

}