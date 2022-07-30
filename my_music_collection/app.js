// phil welsby - 23 july 2022
// attempt to create a music database of my music collection

// function to list all artists
const listArtists = () => {
  for (i = 0; i < myMusic.length; i++) {
    const value = myMusic[i][0];
    const para = document.createElement("p");
    para.innerHTML = value;
    document.getElementById("myDIV2").appendChild(para);
  }
  //add line break after each artist's output
  const value = "<br>";
  const para = document.createElement("p");
  para.innerHTML = value;
  document.getElementById("myDIV2").appendChild(para);
};

// function to list all albums
const listAlbums = () => {
  for (i = 0; i < myMusic.length; i++) {
    for (j = 1; j < myMusic[i].length; j++) {
      const subValue = myMusic[i][j];
      const para = document.createElement("p");
      para.innerHTML = subValue.toLocaleUpperCase();
      document.getElementById("myDIV3").appendChild(para);
    }
    //add line break after each artist's output
    const value = "<br>";
    const para = document.createElement("p");
    para.innerHTML = value;
    document.getElementById("myDIV3").appendChild(para);
  }
  // create a link to home at the bottom of the page
  const home = '<a href="#heading">top of page</a>';
  const para = document.createElement("a");
  para.innerHTML = home;
  document.getElementById("myDIV3").appendChild(para);
};

// function to list all artists and albums
const listArtistsAndAlbums = () => {
  for (i = 0; i < myMusic.length; i++) {
    for (j = 0; j < myMusic[i].length; j++) {
      const value = myMusic[i][j];
      const para = document.createElement("p");
      para.innerHTML = value.toLocaleUpperCase();
      document.getElementById("myDIV").appendChild(para);
    }
    //add line break after each artist's output
    const value = "<br>";
    const para = document.createElement("p");
    para.innerHTML = value;
    document.getElementById("myDIV").appendChild(para);
  }
  // create a link to home at the bottom of the page
  const home = '<a href="#heading">top of page</a>';
  const para = document.createElement("a");
  para.innerHTML = home;
  document.getElementById("myDIV").appendChild(para);
};
/* array of arrays containing titles*/
const myMusic = [
  ['ALBERT LEE', 'Road Runner'],
  ['BAD COMPANY', 'Straight Shooter', 'Bad Company'],
  ['ALICE COOPER', 'Early Days', 'Love it to Death', 'School\'s out', 'Killer', 'Welcome to my Nightmare'],
  ['ALL ABOUT EVE', 'All About Eve'],
  ['BACKMAN TURNER OVERDRIVE', 'Not Fragile'],
  ['DAVID BOWIE', 'Ziggy Stardust'],
  ['DAVID LEE ROTH', 'Skyscraper'],
  ['DEEP PURPLE', 'Come Taste The Band', 'Made In Japan', 'Made In Europe'],
  ['DIRE STRAITS', 'Making Movies', 'Brothers In Arms'],
  ['DON McClean', 'American Pie'],
  ['Dr DRE', 'Chronic', '2001'],
  ['EAGLES', 'Eagles', 'Desperado', 'On the Border', 'One of These Nights', 'Hotel California', 'The Long Run', 'Long Road out of Eden'],
  ['FEEDER', 'Echo Park', 'Polythene'],
  ['FLEETWOOD MAC', 'Rumours', 'Tango in the Night'],
  ['FOREIGNER', 'Foreigner', 'Double Vision'],
  ['FREE', 'Fire and Water'],
  ['FUN LOVIN CRIMINALS', 'Come Find Yourself'],
  ['GARY MOORE', 'Victims of the Future', 'Back on the Streets', 'Still Got the Blues'],
  ['G-FORCE', 'G FORCE'],
  ['GUNS AND ROSES', 'Appitite for Destruction'],
  ['HEART', 'Dreamboat Annie'],
  ['JACKSON BROWN', 'Saturate Before using'],
  ['JAPAN', 'Qiuet Life'],
  ['JETHROW TULL', 'Aqualung'],
  ['JIMMY HENDRIX', 'Jimi Hendrix', 'Midnight Lightning'],
  ['JOHNNY WINTER', 'Still Alive and Well'],
  ['JOURNEY', 'Escape'],
  ['KATE BUSH', 'The Kick Inside'],
  ['LED ZEPPELIN', 'Led Zeppelin 1', 'Led Zeppelin 2', 'Led Zeppelin 3', 'Four Symbols', 'Houses of the Holy', 'Physical Graphitti', 'The Song Remains The Same', 'Presence', 'Coda', 'In Through The Out Door'],
  ['LIONEL RICHIE', 'Can\'t Slow Down'],
  ['LYNYRD SKYNYRD', 'One More from the Road'],
  ['MACHINE HEAD', 'Machine Head'],
  ['MARILLION', 'The Theiving Magpie'],
  ['MARVIN GAY', 'What\'s Going ON'],
  ['NAZARETH', 'Razamannaz'],
  ['NEIL YOUNG', 'Various'],
  ['NICK DRAKE', 'Pink Moon'],
  ['NIRVANA', 'Nevermind'],
  ['OPETH', 'Damnation', 'Ghost Reveries', 'Still Life'],
  ['PANTERA', 'Cowboys From Hell', 'Vulgar Display of Power', 'Far Beyond Driven'],
  ['PERFECT CIRCLE', 'Eat the Elephant'],
  ['PETER FRAMPTON', 'Frampton Comes Alive'],
  ['PHIL LYNOTT', 'Solo in Soho'],
  ['PINK FLOYD', 'Dark Side of the Moon', 'Wish You Were Here', 'Animals', 'The Wall', 'Final Cut'],
  ['QUEEN', 'Night at the Opera'],
  ['RAINBOW', 'Down to Earth'],
  ['RED HOT CHILLI PEPPERS', 'Stadium Arcadium'],
  ['REO SPEEDWAGON', 'Hi-Fidelity'],
  ['ROBERT PLANT', 'The Principle of Moments', 'Pictures at Eleven'],
  ['ROLLINS BAND', 'Weight'],
  ['RUSH', 'A Farewell to Kings'],
  ['SANTANA', 'Inner Secrets'],
  ['SEX PISTOLS', 'Nerver Mind the Bollocks'],
  ['SIMPLE MINDS', 'Sparkle in the Rain'],
  ['SPIN DOCTORS', 'Pocket full of Kryptonite'],
  ['STEVE MILLER BAND', 'Fly Like an Eagle'],
  ['TALT TALK', 'The Party\'s Over', 'Colour of Spring'],
  ['TEN YEARS AFTER', 'Space in Time', 'Cricklewood Green', 'Watt', 'Ten Years After Recorded Live'],
  ['THE BEATLES', 'The White Album', 'Sgt Peppers Lonely Hearts Club'],
  ['THE PIGEON DETECTIVES', 'Emergency'],
  ['THE SMITHS', 'Hat Full of Hollow', 'Meat is Murder', 'Strangeways here I Come', 'The Queen is Dead', 'The Smiths'],
  ['THIN LIZZY', 'Fighting', 'Nightlife', 'Jailbreak', 'Johnny the Fox', 'Bad Reputation', 'Black Rose', 'Live and Dangerous', 'Chinatown', 'Renegade', 'Still Dangerous'],
  ['THOMAS DOLBY', 'Aliens ate my Buick'],
  ['TOOL', '10,000 Days', 'Enima', 'Fear Inoculum', 'Lateralus', 'Opiate', 'Undertow'],
  ['VAN HALEN', '1984'],
  ['WISHBONE ASH', 'Front Page News'],
  ['YES', 'Yesterdays', 'Going for the One'],
];