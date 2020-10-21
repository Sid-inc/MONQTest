//Alert hide
document.getElementById("alert").style.display = "none"
//Save data to local storage
const elements = document.querySelectorAll('input, textarea');

for (let i = 0; i < elements.length; i++) {
  (function (element) {
    let id = element.getAttribute('id');
    element.value = sessionStorage.getItem(id);
    if (element.value) {
      document.getElementById("alert").style.display = "";
      let counter = -499;
      let interval1 = setInterval(function() {
        counter+=10;
        document.getElementById("alert").style.transform = `translateX(${counter}px)`;
        if (counter >= 0) {clearInterval(interval1)};
      }, 1);
    }
    element.oninput = function () {
      sessionStorage.setItem(id, element.value);
    };
  })(elements[i]);
}

//Tel mask
let inp = document.getElementById("group-phone");

inp.onclick = function() {
    inp.value = "+";
}

let old = 0;

inp.onkeydown = function() {
    let curLen = inp.value.length;
    
    if (curLen < old){
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
let span = document.createElement('span');
span.className = 'group-info__error';
//Group name
document.getElementById('group-name').onblur = function() {
  if (this.value === '') {
    this.parentNode.classList.remove('focused');
    this.parentNode.classList.add('error');
    span.innerHTML = 'Название группы не может быть пустым';
    this.parentNode.append(span);
  }else {
    this.parentNode.classList.remove('error');
    span.remove();
  };
  this.parentNode.classList.remove('focused');
};
//Alias
document.getElementById('group-alias').onblur = function() {
  if (this.value === '') {
    span.innerHTML = 'Алиас не может быть пустым';
    this.parentNode.classList.remove('focused');
    this.parentNode.classList.add('error');
    this.parentNode.append(span);
  } else if (/[А-Яа-я\s]/.test(this.value)) {
      span.innerHTML = 'Алиас не может содержать русские буквы и пробелы';
      this.parentNode.classList.remove('focused');
      this.parentNode.classList.add('error');
      this.parentNode.append(span);
  }else{
    this.parentNode.classList.remove('error');
    span.remove();
  };
  this.parentNode.classList.remove('focused');
};
//Email
document.getElementById('group-email').onblur = function() {
  if (this.value === '') {
    span.innerHTML = 'Email не может быть пустым';
    this.parentNode.classList.remove('focused');
    this.parentNode.classList.add('error');
    this.parentNode.append(span);
  } else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.value)) {
      span.innerHTML = 'Введен некорректный Email';
      this.parentNode.classList.remove('focused');
      this.parentNode.classList.add('error');
      this.parentNode.append(span);
  }else{
    this.parentNode.classList.remove('error');
    span.remove();
  };
  this.parentNode.classList.remove('focused');
};
//Tel
document.getElementById('group-phone').onblur = function() {
  if (this.value === '') {
    this.parentNode.classList.remove('focused');
    this.parentNode.classList.add('error');
    span.innerHTML = 'Телефон не может быть пустым';
    this.parentNode.append(span);
  }else {
    this.parentNode.classList.remove('error');
    span.remove();
  };
  this.parentNode.classList.remove('focused');
};
//FIO
document.getElementById('group-fio').onblur = function() {
  if (this.value === '') {
    this.parentNode.classList.remove('focused');
    this.parentNode.classList.add('error');
    span.innerHTML = 'ФИО представителя не может быть пустым';
    this.parentNode.append(span);
  }else {
    this.parentNode.classList.remove('error');
    span.remove();
  };
  this.parentNode.classList.remove('focused');
};
//Owner
document.getElementById('group-owner').onblur = function() {
  if (this.value === '') {
    this.parentNode.classList.remove('focused');
    this.parentNode.classList.add('error');
    span.innerHTML = 'Должность ответственного не может быть пустым';
    this.parentNode.append(span);
  }else {
    this.parentNode.classList.remove('error');
    span.remove();
  };
  this.parentNode.classList.remove('focused');
};

//Focus style
document.getElementById('group-name').onfocus = function() {
  this.parentNode.classList.add('focused');
};
document.getElementById('group-alias').onfocus = function() {
  this.parentNode.classList.add('focused');
};
document.getElementById('group-email').onfocus = function() {
  this.parentNode.classList.add('focused');
};
document.getElementById('group-phone').onfocus = function() {
  this.parentNode.classList.add('focused');
};
document.getElementById('group-fio').onfocus = function() {
  this.parentNode.classList.add('focused');
};
document.getElementById('group-owner').onfocus = function() {
  this.parentNode.classList.add('focused');
};