import React from "react";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import movie from "../../../imageFolder/movie.png";
import portfolio from "../../../imageFolder/portfolio.jpg";
import styles from "./PortfolioSite.module.scss";

const PortfolioSite = () => {
  return (
    <div>
      <header className={styles.header}></header>
      <main className={styles.portfolioLetter}>
        <div className={styles.background_movie}>
          <div className={styles.letterBox}>
            <div className={styles.imageBox}>
              <h3>movie Site</h3>
              <div className={styles.image}>
                <a href="https://main.d2waztlnfjnb79.amplifyapp.com/">
                  <img src={movie} alt="映画サイト" />
                </a>
              </div>
            </div>
            <nav className={styles.letter}>
              <div className={styles.explanation}>
                <h4>アプリの特徴</h4>
                <p>
                  React+TypeScriptを使用し作成したサイトになります。
                  <br />
                  Web APIからデータを取得し、映画サイトを作成しました。
                  <br />
                  最新の20項目が表示される作りになっています。
                </p>
                <h4>主な使用技術</h4>
                <p>
                  React / TypeScript / Sass / AWS Amplify
                  <br />
                  useState / useEffect / axios
                </p>
                <div className={styles.link}>
                  <a
                    className={styles.linkTwitter}
                    href="https://twitter.com/warakera29"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <RiTwitterFill style={{ marginTop: "10px" }} />
                    </span>
                  </a>
                  /
                  <a
                    className={styles.linkGithub}
                    href="https://github.com/Yuta-Tsutsumi/movie_site"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <AiFillGithub />
                    </span>
                  </a>
                  /
                  <a
                    className={styles.linkQiita}
                    href="https://qiita.com/Yuta-Tsutsumi/items/2075e20645345b9c85c3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Qiita
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className={styles.background_protfolio}>
          <div className={styles.letterBox}>
            <div className={styles.imageBox}>
              <h3>Portfolio Site</h3>
              <div className={styles.image}>
                <a href="https://main.d3m210uez05lyb.amplifyapp.com/">
                  <img src={portfolio} alt="ポートフォリオ写真" />
                </a>
              </div>
            </div>
            <nav className={styles.letter}>
              <div className={styles.explanation}>
                <h4>アプリの特徴</h4>
                <p>
                  React+TypeScriptを使用し作成したサイトになります。
                  <br />
                  ホバーの動き方にもこだわりを込めました。
                  <br />
                  これから作成するポートフォリオを載せていこうと思いますので、
                  <br />
                  宜しくお願いします。
                </p>
                <h4>主な使用技術</h4>
                <p>
                  React / TypeScript / Sass / AWS Amplify
                  <br />
                  React Hook Form / React Router
                </p>
                <div className={styles.link}>
                  <a
                    className={styles.linkTwitter}
                    href="https://twitter.com/warakera29"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <RiTwitterFill />
                    </span>
                  </a>
                  /
                  <a
                    className={styles.linkGithub}
                    href="https://github.com/Yuta-Tsutsumi/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <AiFillGithub />
                    </span>
                  </a>
                  /
                  <a
                    className={styles.linkQiita}
                    href="https://qiita.com/Yuta-Tsutsumi/items/4c29b64f1344d3a2b38e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Qiita
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioSite;
