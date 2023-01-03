function adp(type) {
    switch (type) {
        case 'solve':
            var input1 = document.querySelectorAll("input")[0].value;
            var input2 = document.querySelectorAll("input")[1].value;
            var input3 = document.querySelectorAll("input")[2].value;
            var input4 = document.querySelectorAll("input")[3].value;
            if (input1 && input2 && input3 && input4) {
                input1 = Number(document.querySelectorAll("input")[0].value);
                input2 = Number(document.querySelectorAll("input")[1].value);
                input3 = Number(document.querySelectorAll("input")[2].value);
                input4 = Number(document.querySelectorAll("input")[3].value);
                try {
                    if (isNaN(input1) && isNan(input2) && isNan(input3) && isNan(input4)) {
                    } else {
                        errorelem.innerHTML = "Done."
                        switch (input4) {
                            case (input1 + input2) + input3:
                                document.querySelectorAll("h3")[0].innerHTML = "+";
                                document.querySelectorAll("h3")[1].innerHTML = "+";
                                break;
                            case (input1 + input2) - input3:
                                document.querySelectorAll("h3")[0].innerHTML = "+";
                                document.querySelectorAll("h3")[1].innerHTML = "-";
                                break;
                            case (input1 + input2) * input3:
                                document.querySelectorAll("h3")[0].innerHTML = "+";
                                document.querySelectorAll("h3")[1].innerHTML = "*";
                                break;
                            case (input1 + input2) / input3:
                                document.querySelectorAll("h3")[0].innerHTML = "+";
                                document.querySelectorAll("h3")[1].innerHTML = "/";
                                break;
                            case (input1 - input2) + input3:
                                document.querySelectorAll("h3")[0].innerHTML = "-";
                                document.querySelectorAll("h3")[1].innerHTML = "+";
                                break;
                            case (input1 - input2) - input3:
                                document.querySelectorAll("h3")[0].innerHTML = "-";
                                document.querySelectorAll("h3")[1].innerHTML = "-";
                                break;
                            case (input1 - input2) * input3:
                                document.querySelectorAll("h3")[0].innerHTML = "-";
                                document.querySelectorAll("h3")[1].innerHTML = "*";
                                break;
                            case (input1 - input2) / input3:
                                document.querySelectorAll("h3")[0].innerHTML = "-";
                                document.querySelectorAll("h3")[1].innerHTML = "/";
                                break;
                            case (input1 * input2) + input3:
                                document.querySelectorAll("h3")[0].innerHTML = "*";
                                document.querySelectorAll("h3")[1].innerHTML = "+";
                                break;
                            case (input1 * input2) - input3:
                                document.querySelectorAll("h3")[0].innerHTML = "*";
                                document.querySelectorAll("h3")[1].innerHTML = "-";
                                break;
                            case (input1 * input2) * input3:
                                document.querySelectorAll("h3")[0].innerHTML = "*";
                                document.querySelectorAll("h3")[1].innerHTML = "*";
                                break;
                            case (input1 * input2) / input3:
                                document.querySelectorAll("h3")[0].innerHTML = "*";
                                document.querySelectorAll("h3")[1].innerHTML = "/";
                                break;
                            case (input1 / input2) + input3:
                                document.querySelectorAll("h3")[0].innerHTML = "/";
                                document.querySelectorAll("h3")[1].innerHTML = "+";
                                break;
                            case (input1 / input2) - input3:
                                document.querySelectorAll("h3")[0].innerHTML = "/";
                                document.querySelectorAll("h3")[1].innerHTML = "-";
                                break;
                            case (input1 / input2) * input3:
                                document.querySelectorAll("h3")[0].innerHTML = "/";
                                document.querySelectorAll("h3")[1].innerHTML = "*";
                                break;
                            case (input1 / input2) / input3:
                                document.querySelectorAll("h3")[0].innerHTML = "/";
                                document.querySelectorAll("h3")[1].innerHTML = "/";
                                break;
                            default:
                                document.querySelectorAll("h3")[0].innerHTML = "&nbsp&nbsp&nbsp";
                                document.querySelectorAll("h3")[1].innerHTML = "&nbsp&nbsp&nbsp";
                                errorelem.innerHTML = "No answers found.";
                                break;
                        }
                    }
                } catch {
                    errorelem.innerHTML = "Only numbers are allowed.";
                }
            } else {
                errorelem.innerHTML = "Please enter all values.";
            }
            break;
        case 'gen':
            document.querySelectorAll("input")[0].value = ""
            document.querySelectorAll("input")[1].value = ""
            var randomNumber1 = Math.floor(Math.random() * 5);
            var randomNumber2 = Math.floor(Math.random() * 5);
            var randomNumber3 = Math.floor(Math.random() * 5);
            var num3 = Math.floor(Math.random() * 10);
            var num4 = Math.floor(Math.random() * 20);
            if (randomNumber1 === 0) {
                var sign2 = "+"
                var num2 = num4 - num3
            }
            if (randomNumber1 === 1) {
                var sign2 = "-"
                var num2 = num4 + num3
            }
            if (randomNumber1 === 2) {
                var sign2 = "*"
                var num2 = num4 / num3
            }
            if (randomNumber1 === 3 || randomNumber1 === 4) {
                var sign2 = "/"
                var num2 = num4 * num3
            }
            if (randomNumber2 === 0) {
                var sign1 = "+"
                var num1 = randomNumber3 - num2
            }
            if (randomNumber2 === 1) {
                var sign1 = "-"
                var num1 = randomNumber3 + num2
            }
            if (randomNumber2 === 2) {
                var sign1 = "*"
                var num1 = randomNumber3 / num2
            }
            if (randomNumber2 === 3 || randomNumber2 === 4) {
                var sign1 = "/"
                var num1 = randomNumber3 * num2
            }
            num1 = Math.floor(num1)
            num2 = Math.floor(num2)
            document.querySelectorAll("h3")[0].innerHTML = num1
            document.querySelectorAll("h3")[1].innerHTML = randomNumber3
            document.querySelectorAll("h3")[2].innerHTML = num3
            num4 = eval(eval(document.querySelectorAll("h3")[0].innerHTML + sign1 + document.querySelectorAll("h3")[1].innerHTML) + sign2 + document.querySelectorAll("h3")[2].innerHTML)
            document.querySelectorAll("h3")[3].innerHTML = num4
            if (Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3) && Number.isInteger(num4)) {
                console.log("Answers: " + sign1 + ", " + sign2)
                document.querySelectorAll("input")[0].focus()
            } else {
                adp('gen');
            }
            break;
        case 'check':
            if (eval(eval(document.querySelectorAll("h3")[0].innerHTML + document.querySelectorAll("input")[0].value + document.querySelectorAll("h3")[1].innerHTML) + document.querySelectorAll("input")[1].value + document.querySelectorAll("h3")[2].innerHTML) == document.querySelectorAll("h3")[3].innerHTML) {
                score += 1
                errorelem.innerHTML = "Correct! Score: " + score
                adp('gen');
            } else {
                errorelem.innerHTML = "Incorrect! Try again."
            }
            break;
        case 'reset':
            score = 0
            errorelem.innerHTML = "Your score has been reset."
            break;
        default:
            console.log("Variable 'type' as '" + type + "' is not valid.")
            break;
    }
    return false;
}