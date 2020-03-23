
function testMessage(strMsg) {
    print("testMessage: argument => " + strMsg);
    var ft = FunctionType(Int32, Array(Int8Ptr), true);
    var printf = module.Function("printf", ft);
    printf.invoke("testMessage: %s\n", strMsg);
    this.return();
}

var fType = FunctionType(Void, Array(Int8Ptr));
var pfn = module.Function("testMessage", fType);
pfn.implementation = testMessage;

if (typeof(vm) == "undefined") {
    print("creating VM from module");
    var vm = module.getVM();
}
vm.runFunction(pfn, vm.GenericValue("This is a test from JavaScript\nThe function will be executed directly by LLVM, not by JavaScript.\n"));
