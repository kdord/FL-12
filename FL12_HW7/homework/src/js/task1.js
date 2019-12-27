let email = prompt('Please, enter email');
const MIN_EMAIL_LENGTH = 5;
const MIN_NEW_PASS_LENGTH = 6;

if (email) {
  if (email.length < MIN_EMAIL_LENGTH) {
    console.log(
      "I don't know any emails having name length less than 5 symbols"
    );
  } else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Please, enter the password');
    if (password) {
      if (
        email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass'
      ) {
        let changePass = confirm('Do you want to change your password?');
        if (changePass) {
          let oldPass = prompt('Please, enter your old password');
          if (oldPass === password) {
            let newPass = prompt('Please, enter new password');
            if (newPass) {
              if (newPass.length < MIN_NEW_PASS_LENGTH) {
                alert('It’s too short password. Sorry.');
              } else {
                let newPassAgain = prompt('Please, enter new password again');
                if (newPassAgain === newPass) {
                  alert('You have successfully changed your password');
                } else {
                  alert('You wrote the wrong password');
                }
              }
            } else {
              alert('Canceled');
            }
          } else {
            alert('Wrong password');
          }
        } else {
          alert('You have failed the change');
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('Canceled');
    }
  } else {
    alert("I don't know you");
  }
} else {
  alert('Canceled');
}
