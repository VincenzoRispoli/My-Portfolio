import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/components/services/translation.service';
import { MenuMobileService } from '../../shared/components/services/menu-mobile.service';
import { DialogSuccessService } from '../../shared/components/services/dialog-success.service';
import { SuccessPopUpComponent } from './success-pop-up/success-pop-up.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, SuccessPopUpComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './mediaQueries-contact.component.scss', './inputFields-contact.component.scss', './checkboxStyle.component.scss']
})
export class ContactComponent {

  translate = inject(TranslationService);
  menuService = inject(MenuMobileService);
  dialogService = inject(DialogSuccessService);

  updateCheckbox: boolean = false;
  checked = false;
  isHover: boolean = false;

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
    if (label == 'name' && (value == null || value.length == 0)) {
      this.animateName = false
    } else if (label == 'email' && (value == null || value.length == 0)) {
      this.animateEmail = false;
    } else if (label == 'message' && (value == null || value.length == 0)) {
      this.animateTextarea = false;
    }
  }

  resetLabels() {
    this.animateName = false;
    this.animateEmail = false;
    this.animateTextarea = false;
  }

  onHover() {
    this.isHover = true;
  }

  onLeave() {
    this.isHover = false;
  }

  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
  }

  mailTest = false;

  post = {
    endPoint: 'https://vincenzo-rispoli.de/sendMail.php',
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
      this.dialogService.onFormSubmitted();
      this.resetLabels();
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}