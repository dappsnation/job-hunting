import { Injectable } from '@angular/core';
import { AuthStore, AuthState } from './auth.store';
import { CollectionConfig, FireAuthService } from 'akita-ng-fire';
import { User } from 'firebase/app';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthService extends FireAuthService<AuthState> {

  constructor(store: AuthStore) {
    super(store);
  }

  createProfile(user: User) {
    return {
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      verified: user.emailVerified
    }
  }

}
