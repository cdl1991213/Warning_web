function getAesString(data,key,iv){//加密
    var key  = CryptoJS.enc.Latin1.parse(key);
    var iv   = CryptoJS.enc.Latin1.parse(iv);
    var srcs = CryptoJS.enc.Utf8.parse(data);

    var encrypted = CryptoJS.AES.encrypt(srcs,key,
        {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        });
    return encrypted;
}
function getDAesString(encrypted,key,iv){//解密
    var key  = CryptoJS.enc.Latin1.parse(key);
    var iv   = CryptoJS.enc.Latin1.parse(iv);
    var decrypted = CryptoJS.AES.decrypt(encrypted,key,
        {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        });
    return decrypted.toString(CryptoJS.enc.Utf8);
}