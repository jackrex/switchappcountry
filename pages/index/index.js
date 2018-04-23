//index.js
//获取应用实例
const app = getApp()

var countries = {

  t_1: 'The United States and Canada',

  us: 'America',
  ca: 'Canada',

  t_2: 'Europe',

  al: 'Albania',
  at: 'Austria',
  by: 'Belarus',
  be: 'Belgium',
  bg: 'Bulgaria',
  hr: 'Croatia',
  cy: 'Cyprus',
  cz: 'Czech RPC',
  dk: 'Denmark',
  ee: 'Estonia',
  fi: 'Finland',
  fr: 'France',
  de: 'Germany',
  gr: 'Greece',
  hu: 'Hungary',
  is: 'Iceland',
  ie: 'Ireland',
  it: 'Italy',
  lv: 'Latvia',
  lt: 'Lithuania',
  lu: 'Luxembourg',
  mk: 'Macedonia',
  mt: 'Malta',
  md: 'Moldova',
  nl: 'Netherlands',
  no: 'Norway',
  pl: 'Poland',
  pt: 'Portugal',
  ro: 'Romania',
  ru: 'Russia',
  sk: 'Slovakia',
  si: 'Slovenia',
  es: 'Spain,España',
  se: 'Sweden',
  ch: 'Switzerland',
  tr: 'Turkey',
  ua: 'Ukraine',
  gb: 'England',


  t_3: 'Africa, the Middle East, and India',

  dz: 'Algeria',
  ao: 'Angola',
  am: 'Armenia',
  az: 'Azerbaijan',
  bh: 'Bahrain',
  bj: 'Benin',
  bw: 'Botswana',
  bf: 'Burkina-Faso',
  cv: 'Cape Verde',
  td: 'Chad',
  cg: 'Congo',
  eg: 'Egypt',
  gm: 'Gambia',
  gh: 'Ghana',
  gw: 'Guinea Bissau',
  in: 'India',
  il: 'Israel',
  jo: 'Jordan',
  ke: 'Kenya',
  kw: 'Kuwait',


  t_4: 'Asia Pacific',

  t_5: 'Latin America and the Caribean',

  ae: 'United Arab Emirates',
  ag: 'Antigua and Barbuda',
  ai: 'Anguilla',


  ar: 'Argentina',

  au: 'Australia',

  bb: 'Barbados',


  bm: 'Bermuda',
  bn: 'Brunei Darussalam',
  bo: 'Bolivia',
  br: 'Brazil',
  bs: 'Bahamas',
  bt: 'Bhutan',


  bz: 'Belize',


  cl: 'Chile',
  cn: 'China',
  co: 'Colombia',
  cr: 'Costa Rica',

  dm: 'Dominica',
  do: 'Dominican RPC',

  ec: 'Ecuador',



  fj: 'Fiji',
  fm: 'Micronesia',


  gd: 'Grenada',



  gt: 'Guatemala',

  gy: 'Guyana',
  hk: 'Hong Kong',
  hn: 'Honduras',


  id: 'Indonesia',


  jm: 'Jamaica',

  jp: 'Japan',

  kg: 'Krygyzstan',
  kh: 'Cambodia',
  kn: 'Nevis',
  kr: 'South Korea',

  ky: 'Cayman Islands',
  kz: 'Kazakhstan',
  la: 'Laos',
  lb: 'Lebanon',
  lc: 'Saint Lucia',
  lk: 'Sri Lanka',
  lr: 'Liberia',


  mg: 'Madagascar',

  ml: 'Mali',
  mn: 'Mongolia',
  mo: 'Macau',
  mr: 'Mauritania',
  ms: 'Montserrat',

  mu: 'Mauritius',
  mw: 'Malawi',
  mx: 'Mexico',
  my: 'Malaysia',
  mz: 'Mozambique',
  na: 'Namibia',
  ne: 'Niger',
  ng: 'Nigeria',
  ni: 'Nicaragua',

  np: 'Nepal',

  nz: 'New Zealand',
  om: 'Oman',
  pa: 'Panama',
  pe: 'Peru',
  pg: 'Papua New Guinea',
  ph: 'Philippines',
  pk: 'Pakistan',


  pw: 'Palau',
  py: 'Paraguay',
  qa: 'Qatar',


  sa: 'Saudi Arabia',
  sb: 'Soloman Islands',
  sc: 'Seychelles',

  sg: 'Singapore',

  sl: 'Sierra Leone',
  sn: 'Senegal',
  sr: 'Suriname',
  st: 'Sao Tome e Principe',
  sv: 'El Salvador',
  sz: 'Swaziland',
  tc: 'Caicos',

  th: 'Thailand',
  tj: 'Tajikistan',
  tm: 'Turkmenistan',
  tn: 'Tunisia',

  tt: 'Trinidad',
  tw: 'Taiwan',
  tz: 'Tanzania',

  ug: 'Uganda',
  uy: 'Uruguay',
  uz: 'Uzbekistan',
  vc: 'Vincent',
  ve: 'Venezuela',
  vg: 'Virgin',
  vn: 'Vietnam',
  ye: 'Yemen',
  za: 'South Africa',
  zw: 'Zimbabwe'
}

Page({
  data: {
    countryCodes: [],
    countryRes: []
  },
  onLoad: function () {

    // Generate icons for each country
    var keys = Object.keys(countries);
    for (var i = 0; i < keys.length; i++) {
      var countryCode = keys[i];
      if (countryCode.startsWith('t_'))
         continue;
      var countryName = countries[countryCode];
      this.data.countryCodes.push(countryCode)
      console.log(countryCode + '----' +countryName)
      var countryObj = {title: countryName, src: '/images/' + countryCode + '.png', id: 'countryid' + i}
      this.data.countryRes.push(countryObj)
    }

    this.setData({
      countryCodes: this.data.countryCodes,
      countryRes: this.data.countryRes
    })

  },

  countryClick: function(event) {
    console.log(event)
    
  }


})
