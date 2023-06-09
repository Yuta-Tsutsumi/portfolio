import React from "react";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import ProfileImage from "../../molecules/ProfileImage/ProfileImage";
import profileTopImage from "../../../imageFolder/profileTopImage.jpg";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./ProfilePages.module.scss";

const ProfilePages: React.FC = () => {
  return (
    <>
      <div className={styles.topImage}>
        <img className={styles.image} src={profileTopImage} alt="トップ画像" />
        <header className={styles.header}>
          <HeaderLink />
        </header>
        <div className={styles.middleImage}>
          <ProfileImage />
        </div>
      </div>
      <div className={styles.letterBottom}>
        <p>堤 佑太</p>
        <p>Yuta Tsutsumi</p>
        <p>1993年12月21日</p>
        <a
          className={styles.linkTwitter}
          href="https://twitter.com/warakera29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <RiTwitterFill />
            &nbsp;Twitter&nbsp;
          </span>
        </a>
        /
        <a
          className={styles.linkGithub}
          href="https://github.com/Yuta-Tsutsumi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <AiFillGithub />
            &nbsp;Github&nbsp;
          </span>
        </a>
        /
        <a
          className={styles.linkQiita}
          href="https://qiita.com/Yuta-Tsutsumi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Qiita
        </a>
      </div>
      <div className={styles.letterProfile}>
        <h2>Profile</h2>
      </div>
    </>
  );
};

export default ProfilePages;
