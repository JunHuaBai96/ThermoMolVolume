// materials_database.js
// 内建默认材料数据库（初始集合：Mg, Al, Cu, Ni, Zn）
// NOTE: these default parameters are approximate literature-based values for quick estimates.
// For publication-grade calculations, replace with experiment/DFT+phonon/QHA values.
const MATERIALS_DB = {
    "Mg (hcp/fcc)": {
      "element":"Mg",
      "structure":["hcp","fcc (meta)"],
      "V0_cm3mol":13.96,   // experimental hcp molar volume ~13.96 cm3/mol
      "alpha_L_micro":26,  // line expansion micro/K (approx hcp Mg at RT)
      "thetaD":318,
      "gamma":1.5,
      "B_GPa":35.1,
      "refs":["literature: hcp-Mg thermo data; use QHA for fcc"]
    },
    "Al (fcc)": {
      "element":"Al",
      "structure":["fcc"],
      "V0_cm3mol":10.00,   // approx experimental (Al ~10 cm3/mol)
      "alpha_L_micro":23.1,
      "thetaD":428,
      "gamma":2.4,
      "B_GPa":70.0,
      "refs":["common literature values; verify for specific alloy/phase"]
    },
    "Cu (fcc)": {
      "element":"Cu",
      "structure":["fcc"],
      "V0_cm3mol":7.11,
      "alpha_L_micro":16.5,
      "thetaD":343,
      "gamma":2.0,
      "B_GPa":137.8,
      "refs":["standard references; experimental values"]
    },
    "Ni (fcc)": {
      "element":"Ni",
      "structure":["fcc"],
      "V0_cm3mol":6.59,
      "alpha_L_micro":13.3,
      "thetaD":450,
      "gamma":1.7,
      "B_GPa":180.0,
      "refs":["typical experimental estimates"]
    },
    "Zn (hcp/fcc)": {
      "element":"Zn",
      "structure":["hcp","fcc (meta)"],
      "V0_cm3mol":9.20,
      "alpha_L_micro":30.0,
      "thetaD":270,
      "gamma":1.2,
      "B_GPa":60.0,
      "refs":["approximate; hcp Zn values"]
    }
  };
  