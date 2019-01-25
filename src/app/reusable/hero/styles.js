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
  }
});

export default styles;
