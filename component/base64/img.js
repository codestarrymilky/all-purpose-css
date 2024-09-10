function ToBase64(file) {  
    var reader = new FileReader();  
    reader.onload = function(e) {  
        document.getElementById('base64Output').textContent = e.target.result;  
    };  
    if (file) {  
        reader.readAsDataURL(file);  
    } else {  
        var input = document.getElementById('imageInput');  
        if (input.files && input.files[0]) {  
            reader.readAsDataURL(input.files[0]);  
        }  
    }  
}  
  
document.getElementById('imageInput').addEventListener('change', function(e) {  
    convertToBase64(e.target.files[0]);  
});  
  
function copyBase64() {  
    var output = document.getElementById('base64Output');  
    output.select();  
    document.execCommand("copy");  
    alert("Base64 复制成功！");  
}
