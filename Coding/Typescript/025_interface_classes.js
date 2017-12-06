var Admin = /** @class */ (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'Admin';
    }
    return Admin;
}());
function profile(user) {
    return "Welcome, " + user.email;
}
var jose = new Admin('jose@example.com');
console.log(jose.role);
var Post = /** @class */ (function () {
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
var post = new Post({ title: "I drank what?", body: "it wasn't poison I swear" });
console.log(post.title);
console.log(post.body);
post.printPost();
//# sourceMappingURL=025_interface_classes.js.map