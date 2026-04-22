const EVENTS = [
    {
        id: "1",
        title: "ROBO SAGA",
        open:"yes",
        description: "Something exciting is on the way. Stay tuned!",
        fullDescription: "The thrilling era today is witnessing rapid metamorphosis in which maniacs can emerge with unsurpassable impetus to spur the development around them. This segment challenges your imagination to realize your dream of bot racing with churning wheels and puffing engine on the terrain you dream of.",
        date: "09/05/2026 - 10/05/2026",
        location: "BIT Sindri",
        wlink:"https://unstop.com/o/RovjumI?lb=1PLt4xRq&utm_medium=Share&utm_source=events&utm_campaign=Harshkum3077",
        image: "./assets/robosaga.png"
    },
    {
        id: "2",
        title: "AQUA ARENA",
        open:"yes",
        description: "Something exciting is on the way. Stay tuned!",
        fullDescription: "Aqua Arena is an exciting water-based robotic competition designed to test participants’ engineering skills, strategic thinking, and precision control. Teams will navigate their boats through a water track, complete interactive tasks, and overcome challenging obstacles.",
        date: "09/05/2026 - 10/05/2026",
        location: "BIT Sindri",
        wlink:"https://unstop.com/o/7VH6L5a?lb=jm3QThrb&utm_medium=Share&utm_source=competitions&utm_campaign=Garvaraj51344",
        image: "./assets/aquarena.png"
    },
    {
        id: "3",
        title: "Drone-A-Thon",
        open:"yes",
        fullDescription: "The main motive of the event is to create a robust, economical, and user-friendly drone that could fit into our daily lives. The event would take place in three stages. The winner will be decided based on the stability, time of flight, and range of the drones.",
        date: "09/05/2026",
        location: "BIT Sindri",
        wlink:"https://unstop.com/o/cVb8xvF?lb=jm3QThrb&utm_medium=Share&utm_source=competitions&utm_campaign=Garvaraj51344",
        image: "./assets/dronathon.png",
    },
    {
        id: "4",
        title: "Pixel Play",
        open:"yes",
        fullDescription: "Pixel Play is a two-round UI/UX design competition designed to evaluate participants’ theoretical knowledge and practical design skills. The event focuses on creativity, usability, and the effective application of UI/UX principles.",
        date: "04/05/2026",
        location: "Unstop (online)",
        wlink:"https://unstop.com/o/woL3sYx?lb=jm3QThrb&utm_medium=Share&utm_source=competitions&utm_campaign=Garvaraj51344",
        image: "./assets/pixelplay.png",
    },
    {
        id: "5",
        title: "AlgoArena",
        open:"yes",
        fullDescription: "AlgoArena is a coding challenge designed to assess participants' fundamental problem-solving skills and coding accuracy. The contest focuses on building strong logical thinking through a set of well-curated questions, encouraging participants to write efficient and correct solutions.",
        date: "08/05/2026",
        location: "GeeksforGeeks (online)",
        wlink:"https://shorturl.at/k2r3a",
        image: "./assets/algoarena.png",
    },
    {
        id: "6",
        title: "HydroFlight",
        open:"yes",
        fullDescription: "Welcome to an exciting competition centered around the fascinating concept of water-pressure propulsion. Participants will showcase their creativity and engineering skills by designing, building, and launching their own water rockets. This challenge goes beyond just racing; it evaluates your understanding of aerodynamics, propulsion mechanics, and energy efficiency while pushing you to innovate and perform under real conditions.",
        date: "09/05/2026-10/05/2026",
        location: "Unstop (online)",
        wlink:"https://shorturl.at/nOJrO",
        image: "./assets/hydroflight.png",
    },
    {
        id: "7",
        title: "Coming Soon",
        open:"no",
        description: "Something exciting is on the way. Stay tuned!",
        fullDescription: "Something exciting is quietly taking shape behind the scenes. While we’re not ready to reveal all the details just yet, we can promise that it’s going to be worth the wait. This upcoming event is being carefully crafted to bring something fresh, engaging, and memorable. Whether you’re here out of curiosity or anticipation, you won’t want to miss what’s coming next. Stay tuned as we get closer to unveiling everything.",
        date: "Date Revealing Soon",
        category: "Technical",
        location: "Venue will be revealed soon",
        image: "./assets/coming.jpg",
        schedule: ["To be announced"]
    },
    {
        id: "8",
        title: "Coming Soon",
        open:"no",
        description: "Something exciting is on the way. Stay tuned!",
        fullDescription: "Something exciting is quietly taking shape behind the scenes. While we’re not ready to reveal all the details just yet, we can promise that it’s going to be worth the wait. This upcoming event is being carefully crafted to bring something fresh, engaging, and memorable. Whether you’re here out of curiosity or anticipation, you won’t want to miss what’s coming next. Stay tuned as we get closer to unveiling everything.",
        date: "Date Revealing Soon",
        category: "Technical",
        location: "Venue will be revealed soon",
        image: "./assets/coming.jpg",
        schedule: ["To be announced"]
    },
    {
        id: "9",
        title: "Coming Soon",
        open:"no",
        description: "Something exciting is on the way. Stay tuned!",
        fullDescription: "Something exciting is quietly taking shape behind the scenes. While we’re not ready to reveal all the details just yet, we can promise that it’s going to be worth the wait. This upcoming event is being carefully crafted to bring something fresh, engaging, and memorable. Whether you’re here out of curiosity or anticipation, you won’t want to miss what’s coming next. Stay tuned as we get closer to unveiling everything.",
        date: "Date Revealing Soon",
        category: "Technical",
        location: "Venue will be revealed soon",
        image: "./assets/coming.jpg",
        schedule: ["To be announced"]
    },
    {
        id: "10",
        title: "Coming Soon",
        open:"no",
        description: "Something exciting is on the way. Stay tuned!",
        fullDescription: "Something exciting is quietly taking shape behind the scenes. While we’re not ready to reveal all the details just yet, we can promise that it’s going to be worth the wait. This upcoming event is being carefully crafted to bring something fresh, engaging, and memorable. Whether you’re here out of curiosity or anticipation, you won’t want to miss what’s coming next. Stay tuned as we get closer to unveiling everything.",
        date: "Date Revealing Soon",
        category: "Technical",
        location: "Venue will be revealed soon",
        image: "./assets/coming.jpg",
        schedule: ["To be announced"]
    }


    //event sample
    // {
    //     id: "5",
    //     title: "Oscorp Chemistry Lab",
    //     description: "A high-stakes chemistry competition. Don't turn into a lizard!",
    //     fullDescription: "Step into the world of advanced biochemistry at the Oscorp Chemistry Lab. This competition challenges your knowledge of molecular structures and chemical reactions. Solve complex puzzles and perform safe but spectacular experiments. Remember: safety first, and try not to accidentally create any cross-species mutations.",
    //     date: "April 16, 2026",
    //     category: "Science",
    //     image: "https://picsum.photos/seed/chemistry/800/600",
    //     schedule: ["09:30 AM - Lab Safety Briefing", "10:30 AM - Round 1: Theory", "01:30 PM - Round 2: Practical", "04:00 PM - Results"]
    // }
];

