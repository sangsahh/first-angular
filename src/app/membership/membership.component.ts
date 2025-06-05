import { Component } from '@angular/core';
import { sharedImports } from '../shared/shared-import';
import { MembershipService } from './membership.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [sharedImports, HttpClientModule],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.scss',
  providers: [MembershipService]
})
export class MembershipComponent {
 signupForm;
  

  title:string = 'KSG';

 previewUrl: string | ArrayBuffer | null = null;

 constructor(private fb: FormBuilder, private membershipService: MembershipService, private router: Router) {
  this.signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    nickname: ['', Validators.required],
    profileImage: [null as File | null], // 파일
    agreement: [false, Validators.requiredTrue]
  });
 }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
    this.signupForm.patchValue({ profileImage: file });  // 파일 값을 폼에 넣어줌
    this.signupForm.get('profileImage')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

   onSubmit() {
    console.log("눌러짐");
    
    if (this.signupForm.invalid) {
      console.log("this.signupForm.invalid");
      
      this.signupForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('email', this.signupForm.get('email')?.value ?? '');
  formData.append('password', this.signupForm.get('password')?.value ?? '');
  formData.append('nickname', this.signupForm.get('nickname')?.value ?? '');
   const profileImage = this.signupForm.get('profileImage')?.value;
    if (profileImage) {
    formData.append('profileImage', profileImage, profileImage.name);
    }
    console.log('FormData:', formData);
    this.membershipService.signup(formData).subscribe({
      next: res => {alert("成功しました。");
        this.router.navigate(['/login']); 
      },
      error: err => console.error('失敗しました。'),
    });
  }
}
