// 中划线转小驼峰
export function camelize(str: string): string {
    const reg = /-(\w)/g;
    return str.replace(reg, function(_, c) {
        return c ? c.toUpperCase() : '';
    })
}

// 驼峰命名转横线命名
export function hyphenate(str: string): string {
    // \b 用于匹配单词的边界，即单词与非单词字符之间的位置。用来确保所匹配的单词是作为一个整体出现的
    // \B 用于匹配非单词边界的位置，可以用来确保所匹配的内容不是作为一个整体出现的
    const reg = /\B([A-Z])/g;
    return str.replace(reg, '-$1').toLowerCase();
}