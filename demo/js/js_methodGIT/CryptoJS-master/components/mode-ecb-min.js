/*
CryptoJS v3.1.2
code.google.com/p/crypto-js_methodGIT
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js_methodGIT/wiki/License
*/
CryptoJS.mode.ECB=function(){var a=CryptoJS.lib.BlockCipherMode.extend();a.Encryptor=a.extend({processBlock:function(a,b){this._cipher.encryptBlock(a,b)}});a.Decryptor=a.extend({processBlock:function(a,b){this._cipher.decryptBlock(a,b)}});return a}();
