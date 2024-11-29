// This script synchronizes all the user's projects from GitHub, filters them, and writes the data to a JSON file.
// It is designed to be run as part of a GitHub Actions workflow for regular updates.
const axios = require("axios"); // Importing axios for making HTTP requests
const fs = require("fs"); // Importing the file system module to write data to files
const path = require("path"); // Importing the path module to handle file paths

// Define the GitHub username whose repositories need to be synchronized
const userName = "0xsarwagya";

// Function to fetch all repositories of the user from GitHub
const fetchAllRepos = async () => {
	// GitHub API endpoint for fetching user repositories
	const response = await axios.get(
		`https://api.github.com/users/${userName}/repos`
	);

	console.log(`Fetched ${response.data.length} repositories`); // Log the number of repositories fetched

	// Returning the list of repositories
	return response.data;
};

// Function to filter repositories
// It excludes forked repositories and repositories with the same name as the username
const filterRepos = (repos) => {
	const filteredRepos = repos.filter((repo) => {
		return repo.fork === false && repo.name !== userName; // Condition to filter out unwanted repositories
	});

	console.log(`Filtered ${repos.length - filteredRepos.length} repositories`); // Log the number of repositories filtered out

	return filteredRepos;
};

// Function to generate a JSON-friendly format for the filtered repositories
const generateJSON = (repos) => {
	console.log(`Generating JSON for ${repos.length} repositories`); // Log the number of repositories being converted to JSON

	const toReturn = repos
		.map((repo) => {
			return {
				name: repo.name, // Repository name
				description: repo.description, // Repository description
				url: repo.html_url, // Repository URL on GitHub
				stars: repo.stargazers_count, // Number of stars for the repository
				image: `https://socialify.git.ci/${repo.full_name}/image?description=1&language=1&name=1&owner=1&theme=Light`, // Image URL for the repository
				created_at: new Date(repo.created_at).getTime(), // Timestamp of when the repository was created
			};
		})
		.sort((a, b) => b.created_at - a.created_at); // Sort the repositories based on the newest repositories

	toReturn.forEach((repo) => {
		console.log(repo.name, repo.created_at);
	});
	return toReturn;
};

// Function to write the JSON data to a file
const writeToFile = (data) => {
	console.log("Writing data to file"); // Log a message indicating the start of writing data
	// Determine the path where the data will be saved
	const toWrite = path.join(process.cwd(), "data", "projects.json");

	// Write the data to the specified file
	fs.writeFile(toWrite, JSON.stringify(data, null, 2), (err) => {
		if (err) {
			console.error(err); // Log an error if writing fails
			return;
		}

		console.log("Projects Synced Successfully"); // Log success message if writing succeeds
	});
};

// Sort by date created
const sortRepos = (repos) => {
	return repos.sort((a, b) => b.created_at - a.created_at)
};

// Main function to coordinate fetching, filtering, formatting, and saving the repositories
const main = async () => {
	try {
		const repos = await fetchAllRepos(); // Fetch all repositories
		const filteredRepos = filterRepos(repos); // Filter the repositories
		const projects = generateJSON(filteredRepos); // Convert repositories to JSON format
		const sortedProjects = sortRepos(projects); // Sort the repositories based on stars
		writeToFile(sortedProjects); // Write the JSON data to a file
	} catch (error) {
		console.error(error); // Log any errors encountered during the process
	}
};

// Invoke the main function to start the synchronization process
main();
