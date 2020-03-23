
function WinMain(hInstance, hPrev, lpCmdLine, nShow) {
    var ft = FunctionType(Int32, Array(Int8Ptr, Int8Ptr, Int8Ptr, Int32));
    var msgbox = module.Function("MessageBoxA", ft);
    ft = FunctionType(Int32, Array(Int8Ptr, Int8Ptr), true);
    var wsprintf = module.Function("wsprintfA", ft);
    ft = FunctionType(Int8Ptr, Array());
    var getDesktopWindow = module.Function("GetDesktopWindow", ft);
    var buff = Int8.alloca(512);
    wsprintf.invoke(buff, "WinMain: hInstance = %p; hPrevInstance = %p\nlpCmdLine = %s\nnShow = %d",
        hInstance, hPrev,
        lpCmdLine,
        nShow);
    var hParent = getDesktopWindow.invoke();
    msgbox.invoke(hParent, buff, "Info", Int32.value(64));
    this.return(0);
}

var fType = FunctionType(Int32, Array(Int8Ptr, Int8Ptr, Int8Ptr, Int32));
var wmain = module.Function("WinMain", fType);
wmain.implementation = WinMain;
