const API_TRELLO = 'asasdasda';

class PowerUp {
    private boardId: string;

    cardId: string;

    constructor() {
        console.log('PowerUp 2.0');

        this.boardId = 'aaa';

        this.getCardId();
        this.getBoardId();

        console.log('this.API_TRELLO', API_TRELLO);
        console.log('this.boardId', this.boardId);
        console.log('this.cardId', this.cardId);
    }

    getBoardId() {
        try {
            const href = window.location.href;
            let boardId = null;

            if (href) {
                const hrefSplit = href.split('/');

                if (hrefSplit.length) {
                    hrefSplit.forEach((value, key) => {
                        if (value === 'trello.com') {
                            if (hrefSplit[key + 2]) {
                                switch (hrefSplit[key + 1]) {
                                    case 'b':
                                        // View Card
                                        boardId = hrefSplit[key + 2];
                                        break;
                                }
                            }
                        }
                    });
                }
            }

            if (boardId) {
                this.boardId = boardId;
            }
        } catch (error) {
            this.handleError(error, 'getBoardId');
        }
    }

    getCardId() {
        try {
            const href = window.location.href;
            let cardId = '';

            if (href) {
                const hrefSplit = href.split('/');

                if (hrefSplit.length > 3) {
                    hrefSplit.forEach((value, key) => {
                        if (value === 'trello.com' && hrefSplit[key + 2] && hrefSplit[key + 1] === 'c') {
                            // View Card
                            cardId = hrefSplit[key + 2];
                        }
                    });
                }
            }

            if (cardId) {
                this.cardId = cardId;
            }
        } catch (error) {
            // Error
            this.handleError(error, 'getCardId');
        }
    }

    getBoardMembers() {
        try {

        } catch (error) {
            // Error
            this.handleError(error, 'getBoardMembers');
        }
    }

    handleError(error, path) {
        console.log('Error at ' + path + ' :', error);
    }
}

export default new PowerUp();
