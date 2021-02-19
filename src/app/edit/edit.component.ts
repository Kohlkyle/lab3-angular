import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { UserProfile } from '../interfaces/user-profile'
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  profile!: UserProfile

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.profile = this.profileService.getUserProfile()
  }
  formSubmission = (form: NgForm): void => {
    this.profileService.setUserProfile(form.form.value)
    this.router.navigate(['profile'])
  }
}
