const { username, password } = process.env;

// const connectionStr = `mongodb+srv://${username}:${password}@cluster0.hju83.mongodb.net/Lead-play?retryWrites=true&w=majority&appName=Cluster0`;
// const connectionStr = `mongodb+srv://${username}:${password}@cluster0.hju83.mongodb.net/Lead-play?retryWrites=true&w=majority&appName=Cluster0`;
export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.hju83.mongodb.net/Lead-play?retryWrites=true&w=majority&appName=Cluster0`;
