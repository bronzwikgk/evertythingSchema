status	class	method	switch	validaDataTypes	description	inputDataTypeValidation	arguments	command	options			sample	
													
	validate				"this function as like other function returns either of the 4 types of output. requested in the option parameter argument. 
1. Self [ True/false] : returns the output of the method called 
2. value [ a/b] : returns either of the argument 
3. if(True) : callback [ a/b],
4. if(False) : callback [ a/b]"	validate.isEmpty(input, if(false) continue;)	validate.method( input,options)		"{ options.ValidateAgainst,
options.output.ifTrue Return : [ value,callback, self [ true || false ] }"				
		is											
			isEmpty	any			[ input,options ]						
			isObject	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isArray	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isString	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isInteger	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isNumber	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isBoolean	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isNull	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isUndefined	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isHTML	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isRange	any		validate.isEmpty(input, if(false) continue;)	[ input,options ]						
			isChild(input,parent)	object			[ input,options ]						
			isParent(input,child)	object			[ input,options ]						
							[ input,options ]						
													
		compare											
			isEqual2		Equal to: returns true if the operands are equal : x == y	a and b isEmpty false ; a and b instanceof(True)		('equal', (a, b) => a == b)					
			isSame		Compares all the key's and values in case of Object and elements of Array's. 			('contains', (a, b) => a.indexOf(b) > -1, Array.isArray)					
			isEqual2Strict		Strict equal to: true if the operands are equal and of the same type : x === y			('equal', (a, b) => a === b)					
			isGreaterthan()		Greater than: true if left operand is greater than the right operand : x > y	 ab a present and a b is number		('greaterThan', (a, b) => a > b, numberValidator)					
			isGreaterthanOrEqual()		Greater than or equal to: true if left operand is greater than or equal to the right operand : x >= y	 ab a present and a b is number		('greaterThanInclusive', (a, b) => a >= b, numberValidator)					
			isSmallerthan()		Less than: true if the left operand is less than the right operand : x < y	 ab a present and a b is number		('lessThan', (a, b) => a < b, numberValidator)					
			isSmallerthanOrEqual()		Less than or equal to: true if the left operand is less than or equal to the right operand : x <= y			('lessThanInclusive', (a, b) => a <= b, numberValidator)					
			isOneOf/isIn		For array's			('in', (a, b) => b.indexOf(a) > -1))					
			hasAllOf		This method has options.allKeys, checks keys,; options.allValues, check for values.								
			instanceof()			a and b isEmpty false	[ input,options ]						
													
		logic											
			and		Logical AND: true if both the operands are true, else returns false : x && y	takes an array of operands mostly from the validator it self		array.every(...[validation.method(switchName,input,options)])					
			or		Logical OR: true if either of the operands is true; returns false if both are false : x || y	takes an array of operands mostly from the validator it self		array.some()					
			not		Logical NOT: true if the operand is false and vice-versa. : !x	takes an array of operands mostly from the validator it self							
													
													