import { Injectable } from '@angular/core'
import { UserProfile } from './interfaces/user-profile'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'kyle',
    contact: 'kylekohl2@yahoo.com',
    bio: 'i like fishing n stuff',
  }

  constructor() {}

  getUserProfile = (): UserProfile => {
    return this.userProfile
  }
  setUserProfile = (userData: UserProfile) => {
    this.userProfile = userData
  }
}
