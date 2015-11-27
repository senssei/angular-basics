describe('', function () {

	describe("Let's start small ... ", function () {
		it('Warmup ', function () {
			expect(2 + 2).toBe(4);
		});

		it('Now you turn ', function () {
			var a = 2;
			var b = 2;
			var a = 3;

			expect(a + b).toBe(); //here 
		});

	});

	describe('Types and funny things about them ... ', function () {
		it('Put corrent type name in ', function () {

			expect(typeof 3).toBe(); //here 
			expect(typeof 3.14).toBe(); //here
			expect(typeof true).toBe(); //here
			expect(typeof "sth").toBe(); //here
			
			//tricky
			expect(typeof NaN).toBe(); // here
		});

		it('Why null is probably not the right thing for you  ', function () {
			var obj = {
				name: 'John Doe'
			};

			expect(typeof obj).toBe(); // here
			expect(typeof null).toBe(); // here
		});

		it("undefined and why it's important  ", function () {
			var obj;
			expect(typeof obj).toBe(); // here
			
			obj = {
				name: 'John Doe'
			};
			expect(typeof obj).toBe(); // here
			
			obj = undefined;
			expect(typeof obj).toBe(); // here
		});
	});


	describe('Madness with operators ... ', function () {
		it('Things you probably know ', function () {

			expect(1 + 3).toBe(); //here 
			expect(4 - 2).toBe(); //here
			expect(3 * 3).toBe(); //here
			expect(2 / 2).toBe(); //here
			
			expect('Hello ' + 'world!').toBe(); //here
			
			//tricky
			expect("2" + 2).toBe(); // here
			expect(+"2" + 1).toBe(); // here
			
		});

		it('And some thing that can be new  ', function () {
			expect(4 == 3).toBe(); // here
			expect('a' == 'a').toBe(); // here
			
			//tricky
			expect("3" == 3).toBe(); // here
			expect(0 == false).toBe(); // here
			expect("2" === 2).toBe(); // here
		});
	});

});