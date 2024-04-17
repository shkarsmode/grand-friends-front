import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reasons, urlValidator } from '../../../../shared';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  animations: [
    trigger('slideAndBlur', [
      state('void', style({
        transform: 'translateX(20px)',
        filter: 'blur(8px)'
      })),
      state('*', style({
        transform: 'translateX(0)',
        filter: 'blur(0)'
      })),
      transition('void => *', animate('0.4s')),
      transition('* => void', animate('0.4s'))
    ])
  ]
})
export class FormComponent { 

    @Input() formType: Reasons = Reasons.GeneralInquiry; 
    @Output() submited: EventEmitter<any> = new EventEmitter();

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

    private initContactForm(): void {
      this.contactForm = this.fb.group({
          name: ['', [ Validators.required, Validators.maxLength(200), Validators.minLength(3)]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.maxLength(20)],
          reason: [this.formType, Validators.required],
          school: ['', [Validators.required, Validators.maxLength(200)]],
          organization: ['', [Validators.required, Validators.maxLength(200)]],
          website: ['', urlValidator()],
          location: [''],
          message: ['', [Validators.required, Validators.maxLength(500)]]
      });
    }

    private resetFieldsByFormType(): void {
             
        switch (this.formType) {
          case Reasons.CommunityEngagement:
              this.contactForm.addControl('website', new FormControl('', [Validators.required, urlValidator()]))
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
    }

    public onContactFormSubmit(): void {
        this.isSending = true;
        this.contactForm.reset();
        this.resetFieldsByFormType();
        this.reason.setValue(this.formType);
        this.isSending = false;
        this.submited.emit();
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
