function curry(fn) {
		// Your code here
	}
	function add(a, b, c) {
		return a + b + c
	}
	const addEx = curry(add)
	console.log(addEx(1, 2, 3) === 6) //=> true
	console.log(addEx(1, 2)(3) === 6) //=> true
	console.log(addEx(1)(2, 3) === 6) //=> true
	console.log(addEx(1)(2)(3) === 6) //=> true

	function multi(a, b, c, d) {
		return a * b * c * d
	}
	const multiEx = curry(multi)
	console.log(multiEx(2, 3, 4, 5) === 120) //=> true
	console.log(multiEx(2, 3, 4)(5) === 120) //=> true 
	console.log(multiEx(2, 3)(4, 5) === 120) //=> true
	console.log(multiEx(2)(3, 4, 5) === 120) //=> true
	console.log(multiEx(2)(3)(4)(5) === 120) //=> true
