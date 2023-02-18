export { modalFunctions };
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyA1p5zFRYitESqi8tfXfMidfyvRPHCvW00',
  authDomain: 'film-library-499b4.firebaseapp.com',
  projectId: 'film-library-499b4',
  storageBucket: 'film-library-499b4.appspot.com',
  messagingSenderId: '70753383955',
  appId: '1:70753383955:web:59d9b4c26be7561d35b1e6',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const loginOpeningFormBtn = document.querySelector('.login');
const closeLoginModal = document.querySelector('.login__close');
const closeRegisterModal = document.querySelector('.register__close');
const modalWindow = document.querySelector('.login__modal');
const registerOpeningFormBtn = document.querySelector('.login__register');
const loginModalWindow = document.querySelector('.login__modal');
const registerModalWindow = document.querySelector('#register-form');
const alreadySignedBtn = document.querySelector('.register__registered');
const logOutButton = document.querySelector('.logout');

register = () => {
  let username = document.getElementById('username-register').value;
  let email = document.getElementById('email-register').value;
  let password = document.getElementById('password-register').value;
  if (validateEmail(email) === false || validatePassword(password) === false) {
    Notiflix.Notify.warning('Incorrect format of email or password');
    return;
  }
  if (validateFields(username) === false) {
    Notiflix.Notify.warning('Incorrect username. Please, try something different.');
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(function() {
      Notiflix.Notify.success('User created! Now please log in');
      registerModalWindow.style.display = "none";
      modalWindow.style.display = "flex";
    })
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });


};

const login = () => {
  let email = document.getElementById('email-login').value;
  let password = document.getElementById('password-login').value;
  if (validateEmail(email) === false || validatePassword(password) === false) {
    Notiflix.Notify.warning('Incorrect format of email or password');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(function() {
      Notiflix.Notify.success('Successfully logged in!');
      loginOpeningFormBtn.style.display = 'none';
      logOutButton.style.display = 'flex';
      modalWindow.style.display = 'none';
    })
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
};

const validateEmail = (email) => {
  const regex = /^[^@]+@\w+(\.\w+)+\w$/;
  if (regex.test(email) === true) {
    return true;
  } else {
    return false;
  }
};
const validatePassword = (password) => {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
};
const validateFields = (field) => {
  if (field === null) {
    return false;
  }
  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
};

const registerButton = document.querySelector('.register__modal-btn');
registerButton.addEventListener('click', (event) => {
  event.preventDefault();
  register();
});
const loginButton = document.querySelector('.login__modal-btn');
loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  login();
});
logOutButton.addEventListener('click', (event) => {
  event.preventDefault();
  signOut(auth)
    .then(function() {
      Notiflix.Notify.success('Signed out successfully');
      logOutButton.style.display = "none";
      loginOpeningFormBtn.style.display = 'flex';
    })
    .catch(function() {
      Notiflix.Notify.failure('Failed to sign out. Try again later.');
    });
});
///

const modalFunctions = () => {


  loginOpeningFormBtn.addEventListener('click', (event) => {
    modalWindow.style.display = 'flex';
  });

  registerOpeningFormBtn.addEventListener('click', (event) => {
    loginModalWindow.style.display = 'none';
    registerModalWindow.style.display = 'flex';
  });
  closeLoginModal.addEventListener('click', (event) => {
    event.preventDefault();
    modalWindow.style.display = 'none';
    loginModalWindow.style.display = 'none';
  });
  closeRegisterModal.addEventListener('click', (event) => {
    event.preventDefault();
    modalWindow.style.display = 'none';
    registerModalWindow.style.display = 'none';
  });

  alreadySignedBtn.addEventListener('click', (event) => {
    registerModalWindow.style.display = 'none';
    loginModalWindow.style.display = 'flex';
  });
};

