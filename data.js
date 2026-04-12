const EVENTS = [
    {
        id: "1",
        title: "ROBO SAGA",
        open:"yes",
        description: "Something exciting is on the way. Stay tuned!",
        fullDescription: "The thrilling era today is witnessing rapid metamorphosis in which maniacs can emerge with unsurpassable impetus to spur the development around them. This segment challenges your imagination to realize your dream of bot racing with churning wheels and puffing engine on the terrain you dream of.",
        date: "To be announced",
        location: "BIT Sindri",
        wlink:"https://unstop.com/o/RovjumI?lb=1PLt4xRq&utm_medium=Share&utm_source=events&utm_campaign=Harshkum3077",
        image: "./assets/robosaga.jpeg"
    },
    {
        id: "2",
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
        id: "3",
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
        id: "4",
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
        id: "5",
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
        id: "6",
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

