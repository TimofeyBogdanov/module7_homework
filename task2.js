// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function hasThisProperty(prop, obj) {
    if (prop in obj) {
        return true;
    } else return false;
}

const phone = {
    name: 'iPhone',
    model: '13 Pro',
    color: 'black',
    memory: '512gb'
}

console.log(hasThisProperty('size', phone));