import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.scss']
})
export class StaffloginComponent implements OnInit {

  constructor(private route: Router,
              private fb: FormBuilder) {}


  stafform = this.fb.group({
     staffid: ['', [Validators.required,
                    Validators.maxLength(5),
                    Validators.minLength(5)]],
     password: ['', Validators.required]
  });

  staffid = this.stafform.get('staffid');

  ngOnInit(): void {
  }
  onSubmit() {
    this.route.navigate(['/dashboard']);
  }
}
