/** @type {import('pollen-css').Config} */
export default (pollen) => ({
  output: { css: "./src/styles/pollen.css", json: "./uno/pollen.json" },
  modules: {
    font: {
      display: "'MontserratVariable', sans-serif",
      sans: "'InterVariable', sans-serif",
      mono: "'Fira Mono', monospace",
    },
    color: {
      "gray-0": "#F8FAFB",
      "gray-1": "#F2F4F6",
      "gray-2": "#EBEDEF",
      "gray-3": "#E0E4E5",
      "gray-4": "#D1D6D8",
      "gray-5": "#B1B6B9",
      "gray-6": "#979B9D",
      "gray-7": "#7E8282",
      "gray-8": "#666968",
      "gray-9": "#50514F",
      "gray-10": "#3A3A37",
      "gray-11": "#252521",
      "gray-12": "#121210",
      "red-0": "#FFF5F5",
      "red-1": "#FFE3E3",
      "red-2": "#FFC9C9",
      "red-3": "#FFA8A8",
      "red-4": "#FF8787",
      "red-5": "#FF6B6B",
      "red-6": "#FA5252",
      "red-7": "#F03E3E",
      "red-8": "#E03131",
      "red-9": "#C92A2A",
      "red-10": "#B02525",
      "red-11": "#962020",
      "red-12": "#7D1A1A",
      "pink-0": "#FFF0F6",
      "pink-1": "#FFDEEB",
      "pink-2": "#FCC2D7",
      "pink-3": "#FAA2C1",
      "pink-4": "#F783AC",
      "pink-5": "#F06595",
      "pink-6": "#E64980",
      "pink-7": "#D6336C",
      "pink-8": "#C2255C",
      "pink-9": "#A61E4D",
      "pink-10": "#8C1941",
      "pink-11": "#731536",
      "pink-12": "#59102A",
      "purple-0": "#F8F0FC",
      "purple-1": "#F3D9FA",
      "purple-2": "#EEBEFA",
      "purple-3": "#E599F7",
      "purple-4": "#DA77F2",
      "purple-5": "#CC5DE8",
      "purple-6": "#BE4BDB",
      "purple-7": "#AE3EC9",
      "purple-8": "#9C36B5",
      "purple-9": "#862E9C",
      "purple-10": "#702682",
      "purple-11": "#5A1E69",
      "purple-12": "#44174F",
      "violet-0": "#F3F0FF",
      "violet-1": "#E5DBFF",
      "violet-2": "#D0BFFF",
      "violet-3": "#B197FC",
      "violet-4": "#9775FA",
      "violet-5": "#845EF7",
      "violet-6": "#7950F2",
      "violet-7": "#7048E8",
      "violet-8": "#6741D9",
      "violet-9": "#5F3DC4",
      "violet-10": "#5235AB",
      "violet-11": "#462D91",
      "violet-12": "#3A2578",
      "indigo-0": "#EDF2FF",
      "indigo-1": "#DBE4FF",
      "indigo-2": "#BAC8FF",
      "indigo-3": "#91A7FF",
      "indigo-4": "#748FFC",
      "indigo-5": "#5C7CFA",
      "indigo-6": "#4C6EF5",
      "indigo-7": "#4263EB",
      "indigo-8": "#3B5BDB",
      "indigo-9": "#364FC7",
      "indigo-10": "#2F44AD",
      "indigo-11": "#283A94",
      "indigo-12": "#21307A",
      "blue-0": "#E7F5FF",
      "blue-1": "#D0EBFF",
      "blue-2": "#A5D8FF",
      "blue-3": "#74C0FC",
      "blue-4": "#4DABF7",
      "blue-5": "#339AF0",
      "blue-6": "#228BE6",
      "blue-7": "#1C7ED6",
      "blue-8": "#1971C2",
      "blue-9": "#1864AB",
      "blue-10": "#145591",
      "blue-11": "#114678",
      "blue-12": "#0D375E",
      "cyan-0": "#E3FAFC",
      "cyan-1": "#C5F6FA",
      "cyan-2": "#99E9F2",
      "cyan-3": "#66D9E8",
      "cyan-4": "#3BC9DB",
      "cyan-5": "#22B8CF",
      "cyan-6": "#15AABF",
      "cyan-7": "#1098AD",
      "cyan-8": "#0C8599",
      "cyan-9": "#0B7285",
      "cyan-10": "#095C6B",
      "cyan-11": "#074652",
      "cyan-12": "#053038",
      "teal-0": "#E6FCF5",
      "teal-1": "#C3FAE8",
      "teal-2": "#96F2D7",
      "teal-3": "#63E6BE",
      "teal-4": "#38D9A9",
      "teal-5": "#20C997",
      "teal-6": "#12B886",
      "teal-7": "#0CA678",
      "teal-8": "#099268",
      "teal-9": "#087F5B",
      "teal-10": "#066649",
      "teal-11": "#054D37",
      "teal-12": "#033325",
      "green-0": "#EBFBEE",
      "green-1": "#D3F9D8",
      "green-2": "#B2F2BB",
      "green-3": "#8CE99A",
      "green-4": "#69DB7C",
      "green-5": "#51CF66",
      "green-6": "#40C057",
      "green-7": "#37B24D",
      "green-8": "#2F9E44",
      "green-9": "#2B8A3E",
      "green-10": "#237032",
      "green-11": "#1B5727",
      "green-12": "#133D1B",
      "lime-0": "#F4FCE3",
      "lime-1": "#E9FAC8",
      "lime-2": "#D8F5A2",
      "lime-3": "#C0EB75",
      "lime-4": "#A9E34B",
      "lime-5": "#94D82D",
      "lime-6": "#82C91E",
      "lime-7": "#74B816",
      "lime-8": "#66A80F",
      "lime-9": "#5C940D",
      "lime-10": "#4C7A0B",
      "lime-11": "#3C6109",
      "lime-12": "#2C4706",
      "yellow-0": "#FFF9DB",
      "yellow-1": "#FFF3BF",
      "yellow-2": "#FFEC99",
      "yellow-3": "#FFE066",
      "yellow-4": "#FFD43B",
      "yellow-5": "#FCC419",
      "yellow-6": "#FAB005",
      "yellow-7": "#F59F00",
      "yellow-8": "#F08C00",
      "yellow-9": "#E67700",
      "yellow-10": "#B35C00",
      "yellow-11": "#804200",
      "yellow-12": "#663500",
      "orange-0": "#FFF4E6",
      "orange-1": "#FFE8CC",
      "orange-2": "#FFD8A8",
      "orange-3": "#FFC078",
      "orange-4": "#FFA94D",
      "orange-5": "#FF922B",
      "orange-6": "#FD7E14",
      "orange-7": "#F76707",
      "orange-8": "#E8590C",
      "orange-9": "#D9480F",
      "orange-10": "#BF400D",
      "orange-11": "#99330B",
      "orange-12": "#802B09",
      "choco-0": "#FFF8DC",
      "choco-1": "#FCE1BC",
      "choco-2": "#F7CA9E",
      "choco-3": "#F1B280",
      "choco-4": "#E99B62",
      "choco-5": "#DF8545",
      "choco-6": "#D46E25",
      "choco-7": "#BD5F1B",
      "choco-8": "#A45117",
      "choco-9": "#8A4513",
      "choco-10": "#703A13",
      "choco-11": "#572F12",
      "choco-12": "#3D210D",
      "brown-0": "#FAF4EB",
      "brown-1": "#EDE0D1",
      "brown-2": "#E0CAB7",
      "brown-3": "#D3B79E",
      "brown-4": "#C5A285",
      "brown-5": "#B78F6D",
      "brown-6": "#A87C56",
      "brown-7": "#956B47",
      "brown-8": "#825B3A",
      "brown-9": "#6F4B2D",
      "brown-10": "#5E3A21",
      "brown-11": "#4E2B15",
      "brown-12": "#422412",
      "sand-0": "#F8FAFB",
      "sand-1": "#E6E4DC",
      "sand-2": "#D5CFBD",
      "sand-3": "#C2B9A0",
      "sand-4": "#AEA58C",
      "sand-5": "#9A9178",
      "sand-6": "#867C65",
      "sand-7": "#736A53",
      "sand-8": "#5F5746",
      "sand-9": "#4B4639",
      "sand-10": "#38352D",
      "sand-11": "#252521",
      "sand-12": "#121210",
      "camo-0": "#F9FBE7",
      "camo-1": "#E8ED9C",
      "camo-2": "#D2DF4E",
      "camo-3": "#C2CE34",
      "camo-4": "#B5BB2E",
      "camo-5": "#A7A827",
      "camo-6": "#999621",
      "camo-7": "#8C851C",
      "camo-8": "#7E7416",
      "camo-9": "#6D6414",
      "camo-10": "#5D5411",
      "camo-11": "#4D460E",
      "camo-12": "#36300A",
      "jungle-0": "#ECFEB0",
      "jungle-1": "#DEF39A",
      "jungle-2": "#D0E884",
      "jungle-3": "#C2DD6E",
      "jungle-4": "#B5D15B",
      "jungle-5": "#A8C648",
      "jungle-6": "#9BBB36",
      "jungle-7": "#8FB024",
      "jungle-8": "#84A513",
      "jungle-9": "#7A9908",
      "jungle-10": "#658006",
      "jungle-11": "#516605",
      "jungle-12": "#3D4D04",
    },
    size: {
      ...pollen.size,
      "2px": "2px",
      auto: "auto",
      "screen-h": "100vh",
      "screen-w": "100vw",
    },
  },
});

// TODO: Watcher
