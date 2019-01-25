const styles = () => ({
  main: {
    margin: "0 auto",
    maxWidth: "80%"
  },
  moreDetail: {
    maxWidth: 300,
    width: "100%"
  },
  more: {
    display: "flex",
    justifyContent: "flex-start"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px 0px",
    "& > span": {
      textTransform: "uppercase",
      color: "#ff1818",
      fontWeight: "500"
    },
    "& > p": {
      color: "#00000098"
    }
  }
});

export default styles;
