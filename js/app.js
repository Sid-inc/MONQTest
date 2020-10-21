const elements = document.querySelectorAll('input, textarea');

function checkValidity() { };

for (let i = 0; i < elements.length; i++) {
  (function (element) {
    let id = element.getAttribute('id');
    element.value = sessionStorage.getItem(id);
    element.oninput = function () {
      sessionStorage.setItem(id, element.value);
      checkValidity();
    };
  })(elements[i]);
}

document.getElementById('group-name').onblur = () => {
  if (document.getElementById('group-name').value === '') {
    document.getElementById('group-name').parentNode.classList.remove('focused');
    document.getElementById('group-name').parentNode.classList.add('error');
    
  };
  document.getElementById('group-name').parentNode.classList.remove('focused');
};
document.getElementById('group-alias').onblur = () => {
  document.getElementById('group-alias').parentNode.classList.remove('focused');
};
document.getElementById('group-email').onblur = () => {
  document.getElementById('group-email').parentNode.classList.remove('focused');
};
document.getElementById('group-phone').onblur = () => {
  document.getElementById('group-phone').parentNode.classList.remove('focused');
};
document.getElementById('group-fio').onblur = () => {
  document.getElementById('group-fio').parentNode.classList.remove('focused');
};
document.getElementById('group-owner').onblur = () => {
  document.getElementById('group-owner').parentNode.classList.remove('focused');
};

document.getElementById('group-name').onfocus = () => {
  document.getElementById('group-name').parentNode.classList.add('focused');
};
document.getElementById('group-alias').onfocus = () => {
  document.getElementById('group-alias').parentNode.classList.add('focused');
};
document.getElementById('group-email').onfocus = () => {
  document.getElementById('group-email').parentNode.classList.add('focused');
};
document.getElementById('group-phone').onfocus = () => {
  document.getElementById('group-phone').parentNode.classList.add('focused');
};
document.getElementById('group-fio').onfocus = () => {
  document.getElementById('group-fio').parentNode.classList.add('focused');
};
document.getElementById('group-owner').onfocus = () => {
  document.getElementById('group-owner').parentNode.classList.add('focused');
};