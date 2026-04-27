ace.define("ace/snippets/swift", 
    ["require", "exports", "module"],
    function (require, exports, module) {
        "use strict";
        exports.snippetText = "\
# Module Docstring\n\
snippet let - Creates a constant, which can't be changed\n\
	let ${1:variable name} = ${2:value}\n\
snippet var - Creates a variable, which can be changed\n\
	var ${1:variable name} = ${2:value}\n\
snippet for - Repeats code a given number of times\n\
	for i in ${1:from} ... ${2:to} {\n\
		${3:TODO: write code...}\n\
	}\n\
snippet while - Repeats code while condition is true\n\
	while ${1:condition} {\n\
		${2:TODO: write code...}\n\
	}\n\
snippet repeat - Repeats code while condition is true\n\
	repeat {\n\
		${1:TODO: write code...}\n\
	} while ${2:condition}\n\
snippet if - Changes which path your code takes\n\
	if ${1:condition} {\n\
		${2:TODO: write code...}\n\
	}\n\
snippet elif - else if some other condition is True, do something\n\
	else if ${1:condition} {\n\
		${2:TODO: write code...}\n\
	}\n\
snippet else - else do some other thing\n\
	else {\n\
		${1:TODO: write code...}\n\
	}\n\
snippet switch - Chooses a code path based on value\n\
	switch ${1:value} {\n\
	case ${2:pattern}:\n\
		${3:code}\n\
	default:\n\
		${4:code}\n\
	}\n\
snippet func - Encapsulates logics and behavior\n\
	func ${1:name}(${2:arguments}) {\n\
		${3:function body}\n\
	}\n\
snippet protocol - Defines a set of behaviors\n\
	protocol ${1:name} {\n\
		${2:requirements}\n\
	}\n\
snippet enum - Defines a set of related values\n\
	enum ${1:name} {\n\
		case ${2:case}\n\
	}\n\
snippet struct - Value type that encapsulates state and behavior\n\
	struct ${1:name} {\n\
		${2:fields}\n\
	}\n\
snippet class - Reference type that encapsulates state and behavior\n\
	class ${1:name} {\n\
		${2:code}\n\
	}\n\
";
        exports.scope = "swift"
    }
)