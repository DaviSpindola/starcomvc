const styles = theme => ({
  root: {
    position: "relative",
    clipPath: "polygon(0 0,0 99%, 100% 95%, 100% 0)",
    backgroundColor: "#181818"
  },
  heroBackground: {
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  heroBackgroundWrapper: {
    clipPath: "polygon(0 0,0 98%, 100% 92%, 100% 0)"
  },
  imageWrapper: {
    minHeight: "unset",
    maxHeight: "unset",
    height: 340,
    margin: 0
  },
  hero: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "transparent"
  },
  main: {
    padding: "20px 0",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "inherit"
  },
  container: {
    margin: "-30px auto 0",
    textAlign: "center"
    // width: "90%"
  },
  headLine: {
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#fff106",
    border: "1px solid",
    padding: 10,
    backgroundColor: "#00000099"
  }
});

export default styles;
