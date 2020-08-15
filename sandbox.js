const answers = ['A', 'A', 'A', 'A'];

const form = document.querySelector('.ninja_form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const useranswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    let score = 0;
    useranswers.forEach(function (useranswer, index) {
        if (useranswer === answers[index]) {
            score += 25;
        }
    });
    window.scroll(0, 0);

    (function() {
        let counter = 0;
        setInterval(e => {
            if (counter !== score) {
                document.querySelector('.score').textContent = `${counter+1}% `;
                counter++;
            } else {
                clearInterval()
            }
        }, 15);
    })()
});