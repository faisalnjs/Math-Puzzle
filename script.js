const statusElem = document.getElementById('status');

const mathNum1 = document.getElementById('mathNum1');
const mathNum2 = document.getElementById('mathNum2');
const mathNum3 = document.getElementById('mathNum3');

const mathAnswer = document.getElementById('mathAnswer');

const mathOp1 = document.getElementById('mathOp1');
const mathOp2 = document.getElementById('mathOp2');

if (mathOp1) {
	[mathOp1, mathOp2].forEach(elm => {
		elm.oninput = function () {
			if (/[*\/+\-x]$/.test(this.value)) {
				this.value = this.value.slice(-1);
			} else if (/^[*\/+\-x]/.test(this.value)) {
				this.value = this.value.charAt(0);
			} else {
				this.value = '';
			}
		};
	});
}

const solveNum1 = document.getElementById('solveNum1');
const solveNum2 = document.getElementById('solveNum2');
const solveNum3 = document.getElementById('solveNum3');
const solveAnswer = document.getElementById('solveAnswer');

const solveOp1 = document.getElementById('solveOp1');
const solveOp2 = document.getElementById('solveOp2');

if (solveNum1) {
	[solveNum1, solveNum2, solveNum3, solveAnswer].forEach(elm => {
		elm.oninput = function () {
			solveOp1.innerText = '?';
			solveOp2.innerText = '?';
			this.value = this.value.replace(/[^0-9]/g, '');
		};
	});
}

let score = 0;

function calc(left, right, operation) {
	switch (operation) {
		case '+':
		case 'add':
			return left + right;
		case '-':
		case 'sub':
			return left - right;
		case '*':
		case 'x':
		case 'mul':
			return left * right;
		case '/':
		case 'div':
			return left / right;
	}
	return NaN;
}

const operations = ['+', '-', '*', '/'];

function gen() {
	let leftNum = 0;
	let middleNum = 0;
	let rightNum = 0;

	let op1 = operations[Math.floor(Math.random() * operations.length)];
	let op2 = operations[Math.floor(Math.random() * operations.length)];

	let finalLeftMiddle = 0;
	let finalAnswer = 0;

	do {
		leftNum = Math.ceil(Math.random() * (op1 == '/' ? 100 : 20)) + 1;
		middleNum = Math.ceil(Math.random() * 5) + 1;
		finalLeftMiddle = calc(leftNum, middleNum, op1);

		rightNum = Math.ceil(Math.random() * 10) + 1;
		finalAnswer = calc(finalLeftMiddle, rightNum, op2);
	} while (!Number.isInteger(finalAnswer) || finalAnswer < 1);

	console.log(
		`Answer: ${leftNum} ${op1} ${middleNum} ${op2} ${rightNum} = ${finalAnswer}`
	);

	mathOp1.value = '';
	mathOp2.value = '';

	mathNum1.innerText = leftNum;
	mathNum2.innerText = middleNum;
	mathNum3.innerText = rightNum;
	mathAnswer.innerText = finalAnswer;

	mathOp1.focus();
}

function solve() {
	const left = parseInt(solveNum1.value);
	const middle = parseInt(solveNum2.value);
	const right = parseInt(solveNum3.value);
	const answer = parseInt(solveAnswer.value);

	solveOp1.innerText = '?';
	solveOp2.innerText = '?';

	if (isNaN(left) || isNaN(middle) || isNaN(right) || isNaN(answer)) {
		return (statusElem.innerText = 'Please enter all values.');
	}

	for (const opL of operations) {
		for (const opR of operations) {
			if (calc(calc(left, middle, opL), right, opR) == answer) {
				solveOp1.innerText = opL;
				solveOp2.innerText = opR;
				statusElem.innerText = 'Done.';
				return;
			}
		}
	}
	statusElem.innerText = 'No answers found.';
}

function reset() {
	score = 0;
	statusElem.innerText = 'Your score has been reset.';
}

function check() {
	if (
		calc(
			calc(
				parseInt(mathNum1.innerText),
				parseInt(mathNum2.innerText),
				mathOp1.value
			),
			parseInt(mathNum3.innerText),
			mathOp2.value
		) == parseInt(mathAnswer.innerText)
	) {
		statusElem.innerText = `Correct! Score: ${++score}`;
		gen();
	} else {
		statusElem.innerHTML = 'Incorrect! Try again.';
	}
}
