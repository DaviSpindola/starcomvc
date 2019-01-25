const styles = theme => ({
  footer: {
    background: "#181818", //theme.palette.primary.main,
    width: "100%",
    paddingTop: 50,
    paddingBottom: 38,
    position: "relative",
    bottom: 0
  },
  mainFooter: {
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    flexDirection: "column",
    display: "block",
    width: "100%"
  },
  content: {
    padding: "0 30px"
  },
  footerTitle: {
    color: "white",
    textTransform: "uppercase"
  },
  socialLinks: {
    display: "flex",
    "& li": {
      paddingLeft: 0
    },
    "& li > a": {
      color: "white"
    }
  }
});

export default styles;
