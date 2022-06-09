class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        const existedBoard = this.boards.find((boardName) => boardName.name === board.name);

        if (!existedBoard) {
            board.plusBoard = true;
            this.boards.push(board);
        } else throw new Error();
    }

    findBoardByName(name) {
        return this.boards.find((board) => (board.name = name));
    }

    addBoard(board) {
        if (this.boards.find((e) => e.name === board.name)) throw new Error('Error!');
        board.addBoard = true;
        return this.boards.push(board);
    }

    findBoardByName(board) {
        return this.boards.find((e) => e.name === board);
    }
}

class Board {
    constructor(name) {
        if (name === null || name === '') throw new Error();

        this.name = name;
        this.articles = [];
        this.addBoard = false;
    }

    publish(article) {
        if (!this.addBoard) throw new Error();
        article.publish = true;
        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        this.articles.push(article);
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (!subject || !content || !author) {
            throw new Error();
        }

        this.subject = article.subject;
        this.content = article.content;
        this.author = article.author;
        this.comment = [];
    }

    reply(comment) {
        if (!this.publish) throw new Error("Error!");
        comment.createdDate = new Date().toISOString();
        this.comment.push(comment);
    }

    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor(Comment) {
        if (Comment.content === null || '') {
            throw new Error();
        } else if (Comment.author === null || '') {
            throw new Error();
        }

        this.content = Comment.content;
        this.author = Comment.author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
