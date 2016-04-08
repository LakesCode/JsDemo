/**
 * Created by dWX285905 on 15-8-5.
 */
document.write("系好安全带，准备起航--目标JS"); //在页面中显示文字
//页面弹出提示框
function jump(){
    var txt = confirm("请点击我，准备好了吗？");
    if(txt==true){
        document.write("准备好了，起航吧！");
    }
    else{
        document.write("渣渣，继续努力吧！");
    }
}
