export type ClientGroup = {
  title: string;
  subtitle?: string;
  items: { name: string; note?: string }[];
};

export const clientGroups: ClientGroup[] = [
  {
    title: "Active Distribution Operators",
    subtitle: "Currently running on Infinium platforms",
    items: [
      { name: "Aras EDAŞ", note: "Erzurum, Erzincan, Ağrı, Ardahan, Kars, Bayburt, Iğdır" },
      { name: "Meram EDAŞ", note: "Konya, Karaman, Aksaray, Niğde, Nevşehir, Kırşehir" },
      { name: "Van Gölü EDAŞ", note: "Van, Bitlis, Muş, Hakkâri" },
      { name: "Trakya EDAŞ", note: "Edirne, Kırklareli, Tekirdağ" },
      { name: "Çoruh EDAŞ", note: "Trabzon, Rize, Artvin, Gümüşhane" },
      { name: "Fırat EDAŞ", note: "Elazığ, Malatya, Tunceli, Bingöl" },
      { name: "Dicle EDAŞ", note: "Diyarbakır, Şanlıurfa, Mardin, Batman, Siirt, Şırnak" },
    ],
  },
  {
    title: "Public Sector & Regulators",
    items: [
      { name: "TEDAŞ", note: "Türkiye Elektrik Dağıtım A.Ş." },
      { name: "EPDK", note: "Energy Market Regulatory Authority — R&D" },
      { name: "EPİAŞ", note: "Turkish energy market operator" },
      { name: "MEB", note: "Ministry of National Education — MebEn" },
      { name: "TÜBİTAK", note: "Battery storage R&D project" },
    ],
  },
  {
    title: "Industrial & Campus Customers",
    items: [
      { name: "İkitelli OIZ", note: "Organised Industrial Zone, Istanbul" },
      { name: "Organised Industrial Zones", note: "Multiple regions" },
      { name: "Shopping Malls", note: "Retail energy management" },
      { name: "Setur Marina", note: "Marina energy operations" },
      { name: "GASKİ", note: "Gaziantep Water Utility" },
    ],
  },
  {
    title: "Past Distribution Customers",
    items: [
      { name: "Boğaziçi EDAŞ", note: "Istanbul" },
      { name: "AYEDAŞ", note: "Istanbul" },
      { name: "GDZ EDAŞ", note: "Izmir" },
      { name: "ADM EDAŞ", note: "Denizli" },
    ],
  },
  {
    title: "International",
    items: [
      { name: "Denmark", note: "Asset Management with Utiligize" },
      { name: "Africa", note: "Asset Management deployments" },
      { name: "Iraq", note: "GridBox applications" },
    ],
  },
];

export const headlineStats = [
  { value: "15+", label: "Years on the grid", body: "GridBox in production since 2011." },
  { value: "7", label: "Active DSOs", body: "Privatised Turkish electricity operators." },
  { value: "60+", label: "Export countries", body: "Through power-electronics partner Enel Enerji." },
  { value: "3", label: "Continents", body: "Türkiye, Europe, Africa and the Middle East." },
];
