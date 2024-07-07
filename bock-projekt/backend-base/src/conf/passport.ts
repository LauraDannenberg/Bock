import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import User from '../model/user';

interface Profile {
    // Define the properties you expect in the LDAP profile, for example:
    cn: string;
    mail: string;
    // Add other properties as needed
  }

/**
 * Konfiguriert Passport, um die Authentifizierung zu ermöglichen
 * Verwendet LocalStrategy um eine Authentifizierung mit Nutzername und Passwort bereitzustellen
 */
export function configurePassport(): void {
    passport.use(new LocalStrategy(async (username, password, done) => {
        const user = await User.findOne(username); 
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        try {
            if (await bcrypt.compare(password, user.pwhash)) { 
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        } catch (error) {
            return done(error);
        }
    }));

    passport.use(new LDAPStrategy({
        server: {
          url: 'ldap://0.0.0.0:1389',
        },
        base: 'cn=users,dc=example,dc=local',
        search: {
          filter: '(&(email=*@foo.com))',
        }
      },
      (profile: Profile, done: (error: any, user?: boolean | false) => void) => {
        if (profile) {
          return done(null, true);  
        } else {
          return done(null, false); // Authentication failed
        }
      }));

    passport.serializeUser((user: any, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id: number, done) => {
        const usr = User.findById(id);
        done(null, usr);
    });
}
