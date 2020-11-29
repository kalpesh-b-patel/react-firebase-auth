import { auth } from './firebase';

class AuthService {
  async signup(email: string, password: string) {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password)
      return result;
    } catch (_) {
      return null;
    }
  }

  async signin(email: string, password: string) {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password)
      return result;
    } catch (_) {
      return null;
    }
  }

  async reset(email: string) {
    console.log(email);
    try {
      const result = await auth.sendPasswordResetEmail(email);
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  getCurrentUser() {
    console.log(auth.currentUser);
    return auth.currentUser;
  }

  logout() {
    auth.signOut();
  }
}

export default AuthService;