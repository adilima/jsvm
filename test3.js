
function main(argc, argv) {
    var ft = FunctionType(Int32, Array(Int8Ptr, Int8Ptr, Int8Ptr, Int32));
    var msgbox = module.Function("MessageBoxA", ft);
    ft = FunctionType(Int32, Array(Int8Ptr, Int8Ptr), true);
    var wsprintf = module.Function("wsprintfA", ft);
    var buff = Int8.alloca(512);
    wsprintf.invoke(buff, "%s started with %d arguments", argv.value, argc);
    msgbox.invoke(Int8Ptr.value(0), 
        buff, "Info", Int32.value(64));
    this.return(0);
}

