const {exec} = require('child_process');
const {promisify} = require('util');
const winston = require('winston');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.VERCEL_TOKEN;

const execAsync = promisify(exec);

const logger = winston.createLogger({
    level: "silly",
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6,
    },
    format: winston.format.combine(
        winston.format.label({ 
            label: 'deploy script'
         }),
        winston.format.colorize(),
        winston.format.timestamp({
            format: () => {
                return new Date().toLocaleString("en-US");
            },
        }),
        winston.format.align(),
        winston.format.printf(
            (info) =>
                `\x1b[34m(${info.label})\x1b[0m \x1b[33m${info.timestamp}\x1b[0m [${info.level}]: ${info.message}`,
        ),
    ),
    transports: [new winston.transports.Console()],
});

const deploy = async () => {
    try {
        const {stdout} = await execAsync('semantic-release');

        stdout.trim().split('\n').forEach((line) => {
            logger.info(line);
        });

        if (!stdout.includes('Published release')) {
            logger.info('No new release published. Exiting...');
            process.exit(0);
        }

        logger.info('New release published. Handling Vercel Deployment...');

        logger.info('Pulling vercel environment variables...');

        const {stdout: vercelEnvStdOut} = await execAsync(`vercel pull --environment=production --yes --token=${token}`);

        vercelEnvStdOut.trim().split('\n').forEach((line) => {
            logger.info(line);
        });

        logger.info('Successfully pulled Vercel environment variables');

        logger.info('Building for Vercel...');

        const {stdout: buildStdOut} = await execAsync(`vercel build --prod --token=${token}`);


        buildStdOut.trim().split('\n').forEach((line) => {
            logger.info(line);
        });

        logger.info('Successfully built for Vercel');

        logger.info('Deploying to Vercel...');

        const {stdout: deployStdOut} = await execAsync(`vercel deploy --prod --prebuilt --token=${token}`);

        
        deployStdOut.trim().split('\n').forEach((line) => {
            logger.info(line);
        });

        logger.info('Successfully deployed to Vercel');
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
}

deploy();