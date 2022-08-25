const appConfig = {
  eventsURL: "https://vatboard.estassinos.com/getevents.php",
  metarURL: "https://vatboard.estassinos.com/getmetar.php?icao=",
  atcURL: "https://vatboard.estassinos.com/getdata.php?type=ATC",
  pilotsURL: "https://vatboard.estassinos.com/getdata.php?type=PILOT",
  cidURL: "https://vatboard.estassinos.com/getdata.php?type=CID",
  infoURL: "https://vatboard.estassinos.com/getdata.php?type=INFO",
  serversURL: "https://vatboard.estassinos.com/getdata.php?type=SERVERS",
  callsignURL: "https://vatboard.estassinos.com/getdata.php?type=CALLSIGN&q=",
  clientsURL: "https://vatboard.estassinos.com/getdata.php?type=ALL",
  apiURL: "https://vatboard.estassinos.com",
  status: {
    PILOT: "flight",
    ATC: "settings_input_antenna",
  },
  metarCategory: {
    VFR: "green",
    MVFR: "blue",
    IFR: "red",
    LIFR: "purple",
  },
  refreshInterval: 15 * 60 * 1000,
  vatsimDivisions: {
    BRZ: "Brazil (VATBRZ)",
    CAM: "Central America",
    CAN: "Canada",
    CAR: "Caribbean",
    EUD: "Europe (except UK)",
    GBR: "United Kingdom",
    IL: "Israel (VATIL)",
    JPN: "Japan",
    KOR: "Korea",
    MCO: "Mexico",
    MENA: "Middle East and North Africa",
    NZ: "New Zealand (VATNZ)",
    PAC: "Australia (VATPAC)",
    PRC: "People's Republic of China",
    ROC: "Republic of China (Taiwan)",
    RUS: "Russia",
    SAM: "South America",
    SEA: "Southeast Asia (VATSEA)",
    SSA: "Sub-Sahara Africa",
    USA: "United States",
    WA: "West Asia",
  },
};

export default appConfig;
