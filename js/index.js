function getTime(type) {
    let time = new Date()
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hour = time.getHours()
    let minitue = time.getMinutes()
    let second = time.getSeconds()

    // 进行补零
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    minitue = minitue < 10 ? "0" + minitue : minitue;
    second = second < 10 ? "0" + second : second;


    if (type) {
        if (!isNaN(type)) {
            if (type == 1) {
                return year + '/' + month + '/' + date;
            } else if (type == 2) {
                return hour + ":" + minitue + ":" + second;
            }else {
                console.log("0 完整的日期和时间  1 获取日期 2 获取时间");
            }
        } else {
            console.log("0 完整的日期和时间  1 获取日期 2 获取时间");
        }
    } else {
        return year + "/" + month + "/" + date + " " + hour + ":" + minitue + ":" + second;
    }
}
var res = getTime()
console.log(res);