/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-unused-vars */

/* @jsx createElement */

function createElement(tagName, props, ...children) {
    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase()] = value;
    });

    children.flat().forEach((child) => {
        if (child instanceof Node) {
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    });

    return element;
}

function render(num = 0, number = [], calculate = []) {
    function combineNumber(i) {
        if (!number[0]) {
            number.push(i);
        } else {
            number[number.length - 1] += i;
        }
    }


    const element = (
        <div>
            <p>간단 계산기</p>
            <p>{num}</p>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
                <button
                    type="button"
                    onClick={() => {
                        combineNumber(i.toString());
                        render(number[0], number, calculate);
                    }}
                >
                    {i}
                </button>
            ))}
            <br />
            {['+', '-', '*', '/'].map((i) => (
                <button
                    type="button"
                    onClick={() => {
                        calculate.push(number.pop());

                        if (calculate.length !== 1) {
                            const result = eval(calculate.join(''));
                            calculate = [result];
                            calculate.push(i);
                            render(result, number, calculate);
                        } else {
                            calculate.push(i);
                        }
                    }}
                >
                    {i}
                </button>
            ))}
            <button
                type="button"
                onClick={() => {
                    calculate.push(number.pop());
                    const result = eval(calculate.join(''));
                    render(result);
                }}
            >
                =
        </button>
        </div>
    );

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render();