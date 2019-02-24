function calcImt() {
  let weight = document.querySelector('#weight'),
      growth = document.querySelector('#growth'),
      form = document.querySelector('.imt'),
      num = document.querySelector('.imt__num'),
      headerResult = document.querySelector('.imt__header'),
      descriptionResult = document.querySelector('.imt__result-description'),
      imt = (weight.value / ((growth.value / 100) * (growth.value / 100))).toFixed(1),
      result = document.querySelector('.imt__result');

  if (growth.value && weight.value) {
    num.innerText = imt;
    result.style.display = 'flex';

    if (imt <= 16) {
      headerResult.innerText = 'Ваша вага значно нижче норми';
      descriptionResult.innerText = 'Який може стати причиною поганого самопочуття і фактором ризику виникнення захворювань. Щоб дізнатися як знизити вагу і поліпшити самопочуття, зателефонуйте нам. При зміні раціону харчування рекомендуємо вам консультуватися з лікарем.';
    } else if (imt <= 18.5) {
      headerResult.innerText = 'Ваша вага нижче норми';
      descriptionResult.innerText = 'Який може стати причиною поганого самопочуття і фактором ризику виникнення захворювань. Щоб дізнатися як знизити вагу і поліпшити самопочуття, зателефонуйте нам. При зміні раціону харчування рекомендуємо вам консультуватися з лікарем.';
    } else if (imt <= 25) {
      headerResult.innerText = 'Ваша вага в нормі';
      descriptionResult.innerText = 'Щоб підтримувати гарне самопочуття і вагу в межах норми, зателефонуйте нам Консультант познайомить вас з принципами збалансованого харчування, навчить снідати і вечеряти з користю для організму.';
    } else if (imt <= 30) {
      headerResult.innerText = 'Ваша вага вижче норми';
      descriptionResult.innerText = 'Що може стати причиною поганого самопочуття і фактором ризику виникнення захворювань. Щоб дізнатися як знизити вагу і поліпшити самопочуття, зателефонуйте нам. При зміні раціону харчування рекомендуємо вам консультуватися з лікарем.';
    } else if (imt <= 35) {
      headerResult.innerText = 'У Вас ожиріння 1-го ступеня';
      descriptionResult.innerText = 'Який може стати причиною поганого самопочуття і фактором ризику виникнення захворювань. Щоб дізнатися як знизити вагу і поліпшити самопочуття, зателефонуйте нам. При зміні раціону харчування рекомендуємо вам консультуватися з лікарем.';
    } else if (imt <= 40) {
      headerResult.innerText = 'У Вас ожиріння 2-го ступеня';
      descriptionResult.innerText = 'Який може стати причиною поганого самопочуття і фактором ризику виникнення захворювань. Щоб дізнатися як знизити вагу і поліпшити самопочуття, зателефонуйте нам. При зміні раціону харчування рекомендуємо вам консультуватися з лікарем.';
    } else {
      headerResult.innerText = 'У Вас ожиріння 3-го ступеня';
      descriptionResult.innerText = 'Який може стати причиною поганого самопочуття і фактором ризику виникнення захворювань. Щоб дізнатися як знизити вагу і поліпшити самопочуття, зателефонуйте нам. При зміні раціону харчування рекомендуємо вам консультуватися з лікарем.';
    }
  }

}
