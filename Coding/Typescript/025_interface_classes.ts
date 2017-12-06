// Loosely connected interface with Class
interface User {
	email: string;
	fristName? : string;
	lastName? : string;
}

class Admin {
	role : string;
	constructor(public email : string) {
		this.role = 'Admin';
	}
}

function profile(user: User) : string {
	return `Welcome, ${user.email}`;
}

var jose = new Admin('jose@example.com');
console.log(jose.role);

// Direct implementation
interface IPost {
	title: string;
	body: string;
}

class Post implements IPost {
	title: string;
	body: string;

	constructor(post: IPost) {
		this.title = post.title;
		this.body = post.body;
	}

	printPost() {
		console.log(this.title);
		console.log(this.body);
	}
}

var post = new Post({ title: "I drank what?", body: "it wasn't poison I swear"});
console.log(post.title);
console.log(post.body);
post.printPost();