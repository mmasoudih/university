// var moment = require('moment');
var moment = require('moment-timezone');
const Swal = require('sweetalert2');
moment.locale('fa');
moment().tz("Asia/Tehran");

callAllFunc();



function callAllFunc() {
  setToday();
  showOverlay();
  hide();
  show();
  hideOverlay();
  setLession(moment().day());
  copyToClipBoard(document.querySelectorAll('.link'));
  showInfoAlert();
  showAlert();
  showFooter();
  showTime();
  
}
function hideOverlay(){
  document.querySelector('.return-back').addEventListener('click', e =>{
    e.preventDefault();
    hide();
  });
}
function hide(){
  document.querySelector('.overlay').classList.add('hide');
  document.querySelector('.overlay').classList.remove('show');
}
function show(){
  document.querySelector('.show-all').addEventListener('click', e =>{
    e.preventDefault();
    document.querySelector('.overlay').classList.remove('hide');
    document.querySelector('.overlay').classList.add('show');
  });
}
function showTime() {
  setInterval(() => {
    document.querySelector('.time').innerHTML = `${moment().format('HH:mm:ss')}`;
  }, 1000);
}

function showFooter() {
  document.querySelector('.footer').innerHTML = `
  <p>
      اگر مشکلی یا پیشنهادی داشتین با لمس 
      <a href='tg://resolve?domain=mmasoudi79' class="contact">این لینک</a>
      به من پیام بدین
    </p>
  `;
}

function showAlert() {
  document.querySelector('.show-alert').addEventListener('click', e => {
    e.preventDefault();
    Swal.fire({
      title: 'راهنما',
      text: 'کنار هر کلاس اگر دایره سبز بود یعنی الان کلاس آنلاین هست و با زدن روی دکمه کپی لینک کلاس لینک رو میتونین کپی کنین و داخل نرم افزار Adobe Connect و یا داخل سیستمون باز کنید.',
      icon: 'info',
      confirmButtonText: 'حله! فهمیدم'
    })
  });
}

function showInfoAlert() {
  if (localStorage.getItem('popup') === null) {
    Swal.fire({
      title: 'راهنما',
      text: 'کنار هر کلاس اگر دایره سبز بود یعنی الان کلاس آنلاین هست و با زدن روی دکمه کپی لینک کلاس لینک رو میتونین کپی کنین و داخل نرم افزار Adobe Connect و یا داخل سیستمون باز کنید.',
      icon: 'info',
      confirmButtonText: 'حله! فهمیدم'
    }).then((e) => {
      if (e.value) {
        localStorage.setItem('popup', 'hidden');
      }
    })
  }
}

function getElement(el, text) {
  document.querySelector(el).textContent = text;
}

function setToday() {
  let today = moment().format('dddd');
  getElement('h1', "برنامه امروز " + "(" + today.toString() + ")");
}

function setLession(day) {
  let time = 'ساعت';
  let hour = moment().hour();
  let minute = moment().minute();
  let goToClass = 'کپی لینک کلاس';

  switch (day) {
    case 0:
      //یکشنبه
      document.querySelector('ul').innerHTML += `
      <li id='database'>
        <span>پایگاه داده</span>
        <span>حجت بیک نژاد</span>
        <span>${time} ۱۳−۱۱</span>
        <span><a href='http://79.143.84.27/databe/' class='link'>${goToClass}</a></span>
      </li>
      `;
      break;
    case 1:
      //دوشنبه
      document.querySelector('ul').innerHTML += `
      <li>
        <span>کلاسی موجود نیست</span>
      </li>
      `;
      break;

    case 2:
      //سه‌شنبه
      document.querySelector('ul').innerHTML += `
      <li id='math'>
        <span>ریاضی</span>
        <span>رضا باغبانی</span>
        <span>${time} ۱۵−۱۳</span>
        <span><a href='http://79.143.84.27/mathematics/' class='link'>${goToClass}</a></span>
      </li>
      <li id='work'>
        <span>کار افرینی</span>
        <span>رضا باغبانی</span>
        <span>${time} ۱۷−۱۶</span>
        <span><a href='http://79.143.84.27/work/' class='link'>${goToClass}</a></span>
      </li>
      <li id='english'>
        <span>زبان تخصصی</span>
        <span>محمدرضا توسلی</span>
        <span>${time} ۱۸:۳۰−۱۷</span>
        <span><a href='http://79.143.84.27/thl/' class='link'>${goToClass}</a></span>
      </li>
      `;
      break;
    case 3:
      //چهارشنبه
      document.querySelector('ul').innerHTML += `
      <li>
        <span>کلاسی موجود نیست</span>
      </li>
      `;
      break;
    case 4:
      //پنج‌شنبه
      document.querySelector('ul').innerHTML += `
      <li id='application_programming'>
        <span>برنامه نویسی موبایل</span>
        <span>مجید شریف ثانوی</span>
        <span>${time} ۱۳−۱۰</span>
        <span><a href='http://79.143.84.27/mob1/' class='link'>${goToClass}</a></span>
      </li>
      
      <li id='graphic'>
        <span>محیط های گرافیکی و ...</span>
        <span>محمدرضا توسلی</span>
        <span>${time} ۱۹:۳۰−۱۸</span>
        <span><a href='http://79.143.84.27/mc/' class='link'>${goToClass}</a></span>
      </li>
      `;
      break;
    case 5:
      //جمعه
      document.querySelector('ul').innerHTML += `
      <li>
        <span>کلاسی موجود نیست</span>
      </li>
      `;
      break;
    case 6:
      //شنبه
      document.querySelector('ul').innerHTML += `
      <li id='web'>
        <span>طراحی وب</span>
        <span>رضا ابراهیم زاده</span>
        <span>${time} ۱۴:۳۰−۱۱</span>
        <span><a href='http://79.143.84.27/web1/' class='link'>برو تو کلاس</a></span>
      </li>
      <li id='programming'>
        <span>برنامه نویسی ۱</span>
        <span>مهدی صادق زاده</span>
        <span>${time} ۱۸:۳۰-۱۵:۳۰</span>
        <span><a href='http://79.143.84.27/programming/' class='link'>برو تو کلاس</a></span>
      </li>
      `;
      break;


  }
  let li = document.querySelectorAll('li');


  // ساعات شنبه 
  if (day == 6) {
    if ((hour >= 11) && (hour <= 14 && minute <= 30)) {
      setOnline(li, 'web');
    }
    if ((hour >= 15 && minute <= 30) && (hour <= 18 && minute <= 30)) {
      setOnline(li, 'programming');
    }
  }

  // ساعات یک‌شنبه 
  if (day == 0) {
    if ((hour >= 11) && (hour <= 13)) {
      setOnline(li, 'database');
    }
  }

  // ساعات سه شنبه 
  if (day == 2) {
    if ((hour >= 13) && (hour <= 15)) {
      setOnline(li, 'math');
    }
    if ((hour >= 16) && (hour <= 17)) {
      setOnline(li, 'work');
    }
    if ((hour >= 17) && (hour <= 18 && minute <= 30)) {
      setOnline(li, 'english');
    }
  }

  // ساعات پنجشنبه 
  if (day == 4) {
    if ((hour >= 10) && (hour <= 13)) {
      setOnline(li, 'application_programming');
    }

    if ((hour >= 18) && (hour <= 19 && minute <= 30)) {
      setOnline(li, 'graphic');
    }
  }
  console.log(day);

}

function setOnline(li, id) {
  li.forEach(element => {
    if (element.id == id) {
      element.classList.add('online');
    }
  });
}

function copyToClipBoard(a) {
  a.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigator.clipboard.writeText(`${e.target.href}`).then(function () {
        Swal.fire({
          title: 'هوووورا',
          text: 'لینک کلاس با موفقیت کپی شد',
          icon: 'success',
          confirmButtonText: 'بزن بریم'
        })
      }, function () {
        Swal.fire({
          title: 'خطا',
          text: 'مشکلی پیش آمده!',
          icon: 'error',
          confirmButtonText: 'باشه'
        })
      });
    });
  });
}

function showOverlay() {
  let time = 'ساعت';
  let goToClass = 'کپی لینک کلاس';
  getElement('.overlay h1', 'برنامه کل هفته');
  document.querySelector('.overlay ul').innerHTML = `
  <p>
  &#8659;
    شنبه 
  &#8659;
  </p>
  <li id='web'>
    <span>طراحی وب</span>
    <span>رضا ابراهیم زاده</span>
    <span>${time} ۱۴:۳۰−۱۱</span>
    <span><a href='http://79.143.84.27/web1/' class='link'>برو تو کلاس</a></span>
  </li>
  <li id='programming'>
    <span>برنامه نویسی ۱</span>
    <span>مهدی صادق زاده</span>
    <span>${time} ۱۸:۳۰-۱۵:۳۰</span>
    <span><a href='http://79.143.84.27/programming/' class='link'>برو تو کلاس</a></span>
  </li>
  <p>
  &#8659;
  یک‌شنبه
  &#8659;
  </p>
  
  <li id='database'>
    <span>پایگاه داده</span>
    <span>حجت بیک نژاد</span>
    <span>${time} ۱۳−۱۱</span>
    <span><a href='http://79.143.84.27/databe/' class='link'>${goToClass}</a></span>
  </li>
  <p>
  &#8659;
  سه‌شنبه
  &#8659;
  </p>

  <li id='math'>
    <span>ریاضی</span>
    <span>رضا باغبانی</span>
    <span>${time} ۱۵−۱۳</span>
    <span><a href='http://79.143.84.27/mathematics/' class='link'>${goToClass}</a></span>
  </li>
  <li id='work'>
    <span>کار افرینی</span>
    <span>رضا باغبانی</span>
    <span>${time} ۱۷−۱۶</span>
    <span><a href='http://79.143.84.27/work/' class='link'>${goToClass}</a></span>
  </li>
  <li id='english'>
    <span>زبان تخصصی</span>
    <span>محمدرضا توسلی</span>
    <span>${time} ۱۸:۳۰−۱۷</span>
    <span><a href='http://79.143.84.27/thl/' class='link'>${goToClass}</a></span>
  </li>
  <p>
  &#8659;
  پنج‌شنبه
  &#8659;
  </p>
  
  <li id='application_programming'>
    <span>برنامه نویسی موبایل</span>
    <span>مجید شریف ثانوی</span>
    <span>${time} ۱۳−۱۰</span>
    <span><a href='http://79.143.84.27/mob1/' class='link'>${goToClass}</a></span>
  </li>

  <li id='graphic'>
    <span>محیط های گرافیکی و ...</span>
    <span>محمدرضا توسلی</span>
    <span>${time} ۱۹:۳۰−۱۸</span>
    <span><a href='http://79.143.84.27/mc/' class='link'>${goToClass}</a></span>
  </li>
  
    
  `;
}

/*
  if ((hour >= 18) && (hour <= 19 && minute <= 30)) {
    setOnline(li, 'database_repeat');
  }
<li id='database_repeat'>
  <span>پایگاه داده - جبرانی</span>
  <span>حجت بیگ نژاد</span>
  <span>${time} ۱۸−۱۶</span>
  <span><a href='http://79.143.84.27/databe/' class='link'>${goToClass}</a></span>
</li>
*/