// phil welsby - 24 july 2022
// practice using objects


// Main Object
const music = {

    // Albert Lee Object
    'albert lee': {
        albums: {
            'road runner': {
                year: 2006,
                members: {
                    vocals: ['Albert Lee', ' Steve Fishell'],
                    bass: 'Bob Glaub', 
                    guitar: 'Albert Lee', 
                    drums: 'Don Heffington',
                    },
                    tracks: {
                    1: '(I\'m A) Road Runner',
                    2: 'I\'ll Stop Loving You',
                    3: 'Rock of Your Love',
                    4: 'Julie\'s House',
                    5: "Didn't Start Livin'",
                    6: 'The Moon is a Harsh Mistress',
                    7: "Livin' it Down",
                    8: 'Working on Love',
                    9: 'Payola Blues',
                    10: 'Dimming of the Day'
                }
            },
        }
    },

    // Alice in Chains Object
    'alice in chains': {
        albums: {
            'the essential alice in chains': {
                year: 2006,
                members: {
                    vocals: 'Lanye Staley',
                    guitar: 'Jerry Cantrell',
                    bass: ['Mike Starr', ' Mike Inez'],
                    drums: 'Sean Kinney',
                },
                tracks: {
                    /*DISK 1*/
                    1: 'We Die Young  (from Facelift)',
                    2: 'Man in the Box (from Facelift)',
                    3: 'Sea of Sorrow (from Facelift)',
                    4: 'Love, Hate, Love (from Facelift)',
                    5: 'Am I Inside (from Sap)',
                    6: 'Brother (from Sap (Alternate Mix without Ann Wilson\'s backing vocals))',
                    7: 'Got Me Wrong (From Sap)',
                    8: 'Right Turn (from Sap)',
                    9: 'Rain When I Die (from Kinney, Dirt)',
                    10: 'Them Bones (from Dirt)',
                    11: 'Angry Chair (from Dirt)',
                    12: 'Dam That River (from Dirt)',
                    13: 'Dirt (from Dirt)',
                    14: 'God Smack (from Dirt)',
                    15: 'Hate to Feel (from Dirt)',
                    16: 'Rooster (from Dirt)',
                    /*DISK 2*/
                    17: 'No Excuses (from Jar of Flies)',
                    18: 'I Stay Away (from Jar of Flies)',
                    19: 'What the Hell have I (remix from Music Bank)',
                    20: 'A Little Bitter (remix from Music Bank)',
                    21: 'Grind (from Alice in Chains)',
                    22: 'Heaven Beside You (from Alice in Chains)',
                    23: 'Again (from Alice in Chains)',
                    24: 'Over Now (live acoustic version from Unplugged)',
                    25: 'Nutshell (live acoustic version from unplugged)',
                    26: 'Get Born Again (from Nothing Safe: Best of the Box)',
                    27: 'Died (from Music Bank)',
                    28: 'Would? (from (dirt)'
                }
            },
        },
    },

    // Bad Company Object
    'bad company': {
        albums: {
            'bad company': {
                year: 1974,
                members: {
                    vocals: 'Paul Rogers',
                    bass: 'Boz Burrell',
                    guitar: 'Mick Ralphs',
                    drums: 'Simon Kirke'

                },
                tracks: {
                    1: "Can't Get Enough",
                    2: "Rock Steady",
                    3: "Ready For Love",
                    4: "Don't Let Me Down",
                    5: "Bad Company",
                    6: "The Way I Choose",
                    7: "Movin On",
                    8: "Seagull"
                }
            },
            'straight shooter': {
                year: 1974,
                members: {
                    vocals: 'Paul Rogers',
                    bass: 'Boz Burrell',
                    guitar: 'Mick Ralphs',
                    drums: 'Simon Kirke'

                },
                tracks: {
                    1: "Good Lovin Gone Bad",
                    2: "Feel Like Makin Love",
                    3: "Weep No More",
                    4: "Shooting Star",
                    5: "Deal With The Preacher",
                    6: "Wild Fire Woman",
                    7: "Anna",
                    8: "Call On Me"
                }
            },
        },
    },

    //Deep Purple Object
    'deep purple': {
        albums: {
            'come taste the band': {
                year: 1975,
                members: {
                    vocals: 'David Coverdale',
                    bass: 'Glenn Hughes', 
                    guitar: 'Tommy Bolin', 
                    keyboard: 'Jon Lord',
                    drums: 'Ian Paice',
                    },
                    tracks: {
                    1: 'Comin\' Home',
                    2: 'Lady Luck',
                    3: 'Gettin\' Tighter',
                    4: 'Dealer',
                    5: "I Need Love",
                    6: 'Drifter',
                    7: "Love Child",
                    8: 'This Time Around / Owed to G',
                    9: 'You Keep on Moving'
                }
            },
            'made in japan': {
                year: 1972,
                members: {
                    vocals: 'Ian Gillan',
                    bass: 'Roger Glover', 
                    guitar: 'Ritchie Blackmoore', 
                    keyboard: 'Jon Lord',
                    drums: 'Ian Paice',
                    },
                    tracks: {
                    1: 'Highway Star',
                    2: 'Child in Time',
                    3: 'Smoke on the Water',
                    4: 'The Mule',
                    5: "Strange Kind of Woman",
                    6: 'Lazy',
                    7: "Space Truckin"          
                }
            },
            'made in europe': {
                year: 1975,
                members: {
                    vocals: 'David Coverdale',
                    bass: 'Glenn Hughes', 
                    guitar: 'Ritchie Blackmoore', 
                    keyboard: 'Jon Lord',
                    drums: 'Ian Paice',
                    },
                    tracks: {
                    1: 'Burn',
                    2: 'Mistreated',
                    3: 'Lady Double Dealer',
                    4: 'You Fool No One',
                    5: "Stormbringer"
                }
            },
        }
    },

    // Dire Staits Object
    'dire straits': {
        albums: {
            'making movies': {
                year: 1980,
                members: {
                    vocals: 'Mark Knopfler',
                    bass: 'John Illsey', 
                    guitar: 'Mark Knopfler', 
                    keyboard: 'Roy Bittan',
                    drums: 'Pick Withers',
                    },
                    tracks: {
                    1: 'Tunnel of Love',
                    2: 'Romeo and Juliet',
                    3: 'Skateaway',
                    4: 'Expresso Love',
                    5: "Hand in Hand",
                    6: 'Solid Rock',
                    7: "Les Boys"
                }
            },
            'brothers in arms': {
                year: 1985,
                members: {
                    vocals: 'Mark Knopfler',
                    bass: 'John Illsley', 
                    guitar: 'Mark Knopfler', 
                    keyboard: 'Guy Fletcher',
                    drums: 'Omar Hakim',
                    },
                    tracks: {
                    1: 'So Far Away',
                    2: 'Money for Nothing',
                    3: 'Walk of Life',
                    4: 'Your Latest Trick',
                    5: "Why Worry",
                    6: 'Ride Across the River',
                    7: "The man's too Strong",
                    8: "One World",
                    9: "Brothers in Arms"
                }
            },

        }
    },

    // Dr Dre Object

    // Eagle Object
    eagles: {
        albums: {
            eagles: {
                year: 1972,
                members: {
                    vocals: ['Glen Frey ', ' Don Henley', ' Bernie Leadon', ' Randy Meisner'],
                    bass: 'Randy Meisner', 
                    guitar: ['Glen Frey', ' Bernie Leadon'],
                    banjo: 'Bernie Leadon',
                    drums: 'Don Henley',
                },
                tracks: {
                    1: 'Take it Easy',
                    2: 'Whitchy Woman',
                    3: 'Chug all Night',
                    4: 'Most of us are Sad',
                    5: 'Nightingale',
                    6: 'Train Leaves here this Morning',
                    7: 'Take the Devil',
                    8: 'Earlybird',
                    9: 'Peaceful Easy Feeling',
                    10: 'Tryin'
                }
            },
            desperado: {
                year: 1973,
                members: {
                    vocals: ['Glen Frey ', ' Don Henley', ' Bernie Leadon', ' Randy Meisner'],
                    bass: 'Randy Meisner', 
                    guitar: ['Glen Frey, ', 'Bernie Leadon'], 
                    drums: 'Don Henley',
                    },
                    tracks: {
                    1: 'Doolin-Dalton',
                    2: 'Twenty-One',
                    3: 'Out of Control',
                    4: 'Tequila Sunrise',
                    5: 'Desperado',
                    6: 'Certain Kind of Fool',
                    7: 'Doolin-Dalton (Instrumental)',
                    8: 'Outlaw Man',
                    9: 'Saturday Night',
                    10: 'Bitter Creek',
                    11: 'Doolin-Dalton / Desperado (Reprise)'
                }
            },
            'on the border': {
                year: 1974,
                members: {
                    vocals: ['Glen Frey ', ' Don Henley', ' Bernie Leadon', ' Randy Meisner', 'Don Felder'],
                    bass: 'Randy Meisner', 
                    guitar: ['Glen Frey, ', 'Bernie Leadon'],
                    'late arrival': 'Don Felder - lead guitar on “Already Gone” and slide guitar on “Good Day in Hell” (credited as "late arrival")' ,
                    drums: 'Don Henley',
                    },
                tracks: {
                1: 'Already Gone',
                2: 'You Never Cry Like A Lover',
                3: 'Midnight Flyer',
                4: 'My Man',
                5: 'On The Border',
                6: 'James Dean',
                7: 'Ol\' 55',
                8: 'Is it True?',
                9: 'Good Day in Hell',
                10: 'Best of my Love'
                }
            },
            'one of these nights': {
                year: 1975,
                members: {
                    vocals: ['Glen Frey ', ' Don Henley', ' Bernie Leadon', ' Randy Meisner', ' Don Felder'],
                    bass: 'Randy Meisner', 
                    guitar: ['Glen Frey, ', ' Bernie Leadon', ' Don Felder'],
                    drums: 'Don Henley',
                },
                tracks: {
                1: 'One of These Nights',
                2: 'Too Many Hands',
                3: 'Hollwood Waltz',
                4: 'Journey of the Sorcerer',
                5: 'Lyin Eyes',
                6: 'Take it to the Limit',
                7: 'Visions',
                8: 'After the Thrill is Gone',
                9: 'I Wish you Peace'
                }
            },   
            'hotel california': {
                year: 1974,
                members: {
                    vocals: ['Glen Frey ', ' Don Henley', ' Bernie Leadon', ' Randy Meisner', 'Don Felder'],
                    bass: 'Randy Meisner', 
                    guitar: ['Glen Frey, ', ' Don Felder', ' Joe Walsh'],
                    drums: 'Don Henley',
                },
                tracks: {
                1: 'Hotel California',
                2: 'New Kid in Town',
                3: 'Life in the Fast Lane',
                4: 'Wasted Time',
                5: 'Wasted Time (Reprise)',
                6: 'Victim of Love',
                7: 'Pretty Maids all in a Row',
                8: 'Try and Love Again',
                9: 'The Last Resort'
                }
            },         
        },                          
    },
            

    // Led Zeppelin Object
    'led zeppelin': {
        albums: {
            'led zeppelin 1': {
                year: 1969,
                members: {
                    vocals: 'Robert Plant',
                    bass: 'John Paul Jones', 
                    guitar: 'Jimmy Page', 
                    drums: 'John Bonham'
                },
                tracks: {
                1:	"Good Times Bad Times",
                2:	"Babe I'm Gonna Leave You",
                3:	"You Shook Me",
                4:	"Dazed and Confused",
                5:	"Your Time Is Gonna Come",
                6:	"Black Mountain Side",
                7:	"Communication Breakdown",
                8:	"I Can't Quit You Baby",
                9:	"How Many More Times"
                }
            },
            'led zeppelin 2': {
                year: 1969,
                members: {
                    vocals: 'Robert Plant',
                    bass: 'John Paul Jones', 
                    guitar: 'Jimmy Page', 
                    drums: 'John Bonham'
                },
                tracks: {
                1:	"Whole Lotta Love",	
                2:	"What Is and What Should Never Be",
                3:	"The Lemon Song",	
                4:	"Thank You",
                5:	"Heartbreaker",
                6:	"Living Loving Maid (She's Just a Woman)",
                7:	"Ramble On",
                8:	"Moby Dick",
                9:	"Bring It On Home"
                }
            },
            'led zeppelin 3': {
                year: 1970,
                members: {
                    vocals: 'Robert Plant',
                    bass: 'John Paul Jones', 
                    guitar: 'Jimmy Page', 
                    drums: 'John Bonham'
                },
                tracks: {
                1:	"Immigrant Song",
                2:	"Friends",
                3:	"Celebration Day",
                4:	"Since I've Been Loning You",
                5:	"Out on the Tiles",
                6:	"Gallows Pole",
                7:	"Tangeine",
                8:	"That's the Way",
                9:	"Bron-Y-Aur-Stomp",
                10: "Hats Off to (Roy) Harper"
                }
            },
            'led zeppelin 4': {
                year: 1971,
                members: {
                    vocals: 'Robert Plant',
                    bass: 'John Paul Jones', 
                    guitar: 'Jimmy Page', 
                    drums: 'John Bonham'
                },
                tracks: {
                1:	"Black Dog",
                2:	"Rock and Roll",
                3:	"The Battle of Evermore",
                4:	"Stairway to Heaven",
                5:	"Misty Mountain Hop",
                6:	"Four Sticks",
                7:	"Going to California",
                8:	"When the Levee Breaks"
                }
            },
            'houses of the holy': {
                year: 1973,
                members: {
                    vocals: 'Robert Plant',
                    bass: 'John Paul Jones', 
                    guitar: 'Jimmy Page', 
                    drums: 'John Bonham'
                },
                tracks: {
                1:	"The Song Remains the Same",
                2:	"The rain Song",
                3:	"Over the Hills and Far Away",
                4:	"The Crunge",
                5:	"Dancing Days",
                6:	"D'yer Mak'er",
                7:	"No Quarter",
                8:	"The Ocean"
                }
            },
            'physical graffiti': {
                year: 1975,
                members: {
                    vocals: 'Robert Plant',
                    bass: 'John Paul Jones', 
                    guitar: 'Jimmy Page', 
                    drums: 'John Bonham'
                },
                tracks: {
                1:	"Custard Pie",
                2:	"The Rover",
                3:	"In My Time of Dying",
                4:	"Houses of the Holy",
                5:	"Trampled Under Foot",
                6:	"Kashmir",
                7:	"In the Light",
                8:	"Bron-Yr-Aur",
                9: "Down by the Seaside",
                10: "Ten Years Gone",
                11: "Night Flight",
                12: "The Wanton Song",
                13: "Boogie with Stu",
                14: "Black Country Woman",
                15: "Sick Again"
                }
            },
            'presence': {
                year: 1976,
                members: {
                    vocals: 'Robert Plant',
                    bass: 'John Paul Jones', 
                    guitar: 'Jimmy Page', 
                    drums: 'John Bonham'
                },
                tracks: {
                1:	"Achillies Last Stand",
                2:	"For Your Life",
                3:	"Royal Orleans",
                4:	"Nobody's Fault but Mine",
                5:	"Candy Store Rock",
                6:	"Hots On for Nowhere",
                7:	"Tea for One"
                }
            },
            'in through the out door': {
                year: 1979,
                members: {
                    vocals: 'Robert Plant',
                    bass: 'John Paul Jones', 
                    guitar: 'Jimmy Page', 
                    drums: 'John Bonham'
                },
                tracks: {
                1:	"In the Evening",
                2:	"South Bound Saurez",
                3:	"Fool in the Rain",
                4:	"Hot Dog",
                5:	"Carouselambra",
                6:	"All My Love",
                7:	"I'm Gonna Crawl"
                }
            },

        },
    },

    // Thin Lizzy Object
    'thin lizzy': {
        albums: {
            nightlife: {
                year: 1974,
                members: {
                    vocals: 'Philip Lynott',
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'Brian Robertson'], 
                    drums: 'Brian Downey'
                },
                tracks: {
                1: "She Knows",
                2:	"Night Life",
                3:	"It's Only Money",
                4:	"Still in Love with You",
                5:	"Frankie Carroll",
                6:	"Showdown",
                7:	"Banshee",
                8:	"Philomena",
                9:	"Sha La La",
                10:	"Dear Heart"
                }
            },
            fighting: {
                year: 1975,
                members: {
                    vocals: 'Philip Lynott',
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'Brian Robertson'], 
                    drums: 'Brian Downey'
                },
                    tracks: {
                    1:	"Rosalie",
                    2:	"For Those Who Love to Live",
                    3:	"Suicide",
                    4:	"Wild One",
                    5:	"Fighting My Way Back",
                    6:	"King's Vengeance",
                    7:	"Spirit Slips Away",
                    8:	"Silver Dollar",
                    9:	"Freedom Song",
                    10:	"Ballad of a Hard Man"
                }
            },
            jailbreak: {
                year: 1976,
                members: {
                    vocals: 'Philip Lynott',
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'Brian Robertson'], 
                    drums: 'Brian Downey'
                },
                tracks: {
                    1:	"Jailbreak",
                    2:	"Angel from the Coast",
                    3:	"Running Back",
                    4:	"Romeo and the Lonely Girl",
                    5:	"Warriors",
                    6:	"The Boys Are Back in Town",
                    7:	"Fight or Fall",
                    8:	"Cowboy Song",
                    9:	"Emerald"
                }
            },
            'johnny the fox': {
                year: 1976,
                members: {
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'Brian Robertson'], 
                    drums: 'Brian Downey'
                },
                tracks: {
                1:	"Johnny",
                2:	"Rocky",
                3:	"Borderline",
                4:	"Don't Believe a Word",
                5:	"Fools Gold",
                6:	"Johnny the Fox Meets Jimmy the Weed",
                7:	"Old Flame",
                8:	"Massacre",
                9:	"Sweet Marie",
                10:	"Boogie Woogie Dance"
            }
            },
            'bad reputation': {
                year: 1977,
                members: {
                    vocals: 'Philip Lynott',
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'Brian Robertson'], 
                    drums: 'Brian Downey'
                },
                tracks: {
                1:	"Soldier of Fortune",
                2:	"Bad Reputation",
                3:	"Opium Trail",
                4:	"Southbound",
                5:	"Dancing in the Moonlight (It's Caught Me in Its Spotlight)",
                6:	"Killer Without a Cause",
                7:	"Downtown Sundown",
                8:	"That Woman's Gonna Break Your Heart",
                9:	"Dear Lord"
                }
            },
            'black rose': {
                year: 1979,
                members: {
                    vocals: 'Philip Lynott',
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'Gary Moore'], 
                    drums: 'Brian Downey'
                },
                tracks: {
                1:	"Do Anything You Want To",
                2:	"Toughest Street in Town",
                3:	"S & M",
                4:	"Waiting for an Alibi",
                5:	"Sarah",
                6:	"Got to Give It Up",
                7:	"Get Out of Here",
                8:	"With Love",
                9:	"Róisín Dubh (Black Rose): A Rock Legend" 
                }
            },
            chinatown: {
                year: 1980,
                members: {
                    vocals: 'Philip Lynott',
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'Snowy White'], 
                    drums: 'Brian Downey'
                },
                tracks: {
                1:	"We Will Be Strong",
                2:	"Chinatown",
                3:	"Sweetheart",
                4:	"Sugar Blues",
                5:	"Killer on the Loose",
                6:	"Having a Good Time",
                7:	"Genocide (The Killing of the Buffalo)",
                8:	"Didn't I",
                9:	"Hey You"
                }
            },
            renegade: {
                year: 1981,
                members: {
                    vocals: 'Philip Lynott',
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'Snowy White'], 
                    drums: 'Brian Downey',
                    keyboard: 'Darren Wharton'
                },
                tracks: {
                1:	"Angel of Death",
                2:	"Renegade",
                3:	"The Pressure Will Blow",
                4:	"Leave This Town",
                5:	"Hollywood (Down on Your Luck)",
                6:	"No One Told Him",
                7:	"Fats",
                8:	"Mexican Blood",
                9:	"It's Getting Dangerous"
                }
            },
            'thunder and lightening': {
                year: 1983,
                members: {
                    vocals: 'Philip Lynott',
                    bass: 'Philip Lynott', 
                    guitar: ['Scott Gorham', 'John Sykes'], 
                    drums: 'Brian Downey',
                    keyboard: 'Darren Wharton'
                },
                tracks: {
                1:	"Thunder and Lightning",
                2:	"This Is the One",
                3:	"The Sun Goes Down",
                4:	"The Holy War",
                5:	"Cold Sweat",
                6:	"Someday She Is Going to Hit Back",
                7:	"Baby Please Don't Go",
                8:	"Bad Habits",
                9:	"Heart Attack"
                }
            }
        }
    },

        // function to get information on an Album
        data(bandName, album) {
            let key = ''
            // clear all data from screen
            for (let i = 0; i < 33; i++) {
                key = 'demo' + i
                document.getElementById(key).innerHTML = ''
            }
            try {
                // clear error message if there is one
                document.getElementById('error').innerHTML = ''
                // set variables
                let firstLine = `${album.toLocaleUpperCase()}  - Year ${this[bandName].albums[album].year}`
                bandName = bandName.toLowerCase();
                album = album.toLowerCase();
                let data = ''
                result = [firstLine] //NOTE: firstline is added to array here
                let key = ''

                // loop through object and append results to array named results
                for (i in this[bandName].albums[album].members) {
                    data = `${i.toLocaleUpperCase()} - ${this[bandName].albums[album].members[i]}`
                    result.push(data)
                }

                // loop through object and append results to array named results
                for (i in this[bandName].albums[album].tracks) {
                    data = ` ${i} ${this[bandName].albums[album].tracks[i]}`
                    result.push(data)
                }

                // itterate through result array and render to DOM
                for (i=0; i < result.length; i++) {
                    key = 'demo'+i;
                    document.getElementById(key).innerHTML = `${result[i]}`
                }   
                } catch (error) {
                    document.getElementById('error').innerHTML = `ERROR!!!!`
                    document.getElementById('demo0').innerHTML = `Check "Band Name" and "Album Name"`
                    document.getElementById('demo1').innerHTML = `Name of band = (${bandName}) ?`
                    document.getElementById('demo2').innerHTML = `Name of album = (${album}) ?`
                }
            },

            // albums made by a band function
            whichAlbums(bandName) {
                try {
                    // clear error message if there is one
                    document.getElementById('error').innerHTML = ''
                    // clear all data from screen
                    for (let i = 0; i < 33; i++) {
                    key = 'demo' + i
                    document.getElementById(key).innerHTML = ''
                    }
                    results = [`Albums`]
                    data = this[bandName].albums
                    for (i in data) {
                        results.push(i)
                    }
                    for (i=0; i < results.length; i++) {
                        key = 'demo'+i;
                        document.getElementById(key).innerHTML = `${results[i]}`
                    } 
                } catch (error) {
                    document.getElementById('error').innerHTML = `ERROR!!!!`
                    document.getElementById('demo0').innerHTML = `Check "Band Name"`
                    document.getElementById('demo1').innerHTML = `Name of band = (${bandName}) ?`



                }
            }
        };

// function myFunction takes input from form assigns to variables bandName and album, then invokes data function
const myFunction = () => {
    try {
        let contents = []
        let data = document.getElementById("frm1");
        for (i = 0; i < data.length ;i++) {
            contents.push(data.elements[i].value)
        }
        bandName = contents[0].toLowerCase();
        album = contents[1].toLowerCase();
        music.data(bandName, album)
        document.getElementById("frm1").reset();
    } catch (error) {
        document.getElementById('error').innerHTML = `ERROR!!!! in myFunction ${error}`
    }
    }

    // function to print out albums a band made
    const albums =() => {
        try {
            let contents = []
            let data = document.getElementById("frm2");
            for (i = 0; i < data.length ;i++) {
                contents.push(data.elements[i].value)
            }
            bandName = contents[0].toLowerCase();
            //invoke whichAlbums function
            music.whichAlbums(bandName);
            document.getElementById("frm2").reset();
        } catch (error) {
            document.getElementById('error').innerHTML = `ERROR!!!! albums function ${error}`

        }
    }







