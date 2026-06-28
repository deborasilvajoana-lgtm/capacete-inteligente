const bcrypt = require("bcryptjs");

const username = process.env.NODERED_USER || "admin";
const password = process.env.NODERED_PASSWORD || "capacete2026";

module.exports = {
    flowFile: "flows.json",
    credentialSecret: process.env.CREDENTIAL_SECRET || "capacete-inteligente-secret",
    uiPort: process.env.PORT || 1880,

    httpAdminRoot: "/red",
    httpNodeRoot: "/",

    adminAuth: {
        type: "credentials",
        users: [{
            username: username,
            password: bcrypt.hashSync(password, 8),
            permissions: "*"
        }]
    },

    httpNodeCors: {
        origin: "*",
        methods: "GET,PUT,POST,DELETE"
    },

    editorTheme: {
        projects: {
            enabled: false
        }
    },

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};