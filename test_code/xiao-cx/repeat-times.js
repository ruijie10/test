function repeatStr(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if (!obj[str.charAt(i)]) {
            obj[str.charAt(i)] = 1;
        } else {
            obj[str.charAt(i)]++;
        }
    };
    var max = 0;
    var key = '';
    for (var i in obj) {
        if (obj[i] > max) {
            max = obj[i];
            key = i;
        }
    }
    console.log('出现次数最多的是:' + key + '出现' + max + '次');
}
repeatStr('asdfssaaasasasasaaaaaaa')
repeatStr('asdfssaaasasasasaa')
repeatStr('asdfssaaasasasasaasssssssssssssssssssss')

