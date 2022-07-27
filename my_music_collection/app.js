// phil welsby - 23 july 2022
// attempt to create a music database of my music collection

/* array of arrays containing titles*/
const myMusic = [
  albertLee = ['ALBERT LEE', 'Road Runner',''],
  badCompany = ['BAD COMPANY', 'Straight Shooter', 'Bad Company', ''],
  aliceCooper = ['ALICE COOPER', 'Early Days', 'Love it to Death', 'School\'s out', 'Killer', 'Welcome to my Nightmare', ''],
  allAboutEve = ['ALL ABOUT EVE', 'All About Eve', ''],
  backmanTurnerOverdrive = ['BACKMAN TURNER OVERDRIVE', 'Not Fragile', ''],
  davidBowie = ['DAVID BOWIE', 'Ziggy Stardust', ''],
  davidLeeRoth = ['DAVID LEE ROTH', 'Skyscraper', ''],
  deepPurple = ['DEEP PURPLE', 'Come Taste The Band', 'Made In Japan', 'Made In Europe', ''],
  direStraits = ['DIRE STRAITS', 'Making Movies', 'Brothers In Arms', ''],
  donMcLean = ['DON McClean', 'American Pie'],
  drDre = ['Dr Dre', 'Chronic', '2001', ''],
  eagles = ['EAGLES', 'Eagles', 'Desperado', 'On the Border', 'One of These Nights', 'Hotel California', 'The Long Run', 'Long Road out of Eden',''],
  feeder = ['FEEDER', 'Echo Park', 'Polythene', ''],
  fleetwoodMac = ['FLEETWOOD MAC', 'Rumours', 'Tango in the Night', ''],
  foreigner = ['FOREIGNER', 'Foreigner', 'Double Vision', ''],
  free = ['FREE', 'Fire and Water'],
  funLovinCriminals = ['FUN LOVIN CRIMINALS', 'Come Find Yourself', ''],
  garyMoore = ['GARY MOORE', 'Victims of the Future', 'Back on the Streets', 'Still Got the Blues', ''],
  gunsAndRoses = ['GUNS AND ROSES', 'Appitite for Destruction', ''],
  heart = ['HEART', 'Dreamboat Annie', ''],
  jacksonBrown = ['Jackson Brown', 'Saturate Before using', ''],
  japan = ['JAPAN', 'Qiuet Life', ''],
  jethrowTull = ['JETHROW TULL', 'Aqualung', ''],
  jimmyHendrix = ['JIMMY HENDRIX', 'Jimi Hendrix', 'Midnight Lightning', ''],
  johnnyWinter = ['JOHNNY WINTER', 'Still Alive and Well', ''],
  journey = ['JOURNEY', 'Escape', ''],
  kateBush = ['KATE BUSH', 'The Kick Inside', ''],
  ledZeppelin =  ['LED ZEPPELIN', 'Led Zeppelin 1', 'Led Zeppelin 2', 'Led Zeppelin 3', 'Four Symbols', 'Houses of the Holy', 'Physical Graphitti', 'The Song Remains The Same', 'Presence', 'Coda', 'In Through The Out Door', ''],
  lionelRichie = ['LIONEL RICHIE', 'Can\'t Slow Down', ''],
  lynyrdSkynyrd = ['LYNYRD SKYNYRD', 'One More from the Road', ''],
  machineHead = ['MACHINE HEAD', 'Machine Head', ''],
  marillion = ['MARILLION', 'The Theiving Magpie', ''],
  marvinGay = ['MARVIN GAY', 'What\'s Going ON', ''],
  nazareth = ['NAZARETH', 'Razamannaz', ''],
  neilYoung = ['NEIL YOUNG', 'Various', ''],
  nickDrake = ['NICK DRAKE', 'Pink Moon', ''],
  nirvana = ['NIRVANA', 'Nevermind', ''],
  opeth = ['OPETH', 'Damnation', 'Ghost Reveries', 'Still Life', ''],
  pantera = ['PANTERA', 'Cowboys From Hell', 'Vulgar Display of Power', 'Far Beyond Driven', ''],
  perfectCircle = ['PERFECT CIRCLE', 'Eat the Elephant', ''],
  peterFrampton = ['PETER FRAMPTON', 'Frampton Comes Alive', ''],
  philLynott = ['PHIL LYNOTT', 'Solo in Soho', ''],
  pinkFloyd = ['PINK FLOYD', 'Dark Side of the Moon', 'Wish You Were Here', 'Animals', 'The Wall', 'Final Cut', ''],
  queen = ['QUEEN', 'Night at the Opera', ''],
  rainbow = ['RAINBOW', 'Down to Earth', ''],
  redHotChilliPeppers = ['RED HOT CHILLI PEPPERS', 'Stadium Arcadium', ''],
  reoSpeedwagon = ['REO SPEEDWAGON', 'Hi-Fidelity', ''],
  robertPlant = ['ROBERT PLANT', 'The Principle of Moments', 'Pictures at Eleven', ''],
  rollinsBand = ['ROLLINS BAND', 'Weight', ''],
  rush = ['RUSH', 'A Farewell to Kings', ''],
  santana = ['SANTANA', 'Inner Secrets', ''],
  sexPistols = ['SEX PISTOLS', 'Nerver Mind the Bollocks', ''],
  simpleMinds = ['SIMPLE MINDS', 'Sparkle in the Rain', ''],
  spinDoctors = ['SPIN DOCTORS', 'Pocket full of Kryptonite', ''],
  steveMillerBand = ['STEVE MILLER BAND', 'Fly Like an Eagle', ''],
  talkTalk = ['TALT TALK', 'The Party\'s Over', 'Colour of Spring', ''],
  tenYearsAfter = ['TEN YEARS AFTER', 'Space in Time', 'Cricklewood Green', 'Watt', 'Ten Years After Recorded Live', ''],
  theBeatles = ['THE BEATLES', 'The White Album', 'Sgt Peppers Lonely Hearts Club', ''],
  thePigeonDetectives = ['THE PIGEON DETECTIVES', 'Emergency', ''],
  theSmiths = ['THE SMITHS', 'Hat Full of Hollow', 'Meat is Murder', 'Strangeways here I Come', 'The Queen is Dead', 'The Smiths', ''],
  thinLizzy = ['THIN LIZZY', 'Fighting', 'Nightlife', 'Jailbreak', 'Johnny the Fox', 'Bad Reputation', 'Black Rose', 'Live and Dangerous', 'Chinatown', 'Renegade', 'Still Dangerous', ''],
  thomasDolby = ['THOMAS DOLBY', 'Aliens ate my Buick', ''],
  tool = ['TOOL', '10,000 Days', 'Enima', 'Fear Inoculum', 'Lateralus', 'Opiate', 'Undertow', ''],
  vanHalen = ['VAN HALEN', '1984', ''],
  wishboneAsh = ['WISHBONE ASH', 'Front Page News', ''],
  yes = ['YES', 'Yesterdays', 'Going for the One', ''],
]

// function to itterate through nested arrays
const listAlbums = () => {
  for (i=0; i < myMusic.length; i++) {
    for (j=0; j < myMusic[i].length; j++) {
      const value = myMusic[i][j];
      const para = document.createElement('p');
      para.innerHTML = value;
      document.getElementById('myDIV').appendChild(para);
    }
  }
// create a link to home at the bottom of the page
//const home = '<button onclick="document.location=(\"../index.html\")">Home</button>'

const home =  '<a href="../index.html" id="home-link">Click to go home</a>';
const para = document.createElement('p');
para.innerHTML = home;
document.getElementById('myDIV').appendChild(para);
}

// function to itterate through nested arrays
/* const listAlbums = () => {
for (let i = 0; i < myMusic.length; i++) {
  const nestedArray = myMusic[i];
  for (j = 0; j < nestedArray.length; j++) {
    const value = myMusic[i][j];
    const para = document.createElement('p');
    para.innerHTML = value;
    document.getElementById('myDIV').appendChild(para);
  }
}
// create a link to home at the bottom of the page
const home =  '<a href="../index.html" id="home-link">Home</a>';
const para = document.createElement('p');
para.innerHTML = home;
document.getElementById('myDIV').appendChild(para);
}; */








