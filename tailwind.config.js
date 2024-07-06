/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgwhite: "var(--bgwhite)",
        "hc-0j-in": "var(--hc-0j-in)",
        "m-b-3t-zi": "var(--m-b-3t-zi)",
        "ML-tw-1j": "var(--ML-tw-1j)",
        "tx-u7vg": "var(--tx-u7vg)",
        "ws-j7-it": "var(--ws-j7-it)",
        "x-1l-ubo-z": "var(--x-1l-ubo-z)",
        "x-7rs-fx": "var(--x-7rs-fx)",
        "z-vq-cz-3": "var(--z-vq-cz-3)",
        color: "#f8f7f3",
        color1: "#088269",
        whitesmoke: {
          100: "#efefef",
          200: "rgba(248, 247, 243, 0.8)",
          300: "rgba(248, 247, 243, 0.6)",
        },
        color2: "#e5e4ed",
        color4: "#d5d1e1",
        color3: "#7a7687",
        color5: "#202020",
        color6: "#fff",
        color7: "#e5e2ee",
        slategray: "rgba(122, 118, 135, 0.3)",
        gainsboro: "#e1dfe7",
        lavender: "#e6e6fd",
        darkslateblue: {
          100: "#5a5a9a",
          200: "#424285",
        },
        honeydew: "#e1efe6",
        khaki: "#ffe095",
        darkgoldenrod: {
          100: "#ad7b00",
          200: "#855e00",
        },
      },
      spacing: {},
      fontFamily: {
        t2: "Manrope",
      },
      borderRadius: {
        "31xl": "50px",
        "10xs": "3px",
        "6xs": "7px",
        "21xl": "40px",
        "41xl": "60px",
        xl: "20px",
        "3xs": "10px",
        "57xl": "76px",
      },
      fontSize: {
        "3xs": "10px",
        xs: "12px",
        lg: "18px",
        base: "16px",
        sm: "14px",
        "11xl": "30px",
        "5xs": "8px",
        "9xl": "28px",
        "5xl": "24px",
        "29xl": "48px",
        "10xl": "29px",
        "19xl": "38px",
        xl: "20px",
        "15xl": "34px",
        "8xl": "27px",
        inherit: "inherit",
      },
      screens: {
        mq1355: {
          raw: "screen and (max-width: 1355px)",
        },
        mq1350: {
          raw: "screen and (max-width: 1350px)",
        },
        mq1345: {
          raw: "screen and (max-width: 1345px)",
        },
        mq1340: {
          raw: "screen and (max-width: 1340px)",
        },
        mq1335: {
          raw: "screen and (max-width: 1335px)",
        },
        mq1330: {
          raw: "screen and (max-width: 1330px)",
        },
        mq1325: {
          raw: "screen and (max-width: 1325px)",
        },
        mq1320: {
          raw: "screen and (max-width: 1320px)",
        },
        mq1315: {
          raw: "screen and (max-width: 1315px)",
        },
        mq1310: {
          raw: "screen and (max-width: 1310px)",
        },
        mq1305: {
          raw: "screen and (max-width: 1305px)",
        },
        mq1300: {
          raw: "screen and (max-width: 1300px)",
        },
        mq1295: {
          raw: "screen and (max-width: 1295px)",
        },
        mq1290: {
          raw: "screen and (max-width: 1290px)",
        },
        mq1285: {
          raw: "screen and (max-width: 1285px)",
        },
        mq1280: {
          raw: "screen and (max-width: 1280px)",
        },
        mq1275: {
          raw: "screen and (max-width: 1275px)",
        },
        mq1270: {
          raw: "screen and (max-width: 1270px)",
        },
        mq1265: {
          raw: "screen and (max-width: 1265px)",
        },
        mq1260: {
          raw: "screen and (max-width: 1260px)",
        },
        mq1255: {
          raw: "screen and (max-width: 1255px)",
        },
        mq1250: {
          raw: "screen and (max-width: 1250px)",
        },
        mq1245: {
          raw: "screen and (max-width: 1245px)",
        },
        mq1240: {
          raw: "screen and (max-width: 1240px)",
        },
        mq1235: {
          raw: "screen and (max-width: 1235px)",
        },
        mq1230: {
          raw: "screen and (max-width: 1230px)",
        },
        mq1225: {
          raw: "screen and (max-width: 1225px)",
        },
        mq1220: {
          raw: "screen and (max-width: 1220px)",
        },
        mq1215: {
          raw: "screen and (max-width: 1215px)",
        },
        mq1210: {
          raw: "screen and (max-width: 1210px)",
        },
        mq1205: {
          raw: "screen and (max-width: 1205px)",
        },
        mq1200: {
          raw: "screen and (max-width: 1200px)",
        },
        mq1195: {
          raw: "screen and (max-width: 1195px)",
        },
        mq1190: {
          raw: "screen and (max-width: 1190px)",
        },
        mq1185: {
          raw: "screen and (max-width: 1185px)",
        },
        mq1180: {
          raw: "screen and (max-width: 1180px)",
        },
        mq1175: {
          raw: "screen and (max-width: 1175px)",
        },
        mq1170: {
          raw: "screen and (max-width: 1170px)",
        },
        mq1165: {
          raw: "screen and (max-width: 1165px)",
        },
        mq1160: {
          raw: "screen and (max-width: 1160px)",
        },
        mq1155: {
          raw: "screen and (max-width: 1155px)",
        },
        mq1150: {
          raw: "screen and (max-width: 1150px)",
        },
        mq1145: {
          raw: "screen and (max-width: 1145px)",
        },
        mq1140: {
          raw: "screen and (max-width: 1140px)",
        },
        mq1135: {
          raw: "screen and (max-width: 1135px)",
        },
        mq1130: {
          raw: "screen and (max-width: 1130px)",
        },
        mq1125: {
          raw: "screen and (max-width: 1125px)",
        },
        mq1120: {
          raw: "screen and (max-width: 1120px)",
        },
        mq1115: {
          raw: "screen and (max-width: 1115px)",
        },
        mq1110: {
          raw: "screen and (max-width: 1110px)",
        },
        mq1105: {
          raw: "screen and (max-width: 1105px)",
        },
        mq1100: {
          raw: "screen and (max-width: 1100px)",
        },
        mq1095: {
          raw: "screen and (max-width: 1095px)",
        },
        mq1090: {
          raw: "screen and (max-width: 1090px)",
        },
        mq1085: {
          raw: "screen and (max-width: 1085px)",
        },
        mq1080: {
          raw: "screen and (max-width: 1080px)",
        },
        mq1075: {
          raw: "screen and (max-width: 1075px)",
        },
        mq1070: {
          raw: "screen and (max-width: 1070px)",
        },
        mq1065: {
          raw: "screen and (max-width: 1065px)",
        },
        mq1060: {
          raw: "screen and (max-width: 1060px)",
        },
        mq1055: {
          raw: "screen and (max-width: 1055px)",
        },
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq1045: {
          raw: "screen and (max-width: 1045px)",
        },
        mq1040: {
          raw: "screen and (max-width: 1040px)",
        },
        mq1035: {
          raw: "screen and (max-width: 1035px)",
        },
        mq1030: {
          raw: "screen and (max-width: 1030px)",
        },
        mq1025: {
          raw: "screen and (max-width: 1025px)",
        },
        mq1020: {
          raw: "screen and (max-width: 1020px)",
        },
        mq1015: {
          raw: "screen and (max-width: 1015px)",
        },
        mq1010: {
          raw: "screen and (max-width: 1010px)",
        },
        mq1005: {
          raw: "screen and (max-width: 1005px)",
        },
        mq1000: {
          raw: "screen and (max-width: 1000px)",
        },
        mq995: {
          raw: "screen and (max-width: 995px)",
        },
        mq990: {
          raw: "screen and (max-width: 990px)",
        },
        mq985: {
          raw: "screen and (max-width: 985px)",
        },
        mq980: {
          raw: "screen and (max-width: 980px)",
        },
        mq975: {
          raw: "screen and (max-width: 975px)",
        },
        mq970: {
          raw: "screen and (max-width: 970px)",
        },
        mq965: {
          raw: "screen and (max-width: 965px)",
        },
        mq960: {
          raw: "screen and (max-width: 960px)",
        },
        mq955: {
          raw: "screen and (max-width: 955px)",
        },
        mq950: {
          raw: "screen and (max-width: 950px)",
        },
        mq945: {
          raw: "screen and (max-width: 945px)",
        },
        mq940: {
          raw: "screen and (max-width: 940px)",
        },
        mq935: {
          raw: "screen and (max-width: 935px)",
        },
        mq930: {
          raw: "screen and (max-width: 930px)",
        },
        mq925: {
          raw: "screen and (max-width: 925px)",
        },
        mq920: {
          raw: "screen and (max-width: 920px)",
        },
        mq915: {
          raw: "screen and (max-width: 915px)",
        },
        mq910: {
          raw: "screen and (max-width: 910px)",
        },
        mq905: {
          raw: "screen and (max-width: 905px)",
        },
        mq900: {
          raw: "screen and (max-width: 900px)",
        },
        mq895: {
          raw: "screen and (max-width: 895px)",
        },
        mq890: {
          raw: "screen and (max-width: 890px)",
        },
        mq885: {
          raw: "screen and (max-width: 885px)",
        },
        mq880: {
          raw: "screen and (max-width: 880px)",
        },
        mq875: {
          raw: "screen and (max-width: 875px)",
        },
        mq870: {
          raw: "screen and (max-width: 870px)",
        },
        mq865: {
          raw: "screen and (max-width: 865px)",
        },
        mq860: {
          raw: "screen and (max-width: 860px)",
        },
        mq855: {
          raw: "screen and (max-width: 855px)",
        },
        mq850: {
          raw: "screen and (max-width: 850px)",
        },
        mq845: {
          raw: "screen and (max-width: 845px)",
        },
        mq840: {
          raw: "screen and (max-width: 840px)",
        },
        mq835: {
          raw: "screen and (max-width: 835px)",
        },
        mq830: {
          raw: "screen and (max-width: 830px)",
        },
        mq825: {
          raw: "screen and (max-width: 825px)",
        },
        mq820: {
          raw: "screen and (max-width: 820px)",
        },
        mq815: {
          raw: "screen and (max-width: 815px)",
        },
        mq810: {
          raw: "screen and (max-width: 810px)",
        },
        mq805: {
          raw: "screen and (max-width: 805px)",
        },
        mq800: {
          raw: "screen and (max-width: 800px)",
        },
        mq795: {
          raw: "screen and (max-width: 795px)",
        },
        mq790: {
          raw: "screen and (max-width: 790px)",
        },
        mq785: {
          raw: "screen and (max-width: 785px)",
        },
        mq780: {
          raw: "screen and (max-width: 780px)",
        },
        mq775: {
          raw: "screen and (max-width: 775px)",
        },
        mq770: {
          raw: "screen and (max-width: 770px)",
        },
        mq765: {
          raw: "screen and (max-width: 765px)",
        },
        mq760: {
          raw: "screen and (max-width: 760px)",
        },
        mq755: {
          raw: "screen and (max-width: 755px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq745: {
          raw: "screen and (max-width: 745px)",
        },
        mq740: {
          raw: "screen and (max-width: 740px)",
        },
        mq735: {
          raw: "screen and (max-width: 735px)",
        },
        mq730: {
          raw: "screen and (max-width: 730px)",
        },
        mq725: {
          raw: "screen and (max-width: 725px)",
        },
        mq720: {
          raw: "screen and (max-width: 720px)",
        },
        mq715: {
          raw: "screen and (max-width: 715px)",
        },
        mq710: {
          raw: "screen and (max-width: 710px)",
        },
        mq705: {
          raw: "screen and (max-width: 705px)",
        },
        mq700: {
          raw: "screen and (max-width: 700px)",
        },
        mq695: {
          raw: "screen and (max-width: 695px)",
        },
        mq690: {
          raw: "screen and (max-width: 690px)",
        },
        mq685: {
          raw: "screen and (max-width: 685px)",
        },
        mq680: {
          raw: "screen and (max-width: 680px)",
        },
        mq675: {
          raw: "screen and (max-width: 675px)",
        },
        mq670: {
          raw: "screen and (max-width: 670px)",
        },
        mq665: {
          raw: "screen and (max-width: 665px)",
        },
        mq660: {
          raw: "screen and (max-width: 660px)",
        },
        mq655: {
          raw: "screen and (max-width: 655px)",
        },
        mq650: {
          raw: "screen and (max-width: 650px)",
        },
        mq645: {
          raw: "screen and (max-width: 645px)",
        },
        mq640: {
          raw: "screen and (max-width: 640px)",
        },
        mq635: {
          raw: "screen and (max-width: 635px)",
        },
        mq630: {
          raw: "screen and (max-width: 630px)",
        },
        mq625: {
          raw: "screen and (max-width: 625px)",
        },
        mq620: {
          raw: "screen and (max-width: 620px)",
        },
        mq615: {
          raw: "screen and (max-width: 615px)",
        },
        mq610: {
          raw: "screen and (max-width: 610px)",
        },
        mq605: {
          raw: "screen and (max-width: 605px)",
        },
        mq600: {
          raw: "screen and (max-width: 600px)",
        },
        mq595: {
          raw: "screen and (max-width: 595px)",
        },
        mq590: {
          raw: "screen and (max-width: 590px)",
        },
        mq585: {
          raw: "screen and (max-width: 585px)",
        },
        mq580: {
          raw: "screen and (max-width: 580px)",
        },
        mq575: {
          raw: "screen and (max-width: 575px)",
        },
        mq570: {
          raw: "screen and (max-width: 570px)",
        },
        mq565: {
          raw: "screen and (max-width: 565px)",
        },
        mq560: {
          raw: "screen and (max-width: 560px)",
        },
        mq555: {
          raw: "screen and (max-width: 555px)",
        },
        mq550: {
          raw: "screen and (max-width: 550px)",
        },
        mq545: {
          raw: "screen and (max-width: 545px)",
        },
        mq540: {
          raw: "screen and (max-width: 540px)",
        },
        mq535: {
          raw: "screen and (max-width: 535px)",
        },
        mq530: {
          raw: "screen and (max-width: 530px)",
        },
        mq525: {
          raw: "screen and (max-width: 525px)",
        },
        mq520: {
          raw: "screen and (max-width: 520px)",
        },
        mq515: {
          raw: "screen and (max-width: 515px)",
        },
        mq510: {
          raw: "screen and (max-width: 510px)",
        },
        mq505: {
          raw: "screen and (max-width: 505px)",
        },
        mq500: {
          raw: "screen and (max-width: 500px)",
        },
        mq495: {
          raw: "screen and (max-width: 495px)",
        },
        mq490: {
          raw: "screen and (max-width: 490px)",
        },
        mq485: {
          raw: "screen and (max-width: 485px)",
        },
        mq480: {
          raw: "screen and (max-width: 480px)",
        },
        mq475: {
          raw: "screen and (max-width: 475px)",
        },
        mq470: {
          raw: "screen and (max-width: 470px)",
        },
        mq465: {
          raw: "screen and (max-width: 465px)",
        },
        mq460: {
          raw: "screen and (max-width: 460px)",
        },
        mq455: {
          raw: "screen and (max-width: 455px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
        mq445: {
          raw: "screen and (max-width: 445px)",
        },
        mq440: {
          raw: "screen and (max-width: 440px)",
        },
        mq435: {
          raw: "screen and (max-width: 435px)",
        },
        mq430: {
          raw: "screen and (max-width: 430px)",
        },
        mq425: {
          raw: "screen and (max-width: 425px)",
        },
        mq420: {
          raw: "screen and (max-width: 420px)",
        },
        mq415: {
          raw: "screen and (max-width: 415px)",
        },
        mq410: {
          raw: "screen and (max-width: 410px)",
        },
        mq405: {
          raw: "screen and (max-width: 405px)",
        },
        mq400: {
          raw: "screen and (max-width: 400px)",
        },
        mq395: {
          raw: "screen and (max-width: 395px)",
        },
      },
      fontFamily: {
        "1440-h1": "var(--1440-h1-font-family)",
        "1440-h2": "var(--1440-h2-font-family)",
        "1440-h3": "var(--1440-h3-font-family)",
        "1440-l1": "var(--1440-l1-font-family)",
        "1440-l2": "var(--1440-l2-font-family)",
        "1440-t1": "var(--1440-t1-font-family)",
        "1440-t2": "var(--1440-t2-font-family)",
        "1440-t3": "var(--1440-t3-font-family)",
      },
    },
  },
  plugins: [],
};