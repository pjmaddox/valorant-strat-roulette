const allStrats = [
    {
        "name": "Bait and Switch",
        "description": "Have two people buy Marshalls and three people buy shotguns. Work in teams, use the Marshal players to bait enemies into charging, where your shotgun counterpart is waiting around the corner. See how many times the enemy team falls for it.",
        "offense": false,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Warm Welcome",
        "description": "Buy 5 Odins and stack up on one door. This one isn't complicated.",
        "offense": false,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Perfect Information",
        "description": "Inform the enemy team of your team's plan. If you decide to switch your strategy mid-round, be sure to let them know.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Honor the Fallen",
        "description": "If a teammate dies, ask the enemy team to stop so you can give them a proper burial. Have your team move to your fallen teammate and lay your pistols down gently.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "It's a shooting game, not a fighting game",
        "description": "Tell the enemy team to knife fight mid. Round the corner with your knives out, but then go back and take out your guns instead.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "sun's out, guns out",
        "description": "you can only fire guns when inside smoke.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "I'll do it myself",
        "description": "you get one magazine of your chosen gun, once that is depleted, you must toss your weapon and use knife only",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "The Finnish Defence",
        "description": "the whole team has only one guy with a sniper and nobody else is allowed to use guns.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Violence is not the answer",
        "description": "Any time you encounter resistance on the way to any spike site, you must change course and try another way. Only after you plant the spike are you allowed to use violence, when it is absolutely necessary.",
        "offense": true,
        "defense": false,
        "specificMaps": []
    },
    {
        "name": "The defense of Stalingrad",
        "description": "Only half of your team may buy/use guns. The others have to stand behind and pick up the guns of the fallen.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Sunblock",
        "description": "You must use the maximum amount of smoke effects possible to blanket one of the sites as you approach. Bonus points if you can plant the spike without seeing the sky on your way there.",
        "offense": true,
        "defense": false,
        "specificMaps": []
    },
    {
        "name": "I'm not an ambi-turner",
        "description": "entire team chooses one 'wasd' key, for the round, your team may not use that key.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Versatile Arsenal",
        "description": "Your team must buy/use one primary gun from each of the five categories. (SMGs, Shotguns, Rifles, Sniper, Heavy)",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Wholesome Moment",
        "description": "Compliment your teammates on every good thing they do.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Spread The Love",
        "description": "Compliment the enemy team on every good thing they do.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Captain Picard",
        "description": "The bottom player on the leaderboard is the captain. Whenever you want to use a teleporter, you must first ask the captain for permission. You cannot use the teleporter until permission is granted.",
        "offense": true,
        "defense": true,
        "specificMaps": ["Bind"]
    },
    {
        "name": "Broadcast Booth",
        "description": "When you die, join the broadcast booth and provide some exciting commentary for the round.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Controlled Effort",
        "description": "Everyone buys the Stinger or Bulldog. You can only shoot using the ADS burst fire.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Zipline",
        "description": "The entire team must use the zipline into A to get into the spike site. You may not peek the main entry, and you must ride the zipline until you're at least above the site.",
        "offense": true,
        "defense": false,
        "specificMaps": ["Icebox"]
    },
    {
        "name": "I have the high ground",
        "description": "Gain the tactical advantage by only fighting from higher ground whenever possible, or even ground if absolutely necessary. Never fight from lower ground.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Bounty Hunters",
        "description": "You must kill the enemy team in order of highest to lowest on the leaderboard.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "They wouldn't do it a third time",
        "description": "Before rounding a corner into the enemy, be sure to flash the corner three times for mind games.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Scenic Route",
        "description": "Follow this route: Mid > Zip Zap > A Heaven > Defender Spawn > B Heaven > B Site",
        "offense": true,
        "defense": false,
        "specificMaps": ["Split"]
    },
    {
        "name": "Tour Guide",
        "description": "The third player on the leaderboard is the team tour guide. Lead the team around the map and detail what they're seeing. If you encounter any enemies, treat the encounter as an unexpected tour experience.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Piracy",
        "description": "Buy the shorty or frenzy and play those corners. Try to steal and use as many of the enemy's weapons as possible. Bonus points if you talk like a pirate the entire round.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Pressed For Time",
        "description": "Wait in spawn until nearly the last second, then rush a spike site with just enough time to plant.",
        "offense": true,
        "defense": false,
        "specificMaps": []
    },
    {
        "name": "Quickest Reactions in the West",
        "description": "Set your mouse sensitivity to the highest level. React quicker than you've ever reacted before.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Who Needs Spikes?",
        "description": "Your team may not plant the spike.",
        "offense": true,
        "defense": false,
        "specificMaps": []
    },
    {
        "name": "Antiquated Battle Tactics",
        "description": "The whole team buys Marshalls and the top player on the leaderboard is the squad commander. Move as a group, and only fire shots when the commander says 'Fire!'.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "By our powers combined!",
        "description": "Starting with bottom frag and moving up, each player buys armor if they can afford it and one pistol. No duplicates.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Variety is the spice of life",
        "description": "Everyone must buy different guns",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "21 gun salute",
        "description": "Bottom frag is now El Generalissimo. Do as they say. Everyone else must purchase a Marshal. In the case of the general's death, everyone must fire 3 rounds into the air before they may fire at enemies again.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Behind enemy lines",
        "description": "You must make it to the attacker's spawn area before you may fire at enemies with your gun.",
        "offense": false,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Baahubali's Trident Formation",
        "description": "Send two members down mid, one strong player down the left flank and two remaining players down the right flank.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "They can't hear me if I can't hear me",
        "description": "You may only communicate with your team while firing",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Hold the line",
        "description": "Choose a point. Until the spike is planted, the entire team cannot leave the point.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "I've got your back!",
        "description": "The top 4 fraggers must split into pairs, doing their best to walk back-to-back.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Surprise party!",
        "description": "Choose a small room or corridor. Everyone posts at different angles and stays until either one team is dead, or the spike is planted.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Marshall may I?",
        "description": "The entire team buys marshalls. After the first person fires, the team may move. When another marshall shot goes off, everyone must stop moving. Continue alternating with each Marshall shot.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "I'm bringing you in",
        "description": "You may only buy the marshall, bucky, or sheriff this round. You may choose to challenge the enemy team to a shootout mid.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Nothing personnel, kid.",
        "description": "Get at least one person behind enemy lines and deliver a killing blow from the rear without them noticing.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "It'll cost you an arm and a leg!",
        "description": "Throw the gaudiest-looking, most expensive weapon your team can afford around a corner and wait on the other side. When you hear or see someone pick it up, round the corner and kill them during the weapon swap animation.",
        "offense": false,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Jeopardy!",
        "description": "Your team may only communicate in the form of questions. (Unrated only): Every time you fail to do so, you must buy a pistol that you cannot sell back at the beginning of next round, starting with the least expensive and going to the most expensive, continuing back around if required.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Gift of the Magi",
        "description": "Everone buys the most expensive gun they can for the person above them, the top fragger buys for bottom frag.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "Master and Commander",
        "description": "(Requires a spectator in discord or the game): No one can communicate. The Commander must do their best to monitor all teammates and issue orders.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    {
        "name": "By the light of my gun (placeholder)",
        "description": "Unless firing, you must close your eyes.",
        "offense": true,
        "defense": true,
        "specificMaps": []
    },
    // {
    //     "name": "",
    //     "description": "",
    //     "offense": true,
    //     "defense": true,
    //     "specificMaps": []
    // }
]

//Template
// {
//     "name": "",
//     "description": "",
//     "offense": true,
//     "defense": true,
//     "specificMaps": []
////          An empty array indicates that this strat can be used on any map
////          Entering a single map name means that that is the only map this strat is available for
////          Title-case names, eg: "Bind", "Ascent", "Split"
// }
export default allStrats;
