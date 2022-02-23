import React from 'react';

import styles from "./Header.module.scss"
import {LoginButtonAndMenuDropdown} from "@/components/Header/LoginButtonAndMenuDropdown";
import {SupportUsDropdown} from "@/components/Header/SupportUsDropdown";

export default function Header() {


  return (
    <header className={`container ${styles.navbar}`}>
      <h1 className={styles.studyLion}>StudyBot</h1>
      <div className={styles.navbar_links}>
        <p className={styles.navbar_item}>
          Invite the bot
        </p>
        <p className={styles.navbar_item}>
          Tutorials
        </p>
        <p className={styles.navbar_item}>
          Anki Addon
        </p>
        <SupportUsDropdown/>
      </div>

      <LoginButtonAndMenuDropdown/>
    </header>
  )
}
