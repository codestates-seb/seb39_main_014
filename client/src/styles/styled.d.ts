import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSizes: {
      fs2: "2px";
      fs8: "8px";
      fs10: "10px";
      fs11: "11px";
      fs12: "12px";
      fs13: "13px";
      fs14: "14px";
      fs15: "15px";
      fs16: "16px";
      fs18: "18px";
      fs20: "20px";
      fs24: "24px";
      fs25: "25px";
      fs32: "32px";
      fs40: "40px";
      fs45: "45px";
    };
    fontWeights: {
      fw400: 400;
      fw500: 500;
      fw600: 600;
      fw700: 700;
    };
    colors: {
      gray: {
        "100": "#eee";
        "200": "#d9d9d9";
        "300": "#a6a6a6";
        "400": "#959595";
        "500": "#808080";
        "600": "#606060";
      };
      green: {
        "100": "#e5f8ed";
        "300": "#69d06f";
        "400": "#009f47";
        "500": "#008000";
      };
      blue: {
        "100": "#f2f4f8";
        "200": "#959da5";
        "300": "#4a5e75";
        "400": "#4b5563";
      };
      red: {
        "100": "#ffe3e4";
        "200": "#ff7d85";
        "300": "#FF6464";
        "400": "#ff0000";
      };
      orange: "#ffa500";
      black: "#000000";
      white: "#FFFFFF";
    };
  }
}
