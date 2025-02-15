import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogementService } from '../service/logement.service';

@Component({
  selector: 'app-addlogement',
  templateUrl: './addlogement.component.html',
  styleUrls: ['./addlogement.component.css']
})
export class AddlogementComponent {
  logementForm: FormGroup;


  constructor(private fb: FormBuilder, private logementService: LogementService ){
    this.logementForm = this.fb.group({
      reference: ['', Validators.required],
      adresse: ['', Validators.required],
      delegation: ['', Validators.required],
      gouvernorat: ['', Validators.required],
      type: ['', Validators.required],
      description: [''],
      prix: ['', [Validators.required, Validators.min(0)]]
    });
  }
  onSubmit() {
    if (this.logementForm.valid) {
      this.logementService.addLogement(this.logementForm.value).subscribe(response => {
        console.log('Logement ajouté avec succès!', response);
      });
    }

  }
}
