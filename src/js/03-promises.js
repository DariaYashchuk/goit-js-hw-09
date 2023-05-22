const refs = {
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),

  btnCreate: document.querySelector('button'),
};

// console.log(refs.btnCreate);

function onStart(e) {
  e.preventDefault();
  const position = Number(refs.amount.value);
  const delay = Number(refs.firstDelay.value);
  const step = Number(refs.delayStep.value);
  // console.log(delay);

  for (let i = 1; i <= position; i += 1) {
    // console.log(delay);
    function createPromise(position, delay) {
      delay += step * i;
      return new Promise((res, rej) => {
        setTimeout(() => {
          const shouldResolve = Math.random() > 0.3;
          if (shouldResolve) {
            res('+');
          } else {
            rej('-');
          }
        }, delay);
      });
    }
    // console.log(i);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${i} in ${delay}ms`);
      });
  }
}

// function createPromise(position, delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         res('+');
//       } else {
//         rej('-');
//       }
//     }, delay);
//   });
// }

refs.btnCreate.addEventListener('click', onStart);
