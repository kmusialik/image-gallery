'use client';
import styles from './nav-bar.module.css';
import { CONTACT, PRICING } from '../../constant';
import Link from 'next/link';
import { UserButton, auth, currentUser, useAuth, useUser } from '@clerk/nextjs';

const navLinks = [
  {
    path: `/${PRICING}`,
    label: PRICING,
    id: 1,
  },
  { path: `/${CONTACT}`, label: CONTACT, id: 2 },
];

const NavBar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className={styles.header}>
      <div className='pageWith'>
        <nav className={styles.nav}>
          <div className={styles.logo}>Logo</div>

          {isSignedIn ? (
            <section className={styles.linkBox}>
              <ul className={styles.navLinks}>
                {navLinks.map(({ path, label, id }) => (
                  <Link href={path} key={id} className={styles.navLink}>
                    {label}
                  </Link>
                ))}
              </ul>
              <UserButton afterSignOutUrl="/" />
            </section>
          ) : (

            <>
              <section className={styles.linkBox}>
            <ul className={styles.navLinks}>
                {navLinks.map(({ path, label, id }) => (
                  <Link href={path} key={id} className={styles.navLink}>
                    {label}
                  </Link>
                ))}
              </ul>

            <section className={styles.signUpBox}>
              <div>
                <Link href="/sign-up">sign up</Link>
              </div>
              <div>
                <Link href="/sign-in">login</Link>
              </div>
            </section>
            </section>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
