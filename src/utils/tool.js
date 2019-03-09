// 处理收听数据
export const playCount = (count) => {
    let newCount = Math.floor((count / 10000))
    if (newCount.toString().length >= 1) {
        return newCount + '万'
    } else {
        return Math.ceil((count))
    }
}

