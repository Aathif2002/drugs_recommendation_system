import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CoreService } from '../core.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit{
  empForm: FormGroup;

  depertment: string[] = [
    'Common Diseases',
    'Health and Care',
    'Viruses',
    'Mental Health',
    'Cancer',
    'Infection and Poisoning',
    'Eyes',
    'Muscles,Joint and Bones',
    'Skin, Hair and Nails',
    'Stomach',
    'Imune System',
    'Kidney',

  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: AdminService,
    private _dialogRef: MatDialogRef<Admin2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
  
      drugsName: '',
      genericName: '',
      rx: '',
      dateofupdate: '',
      depertment: '',
      disease: '',
      pregnancy: '',
      csa: '',
      alchohol: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Drugs detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Drugs added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}


