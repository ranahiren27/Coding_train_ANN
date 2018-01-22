// Multiply
// Transpose
// fromArr
// toArr
// apply

class Matrix{
	constructor(row,col){
		this.row = row;
		this.col = col;
		this.data = [];
		for(let i=0; i<this.row; i++){
			this.data[i] = [];
			for(let j=0; j<this.col; j++){
				this.data[i][j] = 0;
			}
		}
	}	

	randomize(){
		for(let i=0; i<this.row; i++){
			for (let j =0; j<this.col; j++) {
					this.data[i][j] = Math.floor(Math.random(0,100)*10);
				}
		}
	}

	multiply(n){
		if(n instanceof Matrix){
			if(this.col == n.row){
				let result = new Matrix(this.row,n.col);
				for(let i=0; i<this.row; i++){
					for(let j=0; j<n.col; j++){
						for(let k=0; k<this.col; k++){
							result.data[i][j] += this.data[i][k] * n.data[k][j];
						}
					}
				}
				return result;
			}else{
				console.log("dims notMatching!!");
				return undefined;
			}
		}else{
			let result = new Matrix(this.row,this.col);
			for(let i=0; i<this.row; i++){
				for(let j=0; j<this.col; j++){
					result.data[i][j] = this.data[i][j] + n;
				}
			}
			return result;
		}
	}

	static apply(func,m){
		if(m instanceof Matrix){
			let result = new Matrix(m.row,m.col);
			for(let i=0; i<this.row; i++){
				for(let j=0; j<this.col; j++){
					result.data[i][j] = func(m.data[i][j]);
				}
			}
			return result;
		}else{
			console.log("Enter Valid Argument!!");
			return undefined;
		}
	}

	static fromArr(m){
		let result = new Matrix(1,m.length); 
		for(let i=0; i<m.length; i++){
			result.data[0][i] = m[i];
		}
		return result;
	}

	static transpose(m){
		let result = new Matrix(m.col,m.row);
		for(let i=0; i<this.row; i++){
			for(let j=0; j<this.col; j++){
				result.data[i][j] = m.data[j][i];
			}
		}
		return result;
	}

	static toArr(m){
		let result = [];
		for(let i=0; i<m.col; i++){
			result[i] = m.data[0][i];
		}
		return result;
	}

	print(){
		for(let i=0; i<this.row; i++){
			for(let j=0; j<this.col; j++){
				document.write(this.data[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;");
			}
				document.write("<br>");
		}
	}
}