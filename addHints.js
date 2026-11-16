const fs = require('fs');

// List your filenames here
const files = [
    'games/riddles/JSONs/riddles_easy.json',
    'games/riddles/JSONs/riddles_normal.json',
    'games/riddles/JSONs/riddles_hard.json',
    'games/riddles/JSONs/riddles_lunatic.json',
    'games/rebus puzzles/JSONs/rebus_easy.json',
    'games/rebus puzzles/JSONs/rebus_normal.json',
    'games/rebus puzzles/JSONs/rebus_hard.json',
    'games/rebus puzzles/JSONs/rebus_lunatic.json'
];

files.forEach(filePath => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        let puzzles = JSON.parse(data);

        puzzles = puzzles.map(puzzle => ({
            ...puzzle,
            hint: puzzle.hint || "No hint available yet." 
        }));

        fs.writeFileSync(filePath, JSON.stringify(puzzles, null, 4));
        
        console.log(`✅ Success: ${filePath} updated.`);
    } catch (err) {
        console.error(`❌ Error processing ${filePath}:`, err);
    }
});
