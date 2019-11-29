import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/_services/candidats.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.scss']
})
export class EditCandidatComponent implements OnInit {

  CandidatList: any = [];
  updateCandidatForm: FormGroup;

  ngOnInit() {
    this.updateForm()
  }

  constructor(
    private actRoute: ActivatedRoute,
    public bugService: CandidatService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.GetCandidat(id).subscribe((data) => {
      this.updateCandidatForm = this.fb.group({
        firstname: [data.firstname],
        lastname: [data.lastname],
        adress: [data.adress],
        town: [data.town],
        zipcode: [data.zipcode],
        email: [data.email],
        short_description: [data.short_description],
        date_of_birth: [data.date_of_birth],

        Langue: this.fb.group({
          name: [data.langues],
          level: [data.langues],
        })
      })
    })
  }

  updateForm(){
    this.updateCandidatForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      adress: [''],
      town: [''],
      zipcode: [''],
      email: [''],
      short_description: [''],
      date_of_birth: [''],

      Langue: this.fb.group({
        name: [''],
        level: ['']
      })
    })
  }

  submitForm(){
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.UpdateCandidat(id, this.updateCandidatForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/candidats-single'))
    })
  }

}
