import { Component, Input } from '@angular/core';
import { Reasons } from '../../../../shared';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputLocationAutocompleteComponent } from './components/input-location-autocomplete/input-location-autocomplete.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent { 

    @Input() formType: Reasons = Reasons.GeneralInquiry; 

    public contactForm: FormGroup;
    public reasonData: Array<string> = Object.values(Reasons);
    public isSending: boolean = false;

    constructor(
        private fb: FormBuilder,
    ) {}

    ngOnInit(): void {
        this.initContactForm();
        this.resetFieldsByFormType()
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
          location: [''],
          meassage: ['', Validators.required]
      });
    }

    private resetFieldsByFormType(): void {
             
        switch (this.formType) {
          case Reasons.CommunityEngagement:
              this.contactForm.addControl('website', new FormControl(''))
              this.contactForm.addControl('organization', new FormControl('', Validators.required))
              if(this.isFormControlExists('school')) this.contactForm.removeControl('school');
            break;
          case Reasons.SchoolEnrollment: 
              if(this.isFormControlExists('website')) this.contactForm.removeControl('website');
              if(this.isFormControlExists('organization')) this.contactForm.removeControl('organization');
              this.contactForm.addControl('school', new FormControl('', Validators.required));
            break;
          default:
              if(this.isFormControlExists('website')) this.contactForm.removeControl('website')
              if(this.isFormControlExists('organization')) this.contactForm.removeControl('organization');
              if(this.isFormControlExists('school')) this.contactForm.removeControl('school');
            break;
        }
    }

    public isFormControlExists(formControlName: string): boolean {
        return !!this.contactForm.get(formControlName)
    }

    public onReasonChange(): void {
        if(this.reason.value === Reasons.GeneralInquiry) this.formType = Reasons.GeneralInquiry;
        if(this.reason.value === Reasons.CommunityEngagement) this.formType = Reasons.CommunityEngagement;
        if(this.reason.value === Reasons.SchoolEnrollment) this.formType = Reasons.SchoolEnrollment;
        this.resetFieldsByFormType();  
    }

    public onContactFormSubmit(): void {
        this.isSending = true;
        this.contactForm.reset();
        this.resetFieldsByFormType();
        this.isSending = false;
    }


    public get reason(): FormControl {return this.contactForm.get('reason') as FormControl;}
  
    public get organization(): FormControl {return this.contactForm.get('organization') as FormControl;}
  
    public get website(): FormControl {return this.contactForm.get('website') as FormControl;}
  
    public get school(): FormControl {return this.contactForm.get('school') as FormControl;}
  

}
