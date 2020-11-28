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

  getCurrentUser() {
    console.log(auth.currentUser);
    return auth.currentUser;
  }
}

export default AuthService;