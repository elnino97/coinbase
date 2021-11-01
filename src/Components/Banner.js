import classes from "./Banner.module.css";
import InputCard from "./InputCard";

const Banner = () => {
  return (
    <>
      <section className={classes.banner}>
        <div className={classes.banner__wrapper}>
          <div className={classes.banner__content}>
            <h1 className={classes.banner__heading}>
              <span className="color-java">Buy Bitcoin,</span> Ethereum,
              Litecoin and other crypto{" "}
              <span className="color-java">online</span>
            </h1>
            <InputCard />
            <p className={classes.banner__description}>
              Why bother going through complicated exchanges? Buy cryptocurrency
              with top payment methods like SEPA bank transfer, Credit and Debit
              Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
              Ethereum or any other popular crypto directly to your personal
              wallet without making any initial deposits. It's as easy as it
              gets!
            </p>
            <a className={classes.banner__start} href="/">
              Start now &gt;
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
