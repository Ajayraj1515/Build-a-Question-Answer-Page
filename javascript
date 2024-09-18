document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {

        if (question.classList.contains('active')) {
            question.classList.toggle('active');
            question.nextElementSibling.style.display = 'none';
            question.querySelector('i').classList.replace('fa-minus', 'fa-plus');
            return;
        }


        document.querySelectorAll('.question').forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.style.display = 'none';
            q.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        });


        question.classList.add('active');
        question.nextElementSibling.style.display = 'block';
        question.querySelector('i').classList.replace('fa-plus', 'fa-minus');
    });
});
