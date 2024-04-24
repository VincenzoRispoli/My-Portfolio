import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  updateCheckbox: boolean = false;
  buttonIsDisabled: boolean = true;
  checked = false;

  borderGray = '2px solid #bbb';
  colorGray = '#bbb';

  animateName: boolean = false;
  animateEmail: boolean = false;
  animateTextarea: boolean = false

  translateUp(label: string) {
    if (label == 'name') {
      this.animateName = true
    } else if (label == 'email') {
      this.animateEmail = true;
    } else {
      this.animateTextarea = true;
    }
  }

  translateBack(label: string, value: string) {
    if (label == 'name' && value.length == 0) {
      this.animateName = false
    } else if (label == 'email' && value.length == 0) {
      this.animateEmail = false;
    } else if (label == 'message' && value.length == 0) {
      this.animateTextarea = false;
    }
  }

  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
  }

  updateButtonState(checked: any) {
    if (checked.currentTarget.checked) {
      this.checked = true
      this.buttonIsDisabled = false;
    } else if (!checked.currentTarget.checked) {
      this.checked = false;
      this.buttonIsDisabled = true;
    }

  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(response);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
