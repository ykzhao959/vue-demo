/* 
    过滤特殊字符验证
*/
export function stripscript(str) {
    var pattern = new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——|{ }【】‘；：”“’。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
//验证邮箱
export function validateUserNames(str) {
    let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return !reg.test(str) ? true : false
}
//验证密码
export function vaildatePasswords(str) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return !reg.test(str) ? true : false
}
//验证验证码
export function vaildateCodes(str) {
    let reg = /^[a-z0-9]{6}$/
    return !reg.test(str) ? true : false
}