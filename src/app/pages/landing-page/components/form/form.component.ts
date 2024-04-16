import { Component, Input } from '@angular/core';
import { Reasons } from '../../../../shared';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

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
        this.resetFieldsByFormType();
        this.contactForm.valueChanges.subscribe(body => console.log(body));
    }

    ngAfterViewInit(): void {
        this.initTabindexes();
    }

    private initContactForm(): void {
      this.contactForm = this.fb.group({
          name: ['', [ Validators.required, Validators.maxLength(200), Validators.minLength(3)]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.maxLength(20)],
          reason: [this.formType, Validators.required],
          school: ['', [Validators.required, Validators.maxLength(200)]],
          organization: ['', [Validators.required, Validators.maxLength(200)]],
          website: ['', this.urlValidator()],
          location: [''],
          message: ['', [Validators.required, Validators.maxLength(500)]]
      });
    }

    initTabindexes() {
      const formInputs = document.querySelectorAll('.formInput');
      console.log(formInputs);
      
    }

    private resetFieldsByFormType(): void {
             
        switch (this.formType) {
          case Reasons.CommunityEngagement:
              this.contactForm.addControl('website', new FormControl('', [Validators.required, this.urlValidator()]))
              this.contactForm.addControl('organization', new FormControl('',[ Validators.required, Validators.maxLength(200)]))
              if(this.isFormControlExists('school')) this.contactForm.removeControl('school');
            break;
          case Reasons.SchoolEnrollment: 
              if(this.isFormControlExists('website')) this.contactForm.removeControl('website');
              if(this.isFormControlExists('organization')) this.contactForm.removeControl('organization');
              this.contactForm.addControl('school', new FormControl('', [Validators.required, Validators.maxLength(200)]));
              
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
        this.initTabindexes();
        const formInputs = document.querySelectorAll('.formInput');
        console.log(formInputs);
    }

    public onContactFormSubmit(): void {
        this.isSending = true;
        this.contactForm.reset();
        this.resetFieldsByFormType();
        this.isSending = false;
    }   

    


// Custom URL validator function
    private urlValidator(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        try {
          let url = new URL(control.value);
        } catch (error) {
          return { 'url': { value: control.value } }; 
        }
        return null;
      };
    }



  public get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  public get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  public get phone(): FormControl {
    return this.contactForm.get('phone') as FormControl;
  }

  public get reason(): FormControl {
    return this.contactForm.get('reason') as FormControl;
  }

  public get organization(): FormControl {
    return this.contactForm.get('organization') as FormControl;
  }

  public get website(): FormControl {
    return this.contactForm.get('website') as FormControl;
  }

  public get school(): FormControl {
    return this.contactForm.get('school') as FormControl;
  }

  public get location(): FormControl {
    return this.contactForm.get('location') as FormControl;
  }

  public get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }



}
