// Bot Configuration
module.exports = {
    // Bot Settings
    prefix: '/',
    adminNumbers: [], // Add admin numbers here
    maxMessageLength: 1000,
    cooldownTime: 3000, // 3 seconds
    
    // Cache Settings
    cache: {
        stdTTL: 600, // 10 minutes
        checkperiod: 120 // 2 minutes
    },
    
    // WhatsApp Client Settings
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu',
            '--disable-web-security',
            '--disable-features=VizDisplayCompositor'
        ]
    },
    
    // Web Version Cache
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    },
    
    // Performance Settings
    performance: {
        maxConcurrentRequests: 5,
        requestTimeout: 30000,
        memoryLimit: 512, // MB
        gcInterval: 300000 // 5 minutes
    },
    
    // Game Settings
    games: {
        maxAttempts: 5,
        timeLimit: 30, // seconds
        pointsWin: 20,
        pointsLose: 5,
        pointsDraw: 10
    },
    
    // API Settings
    apis: {
        timeout: 10000,
        retries: 3,
        rateLimit: {
            requests: 100,
            window: 60000 // 1 minute
        }
    }
};