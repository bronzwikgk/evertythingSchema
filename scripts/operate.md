


operate
====== 
brief explaination.
operate class is part of process Module.
it enforces attributes and parameter on any entity processed in the process module,

eg. users : { hasAllOf: true } << the operate should enforce that all the key's while any operation are present in both input and output, using method [operate.hasAllof(input,options.argB,options.output.self)]>>



this class extends operator class.
it takes in the following arguments and parameters.
+ input,
+ options,
+ options.output.self = [true/false]
+ options.output.value = [input,argB]
+ options.output.callback = [[(ifTrue) callback;],[(ifTrue) callback;]]



it has the followsing methods
>is.
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

> SetLogic
>> + and
>> + or
>> + not
											
								
													
													