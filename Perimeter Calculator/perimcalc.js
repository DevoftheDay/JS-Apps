var choice = prompt("Welcome to Perimeter Calculator. \nPlease enter your choice. \n1. Perimeter of rectangle \n2. Perimeter of triangle \n3. Perimeter of circle \n4. Perimeter of parallelogram")

if (choice == '1') {
    var l = prompt('Enter the length')
    var b = prompt('Enter the base')
    var result = Number(l) + Number(b) + Number(l) + Number(b)
    alert('The Area of rectangle is ' + result)
}

if (choice == '2') {
    var a = prompt('Enter the side 1')
    var b = prompt('Enter the side 2')
    var c = prompt('Enter the side 3')
    var result = Number(a) + Number(b) + Number(c)
    alert('The Area of triangle is ' + result)
}

if (choice == '3') {
    var d = prompt('Enter the diameter')
    var result = 3.14 * d
    alert('The Area of circle is ' + result)
}

if (choice == '4') {
    var cb = prompt('Enter corrseponding base(s) length')
    var a = prompt('Enter side (slanted) length')
    var result = Number(cb) + Number(a) + Number(cb) + Number(a)
    alert('The Area of parallelogram is ' + result)
}