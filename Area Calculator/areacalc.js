var choice = prompt("Welcome to Area Calculator. \n Please Enter your Choice \n1. Area of Rectangle/Square \n2. Area of Triangle \n3. Area of Circle \n4. Area of Parallelogram");

if (choice == '1') {
    var l = prompt('Enter the length')
    var b = prompt('Enter the base')
    var result = Number(l) * Number(b)
    alert('The Area of rectangle is ' + result)
}

if (choice == '2') {
    var b = prompt('Enter the base')
    var h = prompt('Enter the height')
    var result = Number(b) * Number(h)/2
    alert('The Area for triangle is ' + result)
}

if (choice == '3') {
    var r = prompt('Enter the radius')
    var result = 3.14 * Number(r) * Number(r)
    alert('The Area of circle is ' + result)
}

if (choice == '4') {
    var h = prompt('Enter the height')
    var cb = prompt('Enter the corresponding base')
    var result = Number(h) * Number(cb)
    alert('The Area of parallelogram is ' + result)
}