// Changing the navbar style when changing
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})




// show hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=> {
        faq.classList.toggle('open');
    })
});

localStorage.setItem([{}], "completedTasks");








