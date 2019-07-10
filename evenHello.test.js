const evenHello = require('./evenHello');

describe('奇数を渡したら、その数値をそのまま返す',()=>{
	test('1を渡したら、1を返す', () =>{
		expect(evenHello(1)).toBe(1);
	});
	
	test('3を渡したら、3を返す', () =>{
		expect(evenHello(3)).toBe(3);
	});
});

describe('偶数を渡したら、「ハロー」を返す',()=>{
	test('2を渡したら、「ハロー」を返す', () =>{
		expect(evenHello(2)).toBe('ハロー');
	});
	
	test('4を渡したら、「ハロー」を返す', () =>{
		expect(evenHello(4)).toBe('ハロー');
	});
});

describe('負数を渡したら、「ワールド」を返す',()=>{
	test('-1を渡したら、「ワールド」を返す', () =>{
		expect(evenHello(-1)).toBe('ワールド');
	});

	test('-2を渡したら、「ワールド」を返す', () =>{
		expect(evenHello(-2)).toBe('ワールド');
	});
});
