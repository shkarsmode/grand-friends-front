import { Component, Input } from '@angular/core';
import { Reasons } from '../../../../shared';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent { 

    @Input() formType: Reasons = Reasons.GeneralInquiry; 

    public contactForm: FormGroup;
    public reasonData: Array<Reasons> = Object.values(Reasons);
    public isSending: boolean = false;

    constructor(
        private fb: FormBuilder,
    ) {}

    ngOnInit(): void {
        this.initContactForm();
        this.resetFieldsByFormType(this.formType)
    }

    private initContactForm(): void {
      this.contactForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          phone: [''],
          reason: [this.formType, Validators.required],
          school: ['', Validators.required],
          organization: ['', Validators.required],
          website: ['',],
          location: ['', Validators.required],
          meassage: ['', Validators.required]
      });
    }

    private resetFieldsByFormType(formType: Reasons) {
        switch (formType) {
          case Reasons.CommunityEngagement:
              this.website.enable();
              this.organization.enable();
              this.school.disable();
            break;
          case Reasons.SchoolEnrollment: 
              this.website.disable();
              this.organization.disable();
              this.school.enable();
            break;
        }
    }

    public onContactFormSubmit() {
        this.isSending = true;
        this.contactForm.reset();
        this.resetFieldsByFormType(this.formType);
        this.isSending = false;
    }


    public get reason(): FormControl {return this.contactForm.get('reason') as FormControl;}
  
    public get organization(): FormControl {return this.contactForm.get('organization') as FormControl;}
  
    public get website(): FormControl {return this.contactForm.get('website') as FormControl;}
  
    public get school(): FormControl {return this.contactForm.get('school') as FormControl;}
  

}
