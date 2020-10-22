//Alert hide
document.getElementById("alert").style.display = "none"
//Save data to local storage
const elements = document.querySelectorAll('input, textarea');

for (let i = 0; i < elements.length; i++) {
  (function (element) {
    let id = element.getAttribute('id');
    element.value = sessionStorage.getItem(id);
    if (sessionStorage.getItem('checkbox') == '0') {
      document.getElementById('desc-checkbox').setAttribute('checked', 'checked');
      document.getElementById('public-desc').removeAttribute('disabled');
    } else {
      document.getElementById('desc-checkbox').removeAttribute('checked');
    }
    //Show alert
    if (element.value) {
      document.getElementsByClassName('main-header')[0].style.height = "270px";
      document.getElementsByClassName('container')[0].style.marginTop = "320px";
      document.getElementById("alert").style.display = ""; 
      let counter = -499;
      let interval1 = setInterval(function () {
        counter += 10;
        document.getElementById("alert").style.transform = `translateX(${counter}px)`;
        if (counter >= 0) { clearInterval(interval1) };
      }, 1);
    }
    element.oninput = function () {
      sessionStorage.setItem(id, element.value);
    };
  })(elements[i]);
}

//Tel mask
let inp = document.getElementById("group-phone");

inp.onclick = function () {
  inp.value = "+";
}

let old = 0;

inp.onkeydown = function () {
  let curLen = inp.value.length;

  if (curLen < old) {
    old--;
    return;
  }

  if (curLen == 2)
    inp.value = inp.value + "(";

  if (curLen == 6)
    inp.value = inp.value + ")-";

  if (curLen == 11)
    inp.value = inp.value + "-";

  if (curLen == 14)
    inp.value = inp.value + "-";

  if (curLen > 16)
    inp.value = inp.value.substring(0, inp.value.length);

  old++;
}


// Validation

function spanShow(elem_id, element, elem_html) {
  if (!document.getElementById('error_' + elem_id)) {
    element.parentNode.classList.remove('focused');
    element.parentNode.classList.add('error');
    let span_for_elem = span.cloneNode(true);
    span_for_elem.id = 'error_' + elem_id;
    span_for_elem.innerHTML = elem_html;
    element.parentNode.append(span_for_elem);
    element.style.borderBottom = 'none';
  }
}

let span = document.createElement('span');
span.className = 'group-info__error';
//Group name
document.getElementById('group-name').onblur = function () {
  if (this.value === '') {
    spanShow('group-name', this, 'Название группы не может быть пустым');
  } else {
    this.parentNode.classList.remove('error');
    if (document.getElementById('error_group-name')) { document.getElementById('error_group-name').remove() };
  };
  this.parentNode.classList.remove('focused');
};
//Alias
document.getElementById('group-alias').onblur = function () {
  if (this.value === '') {
    spanShow('group-alias', this, 'Алиас не может быть пустым');
  } else if (/[А-Яа-я\s]/.test(this.value)) {
    spanShow('group-alias', this, 'Алиас не может содержать русские буквы и пробелы');
  } else {
    this.parentNode.classList.remove('error');
    if (document.getElementById('error_group-alias')) { document.getElementById('error_group-alias').remove() };
  };
  this.parentNode.classList.remove('focused');
};
//Email
document.getElementById('group-email').onblur = function () {
  if (this.value === '') {
    spanShow('group-email', this, 'Email не может быть пустым');
  } else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.value)) {
    spanShow('group-email', this, 'Введен некорректный Email');
  } else {
    this.parentNode.classList.remove('error');
    if (document.getElementById('error_group-email')) { document.getElementById('error_group-email').remove() };
  };
  this.parentNode.classList.remove('focused');
};
//Tel
document.getElementById('group-phone').onblur = function () {
  if (this.value === '') {
    spanShow('group-phone', this, 'Телефон не может быть пустым');
  } else {
    this.parentNode.classList.remove('error');
    if (document.getElementById('error_group-phone')) { document.getElementById('error_group-phone').remove() };
  };
  this.parentNode.classList.remove('focused');
};
//FIO
document.getElementById('group-fio').onblur = function () {
  if (this.value === '') {
    spanShow('group-fio', this, 'ФИО представителя не может быть пустым');
  } else {
    this.parentNode.classList.remove('error');
    if (document.getElementById('error_group-fio')) { document.getElementById('error_group-fio').remove() };
  };
  this.parentNode.classList.remove('focused');
};
//Owner
document.getElementById('group-owner').onblur = function () {
  if (this.value === '') {
    spanShow('group-owner', this, 'Должность ответственного не может быть пустым');
  } else {
    this.parentNode.classList.remove('error');
    if (document.getElementById('error_group-owner')) { document.getElementById('error_group-owner').remove() };
  };
  this.parentNode.classList.remove('focused');
};
//Desc
document.getElementById('desc').onblur = function () {
  if (this.value === '') {
    spanShow('desc', this, 'Описание не может быть пустым');
  } else {
    this.parentNode.classList.remove('error');
    if (document.getElementById('error_desc')) { document.getElementById('error_desc').remove() };
  };
  this.parentNode.classList.remove('focused');
};
//Public-desc
document.getElementById('public-desc').onblur = function () {
  if (this.value === '') {
    spanShow('public-desc', this, 'Описание не может быть пустым');
  } else {
    this.parentNode.classList.remove('error');
    if (document.getElementById('error_public-desc')) { document.getElementById('error_public-desc').remove() };
  };
  this.parentNode.classList.remove('focused');
};


//Focus style
document.getElementById('group-name').onfocus = function () {
  this.parentNode.classList.add('focused');
  this.style.borderBottom = 'solid 1px rgba(0,0,0,.05)';
};
document.getElementById('group-alias').onfocus = function () {
  this.parentNode.classList.add('focused');
  this.style.borderBottom = 'solid 1px rgba(0,0,0,.05)';
};
document.getElementById('group-email').onfocus = function () {
  this.parentNode.classList.add('focused');
  this.style.borderBottom = 'solid 1px rgba(0,0,0,.05)';
};
document.getElementById('group-phone').onfocus = function () {
  this.parentNode.classList.add('focused');
  this.style.borderBottom = 'solid 1px rgba(0,0,0,.05)';
};
document.getElementById('group-fio').onfocus = function () {
  this.parentNode.classList.add('focused');
  this.style.borderBottom = 'solid 1px rgba(0,0,0,.05)';
};
document.getElementById('group-owner').onfocus = function () {
  this.parentNode.classList.add('focused');
  this.style.borderBottom = 'solid 1px rgba(0,0,0,.05)';
};
document.getElementById('desc').onfocus = function () {
  this.parentNode.classList.add('focused');
  this.style.borderBottom = 'solid 1px rgba(0,0,0,.05)';
};
document.getElementById('public-desc').onfocus = function () {
  this.parentNode.classList.add('focused');
  this.style.borderBottom = 'solid 1px rgba(0,0,0,.05)';
};

//Btn Send
document.getElementById('btn-send').onclick = function () {
  let counterHide = 0;
  let intervalHide = setInterval(function () {
    counterHide -= 10;
    document.getElementById("alert").style.transform = `translateX(${counterHide}px)`;
    if (counterHide <= -500) {
      document.getElementById("alert").style.display = "none";
      clearInterval(intervalHide);
    };
  }, 1);
  document.getElementsByClassName('main-header')[0].style.height = "210px";
      document.getElementsByClassName('container')[0].style.marginTop = "210px";
}

//check box
document.getElementById('desc-checkbox').onclick = function () {
  if (this.checked) {
    document.getElementById('public-desc').removeAttribute('disabled');
    sessionStorage.setItem('checkbox', 0);
  } else {
    document.getElementById('public-desc').setAttribute('disabled', 'disabled');
    sessionStorage.setItem('checkbox', 1);
  }
}