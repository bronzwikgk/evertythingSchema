


operate
====== 
brief
operate class is part of process Module.

it enforces attributes and parameter on any entity processed in the process module,

eg. users : { hasAllOf: true } << the operate should enforce that all the key's in while any operation on  are present in both input and output, using method [operate.hasAllof(input,options.argB,options.output.self)]>>



this class extends operator class. [ operator might be merged to operate ]
it takes in the following arguments and parameters.
+ input,
+ options,
+ options.output.self = [true/false]
+ options.output.value = [input,argB]
+ options.output.callback = [[(ifTrue) callback;],[(ifTrue) callback;]]



it has the followsing methods
>is.
>> + in   
          | to check if a property is in an object [ has a default operate to check if the input is an object, throws an error if not].
>> + isEmpty 
>> + isObject
>> + isArray
>> + isString
>> + isInteger
>> + isNumber
>> + isBoolean
>> + isNull
>> + isUndefined
>> + isHTML
>> + isRange
>> + isChild(input,parent)
>> + isParent(input,child)


> compare.
>> + isEqual2
>> + isSame
>> + isEqual2Strict
>> + isGreaterthan()
>> + isGreaterthanOrEqual()
>> + isSmallerthan()
>> + isSmallerthanOrEqual()
>> + isOneOf/isIn
>> + hasAllOf
>> + instanceof()

> SetLogic,
>> + and
>> + or
>> + not
											
								
													
													
