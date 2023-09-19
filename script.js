let prmt_name = prompt('Как тебя зовут ?')


if (prmt_name.toLowerCase().startsWith('a')) {
    let prmt_money = +prompt('Сколько денег в кармане ?')
    if (prmt_money > 100) {
        let prmt_age = +prompt('Сколько тебе лет ?')
        if (prmt_age > 20 && prmt_age < 40) {
            let prmt_count = prompt('Сколько человек ?')
            if (prmt_count < 10) {
                alert('Заходите')
            } else {
                alert('не хватить место')
            }
        } else {
            alert('нет')
        }
    } else {
        alert('иди гуляй')
    }
} else {
    alert('Нет')
}