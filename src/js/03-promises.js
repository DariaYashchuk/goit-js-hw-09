const refs = {
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),

  form: document.querySelector('form'),

  btnCreate: document.querySelector('button'),
};

// console.log(refs.btnCreate);

function onFormSubmit(e) {
  e.preventDefault();

  const position = Number(refs.amount.value);
  let delay = Number(refs.firstDelay.value);
  const step = Number(refs.delayStep.value);

  for (let i = 1; i <= position; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }

  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', onFormSubmit);
