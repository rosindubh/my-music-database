const chinatown = {
    year: 1980,
    members: {
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
    },
        listing() {
		    console.log(`Year ${this.year}`);
		    for (i in this.members) {
		        console.log(`${i} ${this.members[i]}`);
            }
            for (i in this.tracks) {
            console.log(`${i} ${this.tracks[i]}`);
		}
    }
}

chinatown.listing();
//chinatown.listTracks();
